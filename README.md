# 🎮 Converge - Real-time Communication Platform

Converge a feature-rich application inspired by Discord built with modern web technologies, offering real-time messaging, voice & video calls, and server management capabilities.

![Next.js](https://img.shields.io/badge/Next.js-13-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-Prisma-green) ![Socket.io](https://img.shields.io/badge/Socket.io-4.7-orange)

## 🔗 Live Project:

- Explore the live version of the project here: [Live Project](https://converge.render.com/)

## ✨ Features

### 🔐 Authentication & Authorization

- Secure authentication powered by Clerk
- User profile management with avatars

### 🏠 Server Management

- Create and customize servers with unique images
- Invite system with unique invite codes
- Role-based access control (Admin, Moderator, Guest)
- Server settings and member management

### 💬 Communication

- **Real-time Messaging**: Instant message delivery using Socket.io
- **Text Channels**: Organized conversations within servers
- **Direct Messages**: Private one-on-one conversations
- **Message Management**: Edit and delete your messages
- **File Attachments**: Share images and files via UploadThing
- **Emoji Support**: Rich emoji picker for expressive conversations

### 🎙️ Voice & Video

- Audio channels for voice communication
- Video channels for face-to-face conversations
- Powered by LiveKit for high-quality real-time communication

### 🎨 User Experience

- Beautiful, responsive UI built with Tailwind CSS and Radix UI
- Dark/Light mode toggle
- Mobile-friendly design
- Real-time connection status indicator
- Smooth animations and transitions

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query
- **Forms**: React Hook Form + Zod validation

### Backend

- **Database**: MongoDB
- **ORM**: Prisma
- **Authentication**: Clerk
- **Real-time**: Socket.io
- **File Upload**: UploadThing
- **Video/Audio**: LiveKit

## 📦 Installation

### Prerequisites

- Node.js 18+
- MongoDB database
- Clerk account
- UploadThing account
- LiveKit account

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/RushikeshBhavsar3605/Converge.git
cd Converge
```

2. **Install dependencies**

```bash
npm install
```

3. Set up environment variables
   Create a .env file in the root directory with the following variables:

```bash
# Database  [header-1](#header-1)
DATABASE_URL="your-mongodb-connection-string"

# Clerk Authentication  [header-2](#header-2)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# UploadThing  [header-3](#header-3)
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# LiveKit  [header-4](#header-4)
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=

# Next Public URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

Open http://localhost:3000 to see your application.

## 📁 Project Structure

```bash
Converge/
├── app/                    # Next.js 13 app directory
│   ├── (auth)/            # Authentication routes
│   ├── (invite)/          # Invite handling routes
│   ├── (main)/            # Main application routes
│   ├── (setup)/           # Initial setup routes
│   └── api/               # API routes
├── components/            # React components
│   ├── chat/             # Chat-related components
│   ├── modals/           # Modal dialogs
│   ├── navigation/       # Navigation components
│   ├── providers/        # Context providers
│   ├── server/           # Server-related components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Prisma schema
└── types.ts              # TypeScript type definitions
```

## 🚀 Deployment

This application cannot be deployed on Vercel as it uses `Socket.io`, which requires a persistent server, and Vercel is a serverless platform. However, you can deploy it on other platforms that support long-lived connections, such as Render or similar platforms.

Here's how you can deploy on Render:

1. Push your code to GitHub
2. Import your repository in Render
3. Add all environment variables
4. Deploy!

## 🔑 Key Implementation Highlights

- **Real-time Communication:** Implemented using Socket.io for instant message delivery
- **Optimistic Updates:** Enhanced UX with React Query's optimistic update patterns
- **Type Safety:** Full TypeScript implementation for better developer experience
- **Scalable Architecture:** Modular component structure following Next.js 13 best practices
- **Database Design:** Well-structured Prisma schema with proper relationships and indexes

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
