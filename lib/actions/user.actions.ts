"use server";

import { MemberRole } from "@prisma/client";
import { currentProfile } from "../current-profile";
import { v4 as uuidv4 } from "uuid";
import { db } from "../db";

interface createServerProps {
  name: string;
  imageUrl: string;
}

interface editServerProps {
  name: string;
  imageUrl: string;
  serverId: string;
}

interface changeRoleProps {
  memberId: string;
  serverId: string;
  role: MemberRole;
}

export async function createServer({ name, imageUrl }: createServerProps) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        channels: {
          create: [{ name: "general", profileId: profile.id }],
        },
        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return server;
  } catch (error: any) {
    console.log("[SERVERS_POST]", error);
    throw new Error(`Failed to create server: ${error.message}`);
  }
}

export async function editServer({
  name,
  imageUrl,
  serverId,
}: editServerProps) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return server;
  } catch (error: any) {
    console.log("[SERVER_ID_PATCH]", error);
    throw new Error(`Failed to edit server: ${error.message}`);
  }
}

export async function deleteServer({ serverId }: { serverId: string }) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    const server = await db.server.delete({
      where: {
        id: serverId,
        profileId: profile.id,
      },
    });

    return server;
  } catch (error: any) {
    console.log("[SERVER_ID_DELETE]", error);
    throw new Error(`Failed to delete server: ${error.message}`);
  }
}

export async function leaveServer({ serverId }: { serverId: string }) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    if (!serverId) {
      throw new Error("Server ID missing");
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: {
          not: profile.id,
        },
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
      data: {
        members: {
          deleteMany: {
            profileId: profile.id,
          },
        },
      },
    });

    return server;
  } catch (error: any) {
    console.log("[SERVER_ID_LEAVE]", error);
    throw new Error(`Failed to leave server: ${error.message}`);
  }
}

export async function inviteUser({ serverId }: { serverId: string }) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    if (!serverId) {
      throw new Error("Server ID missing");
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        inviteCode: uuidv4(),
      },
    });

    return server;
  } catch (error: any) {
    console.log("[SERVER_ID]", error);
    throw new Error(`Failed to invite in server: ${error.message}`);
  }
}

export async function addUserToServer({ inviteCode }: { inviteCode: string }) {
  const profile = await currentProfile();

  if (!profile) {
    throw new Error("Unauthorized");
  }

  if (!inviteCode) {
    throw new Error("Invite code missing");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return existingServer;
  }

  const server = await db.server.update({
    where: {
      inviteCode: inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  return server;
}

export async function changeRole({
  memberId,
  serverId,
  role,
}: changeRoleProps) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      throw new Error("Unauthorized");
    }

    if (!serverId) {
      throw new Error("Server ID missing");
    }

    if (!memberId) {
      throw new Error("Member ID missing");
    }

    const server = await db.server.update({
      where: {
        id: serverId,
        profileId: profile.id,
      },
      data: {
        members: {
          update: {
            where: {
              id: memberId,
              profileId: {
                not: profile.id,
              },
            },
            data: {
              role,
            },
          },
        },
      },
      include: {
        members: {
          include: {
            profile: true,
          },
          orderBy: {
            role: "asc",
          },
        },
      },
    });

    return server;
  } catch (error: any) {
    console.log("[MEMBERS_ID_PATCH]", error);
    throw new Error(`Failed to change role of user: ${error.message}`);
  }
}
