# Basic Express.js Application

A simple Express.js application that demonstrates user authentication, profile management, and CRUD functionality.
This is a basic version of link-in-bio plus anonymous feedback app.

## Features

- User Authentication (Register/Login)
- Profile Management
- Link Management (CRUD operations)
- Public Profile Viewing
- Feedback System (`not implemented`)

## Tech Stack

- **Backend:** Express.js
- **Database:** Prisma with SQLite
- **Template Engine:** EJS
- **Authentication:** Session-based

## Directory Structure

- `controllers/`: Contains route handlers and business logic
- `routes/`: Express route definitions
- `views/`: EJS templates
- `middlewares/`: Custom middleware functions
- `lib/`: Utility functions and database configuration
- `prisma/`: Prisma schema and migrations
- `tests/`: Test files

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- pnpm

### Setup

1. Clone the repository and install dependencies:
   ```bash
   pnpm install
   ```

2. Set up the database:
   ```bash
   pnpm prisma migrate dev
   ```

3. Start the development server:
   ```bash
   pnpm start
   ```

## API Routes

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - User login
- `GET /auth/logout` - User logout

### Profile
- `GET /profile` - View user profile
- `POST /profile` - Update profile information

### Links
- `GET /links` - List user's links
- `POST /links` - Add a new link
- `PUT /links/:id` - Update a link
- `DELETE /links/:id` - Delete a link

### Public
- `GET /:username` - View public profile

### Feedback
- `POST /feedback` - Submit feedback

## Testing

Run the test suite:
```bash
pnpm test
```