# <img src="public/logo.svg" width="32" style="vertical-align:-6px;" /> Converge - Real-Time Communication Platform

A modern, full-featured Discord clone built with Next.js, featuring real-time messaging, voice/video calls, and comprehensive server management capabilities. Experience seamless communication with text channels, audio/video rooms, direct messaging, and role-based permissions.

![Next.js](https://img.shields.io/badge/Next.js-ffffff?style=flat&logo=nextdotjs&logoColor=000)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-ffffff?style=flat&logo=socketdotio&logoColor=010101)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat&logo=clerk&logoColor=white)
![LiveKit](https://img.shields.io/badge/LiveKit-00BFFF?style=flat&logo=livekit&logoColor=white)

## ✨ Features

### Real-Time Messaging Architecture

Built on Socket.io with optimized real-time communication:

- **Instant Messaging**: Real-time message delivery across channels and direct conversations
- **Message Updates**: Live synchronization of message edits and deletions
- **Infinite Scroll**: Paginated message loading with cursor-based pagination
- **Connection Status**: Real-time connection indicator for WebSocket status
- **Automatic Reconnection**: Fallback polling when WebSocket disconnects

The messaging system uses React Query for efficient data fetching and Socket.io for real-time updates.

### Authentication System

Authentication is handled through Clerk integration, providing secure user management and session handling for the application.

### Server & Channel Management

Hierarchical organization with Discord-like structure:

- **Server Creation**: Create and customize servers with images and names
- **Channel Types**: Support for TEXT, AUDIO, and VIDEO channels
- **Role-Based Access**: Three-tier permission system (ADMIN, MODERATOR, GUEST)
- **Server Settings**: Comprehensive server configuration options
- **Member Management**: Invite, kick, and manage member roles

The server architecture supports unlimited channels per server with granular permission controls.

### Voice & Video Communication

Voice and video functionality is integrated through LiveKit, supporting real-time audio/video communication in dedicated channels.

### Message Features & Interactions

Rich messaging experience with comprehensive features:

- **File Uploads**: Share images and PDF files in conversations
- **Emoji Picker**: Integrated emoji selector for message reactions
- **Message Editing**: Edit your own messages with inline editing
- **Message Deletion**: Delete messages with proper permission checks
- **Role Indicators**: Visual badges for ADMIN and MODERATOR roles
- **Timestamps**: Formatted timestamps with edit indicators

Messages support both text content and file attachments with image previews.

### Direct Messaging System

Private one-on-one conversations:

- **Conversation Management**: Automatic conversation creation between members
- **Private Messaging**: Secure direct messages between server members
- **Message History**: Full conversation history with pagination
- **Click-to-DM**: Quick access to direct messages from any member

Direct messages are isolated from server channels and maintain privacy between participants.

### Invite System

Share servers with unique invite codes:

- **Unique Invite Links**: Generate secure invite codes for each server
- **Invite Management**: Admins and moderators can generate invites
- **Join via Link**: New members can join servers using invite codes
- **Member Onboarding**: Automatic member creation on server join

### Modal System

Comprehensive modal-based UI interactions:

- **Server Modals**: Create, edit, and delete servers
- **Channel Modals**: Manage channels (create, edit, delete)
- **Member Management**: Modal for managing server members
- **File Upload**: Dedicated modal for file attachments
- **Confirmation Dialogs**: Safe deletion confirmations

The modal system uses Zustand for global state management ensuring smooth UX.

### Theme System

Dark and light mode support:

- **Theme Toggle**: Switch between dark and light themes
- **System Detection**: Automatic theme detection from system preferences
- **Persistent Theme**: Theme preference saved across sessions
- **Tailwind CSS**: Modern styling with theme-aware utilities

### Mobile Responsive Design

Optimized for all devices:

- **Mobile Navigation**: Collapsible sidebar for mobile devices
- **Touch Optimized**: Touch-friendly interactions and gestures
- **Responsive Layouts**: Adaptive layouts for different screen sizes
- **Mobile Toggle**: Dedicated mobile menu component

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 13.4.12 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn UI (Dialog, Dropdown, Select, etc.)
- **State Management**: Zustand for global state
- **Forms**: React Hook Form + Zod validation

### Backend

- **Authentication**: Clerk (multi-provider authentication)
- **Database**: MongoDB with Prisma ORM
- **Real-time**: Socket.io for WebSocket communication
- **File Storage**: UploadThing for file uploads
- **Media**: LiveKit for audio/video calls

### Data Fetching

- **Query Management**: TanStack React Query (v4)
- **HTTP Client**: Axios for API requests
- **Query String**: qs for URL parameter serialization

## 📦 Installation

```bash
# Clone the repository  [header-1](#header-1)
git clone https://github.com/RushikeshBhavsar3605/Converge.git
cd Converge

# Install dependencies  [header-2](#header-2)
npm install

# Set up environment variables  [header-3](#header-3)
# Create a .env file with required variables (see below)  [header-4](#header-4)

# Generate Prisma Client  [header-5](#header-5)
npx prisma generate

# Push database schema  [header-6](#header-6)
npx prisma db push

# Start development server  [header-7](#header-7)
npm run dev
```

## 🔧 Available Scripts

```
npm run dev      # Start development server on localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 🌐 Environment Variables

Create a .env file in the root directory with the following variables:

```
# Database  [header-8](#header-8)
DATABASE_URL="your_mongodb_connection_string"

# Clerk Authentication  [header-9](#header-9)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# UploadThing (File Uploads)  [header-10](#header-10)
UPLOADTHING_SECRET="your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"

# LiveKit (Voice & Video)  [header-11](#header-11)
LIVEKIT_API_KEY="your_livekit_api_key"
LIVEKIT_API_SECRET="your_livekit_api_secret"
NEXT_PUBLIC_LIVEKIT_URL="your_livekit_url"

# Application URL  [header-12](#header-12)
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## 📁 Project Structure

```
converge/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (invite)/          # Invite link handling
│   ├── (main)/            # Main application
│   │   └── (routes)/      # Server and channel routes
│   ├── (setup)/           # Initial server setup
│   └── api/               # API routes
│       ├── channels/      # Channel management APIs
│       ├── direct-messages/ # DM APIs
│       ├── livekit/       # Video/audio token generation
│       ├── members/       # Member management
│       ├── messages/      # Message APIs
│       ├── servers/       # Server management APIs
│       └── uploadthing/   # File upload handling
├── components/            # React components
│   ├── chat/             # Chat-related components
│   ├── modals/           # Modal components
│   ├── navigation/       # Navigation components
│   ├── providers/        # Context providers
│   ├── server/           # Server sidebar components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
│   ├── use-chat-query.ts    # Message fetching
│   ├── use-chat-socket.ts   # Real-time updates
│   ├── use-chat-scroll.ts   # Auto-scroll logic
│   └── use-modal-store.ts   # Modal state management
├── lib/                  # Utility functions
│   ├── current-profile.ts   # User profile utilities
│   ├── db.ts               # Prisma client
│   └── uploadthing.ts      # Upload utilities
├── pages/                # Pages Router (for Socket.io)
│   └── api/
│       └── socket/       # Socket.io handlers
│           ├── direct-messages/
│           ├── messages/
│           └── io.ts     # Socket initialization
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema definition
└── public/               # Static assets
```

## 🚀 Deployment

This application cannot be deployed on Vercel as it uses `Socket.io`, which requires a persistent server, and Vercel is a serverless platform. However, you can deploy it on other platforms that support long-lived connections, such as Render or similar platforms.

Here's how you can deploy on Render:

1. Push your code to GitHub
2. Import your repository in Render
3. Add all environment variables
4. Deploy!

## 👤 Author

Rushikesh Bhavsar

- GitHub: [@RushikeshBhavsar3605](https://github.com/RushikeshBhavsar3605)

  <a href="https://github.com/RushikeshBhavsar3605">
  <img src="https://avatars.githubusercontent.com/u/129877176?v=4" alt="GitHub Profile" style="width: 45px; height: 45px; border-radius: 50%;" />
  </a>

## 🙏 Acknowledgments

- Inspired by Discord's amazing communication platform
- Built using modern web technologies

---

⭐ If you like this project, please give it a star on GitHub!
