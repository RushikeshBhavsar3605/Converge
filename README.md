# Converge

A real-time communication platform focused on low-latency messaging, permission-aware channels, and scalable WebSocket-based systems.

---

## What this project explores

Converge is built to study **real-time messaging systems** and **multi-user coordination**, specifically:

- WebSocket-based message delivery at scale
- Consistency guarantees for message edits and deletes
- Permission-aware access control in shared channels
- Integrating real-time media (voice/video) into chat systems

The focus is on **backend behavior, data flow, and real-time guarantees**, not UI polish.

---

## Key Engineering Features

- **Real-time Messaging System**

  - Socket.IO–based bi-directional communication
  - Ordered message delivery with edit/delete propagation
  - Cursor-based pagination for infinite scroll
  - Connection state tracking and automatic reconnection

- **Server & Channel Authorization Model**

  - Hierarchical Server → Channel structure
  - Role-based permissions (Admin / Moderator / Guest)
  - Permission-aware message queries and event emission

- **Direct Messaging Architecture**

  - Isolated one-to-one conversations
  - Separate persistence and socket namespaces from server channels
  - Independent pagination and access checks

- **Voice & Video Communication**

  - LiveKit integration for real-time audio/video rooms
  - Token-based access control per channel
  - Ephemeral media sessions decoupled from message persistence

- **File & Media Handling**

  - Secure file uploads with size/type validation
  - Message attachment previews and permission checks

---

## Architecture Overview

- **Frontend**: Next.js App Router + React 18
- **Real-time Layer**: Socket.IO (persistent connections)
- **Backend**: API routes + server actions
- **Database**: MongoDB with Prisma ORM
- **Auth**: Clerk
- **Media**: LiveKit

WebSocket connections are scoped per server and channel to avoid cross-channel leakage and ensure correct permission enforcement.

---

## Design Decisions & Trade-offs

- **Socket.IO over polling**
  Chosen for low-latency message delivery and simpler room-based broadcasting.

- **MongoDB for chat persistence**
  Flexible schema and fast iteration for message and membership models.

- **Separate namespaces for DMs vs channels**
  Prevents permission coupling and simplifies authorization logic.

- **External media service (LiveKit)**
  Offloads heavy real-time media handling from the application server.

---

## Tech Stack

- **Languages**: TypeScript
- **Frameworks**: Next.js, React
- **Real-time**: Socket.IO
- **Database**: MongoDB, Prisma
- **Auth**: Clerk
- **Media**: LiveKit
- **Styling**: Tailwind CSS, Shadcn UI

---

## Local Setup

```bash
npm install
npm run dev
```

Environment variables for database, authentication, and media services are required.
Sensitive infrastructure details are intentionally omitted.

---

## Deployment

Requires a platform that supports **persistent WebSocket connections**.
Suitable for Render or similar providers.

---

## Author

Rushikesh Bhavsar
[https://github.com/RushikeshBhavsar3605](https://github.com/RushikeshBhavsar3605)
