# NOTHING - The Ultimate Study Oasis

NOTHING is a comprehensive platform designed to streamline the academic experience by combining study group management, classroom interactions, and messaging into a single unified interface.

## Project Overview

NOTHING eliminates the need for multiple applications by providing:

- **Server-based Study Groups**: Create and join servers (study groups) with various channels for different topics or subjects.
- **Text Communication**: Chat communication in both group and direct message settings.
- **File Sharing**: Share notes, documents, and images directly within the platform.
- **Secure Environment**: Authentication based on institutional enrollment numbers ensures a secure academic space.

## Features

- **Authentication**: User authentication powered by Clerk
- **Server Management**: Create, join, and manage servers with different channels
- **Channel Types**: Text channels for group discussions
- **Real-time Communication**: Socket.IO for text messages
- **Responsive Design**: Works on both desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## Tech Stack

### Frontend
- React.js
- Next.js 13 with App Router
- Shadcn UI
- Tailwind CSS
- Zustand for state management

### Backend
- Next.js API Routes
- Socket.IO

### Database
- Prisma ORM
- MySQL (via PlanetScale)

### File Upload
- Uploadthing

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- A PlanetScale account (or any MySQL database)
- A Clerk account for authentication
- An Uploadthing account for file uploads

### Installation

1. Clone the repository:
   ```
   git clone https://your-repository-url.git
   cd nothing-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables by creating a `.env` file based on the provided `.env.example`:
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # Database (PlanetScale)
   DATABASE_URL='mysql://username:password@hostname/database?sslaccept=strict'

   # Uploadthing
   UPLOADTHING_SECRET=your-uploadthing-secret
   UPLOADTHING_APP_ID=your-uploadthing-app-id
   ```

4. Push the Prisma schema to your database:
   ```
   npx prisma db push
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser to see the application.

## User Flow

1. Sign up or sign in with Clerk authentication
2. Create your first server (study group)
3. Invite others to your server using the invite code
4. Create channels for different topics or subjects
5. Start discussions in text channels
6. Share files and collaborate with other users

## Project Structure

- `/app`: Next.js app directory containing routes and API endpoints
- `/components`: React components organized by functionality
- `/hooks`: Custom React hooks for state management and API calls
- `/lib`: Utility functions and database connection
- `/prisma`: Database schema and migrations

## Key Components

### Server Components
- **ServerSidebar**: A navigation sidebar component that displays all channels within a server. Features:
  - Dynamic channel list fetched from the API
  - Active channel highlighting
  - Responsive design that collapses on mobile
  - Loading states for better user experience

### UI Components
- **ScrollArea**: A custom scrollable area with stylized scrollbars
- **Separator**: A visual divider for UI sections

## Authors

- Your Name

## License

This project is licensed under the MIT License.
