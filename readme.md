# WatchTowr Test

### By Grant Johnson

## Assignment from WatchTowr

> For this home assignment, we'd like you to create a basic full-stack Expense Tracking application. The backend should utilize NestJS and TypeScript, while the frontend should be developed with ReactJS. Communication between the frontend and backend should be implemented using a GraphQL API. A single-page application with a form for adding expenses and a list of expenses displayed below is sufficient. The primary goal is to demonstrate the application structure you would typically employ in a real-world scenario. We will discuss potential enhancements and associated challenges during the interview.

## Project Structure

```
.
├── client/          # React frontend application
└── server/          # NestJS backend application
```

## Technical Stack

### Backend

- NestJS with TypeScript
- Apollo Server for GraphQL
- In-memory data storage

### Frontend

- React with Vite
- Apollo Client for GraphQL
- ShadCN for UI components
- TanStack Table for data display
- GraphQL CodeGen for type generation

## Getting Started

1. Install dependencies in client, server and parent folders:

   ```bash
   pnpm i
   ```

2. Start both applications:
   ```bash
   pnpm dev
   ```

## Development Servers

- Frontend: http://localhost:5176
- Backend: http://localhost:3000

The development script uses `concurrently` to run both applications simultaneously.
