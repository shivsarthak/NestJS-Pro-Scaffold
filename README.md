# 🚀 NestJS Boilerplate Project

Kickstart your backend development with this powerful NestJS boilerplate! Packed with essential features and integrations, this project provides a solid foundation for building robust and scalable applications.

## ✨ Key Features

- 🏗️ **[NestJS](https://nestjs.com/)** - A progressive Node.js framework for building efficient and scalable server-side applications
- 🗄️ **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript
- 📊 **[BullMQ](https://docs.bullmq.io/)** - Premium job and message queue for Node.js, backed by Redis
- 🔐 **Authentication**
  - 🌐 Google OAuth for seamless social login
  - 🔑 JWT-based local authentication for secure access
- 🚀 **[Redis](https://redis.io/)** - In-memory data structure store for caching and session management
- 📚 **[Swagger](https://swagger.io/)** - API documentation made easy
- 🔒 **[Passport](http://www.passportjs.org/)** - Authentication middleware for Node.js
- 🔄 **[Axios](https://axios-http.com/)** - Promise-based HTTP client for the browser and Node.js
- 🛡️ **[Class Validator](https://github.com/typestack/class-validator)** - Decorator-based property validation for classes

## 🛠️ Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database
- Redis server

## 🚀 Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.sample` to `.env`
   - Fill in the required environment variables

4. Set up the database:
   ```
   npx prisma migrate dev
   ```

5. Start the development server:
   ```
   npm run start:dev
   ```

## 🔧 Environment Variables

Ensure you set the following environment variables in your `.env` file:

- `DATABASE_URL`: PostgreSQL connection URL
- `REDIS_URL`: Redis connection URL
- `JWT_SECRET`: Secret key for JWT token generation
- `GOOGLE_OAUTH_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_OAUTH_CLIENT_SECRET`: Google OAuth client secret
- `GOOGLE_OAUTH_SCOPES`: Comma-separated list of Google OAuth scopes
- `GOOGLE_OAUTH_REDIRECT_URL`: Google OAuth redirect URL

## 📜 Available Scripts

- `npm run start`: Launch the production server
- `npm run start:dev`: Start the development server with hot-reloading
- `npm run build`: Build the application
- `npm run prisma:generate`: Generate Prisma client
- `npm run prisma:migrate`: Run Prisma migrations
- `npm run test`: Run tests
- `npm run test:e2e`: Run end-to-end tests
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## 📚 API Documentation

Once the server is up and running, you can access the following services:

| Service                    | URL                           |
|----------------------------|-------------------------------|
| API                        | http://localhost:3000         |
| API Swagger Documentation  | http://localhost:3000/docs    |
| BullMQ Dashboard           | http://localhost:3000/queues  |
