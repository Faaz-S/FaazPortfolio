# Portfolio Website - Faaz Sherwani

## Overview

This is a personal portfolio website for Faaz Sherwani, a Software Developer and Robotics Enthusiast. The project is built as a full-stack application with a React frontend and Express backend, featuring a modern dark theme with neon accents and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using functional components and hooks
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with a custom dark theme and neon color palette
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Uses tsx for TypeScript execution in development
- **Build Process**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Implementation**: Memory storage for development with interface for database operations

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer, AnimatedBackground
- **Content Components**: ProjectCard, SkillBadge, SectionWrapper for portfolio sections
- **UI Library**: Complete set of reusable components (buttons, cards, forms, etc.)
- **Responsive Design**: Mobile-first approach with smooth animations and hover effects

### Backend Components
- **Server Setup**: Express application with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with memory implementation and database interface
- **Route Structure**: API routes prefixed with `/api` (currently minimal setup)
- **Development Tools**: Vite integration for hot reloading in development

### Styling System
- **Theme**: Dark theme with CSS custom properties
- **Color Palette**: Neon green (#39FF14), neon cyan (#0FF), neon red (#FF073A)
- **Typography**: Inter font family with JetBrains Mono for code elements
- **Animations**: Smooth scrolling, hover effects, and fade-in animations

## Data Flow

### Current State
- Static portfolio data rendered on the frontend
- Memory storage implementation for user data (development)
- No active API endpoints currently implemented

### Planned Data Flow
1. **Portfolio Content**: Static data rendered directly in React components
2. **Contact Forms**: Potential API endpoints for handling contact submissions
3. **User Management**: Basic user schema defined for future authentication features
4. **Database Operations**: CRUD operations abstracted through storage interface

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing
- **@radix-ui/***: Headless UI components for accessibility

### Development Tools
- **tsx**: TypeScript execution for development
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **tailwind-merge**: Tailwind class merging utility

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served from the dist directory

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Uses NODE_ENV=development with hot reloading
- **Production**: NODE_ENV=production with optimized builds

### Development Workflow
- **Dev Command**: `npm run dev` - Runs server with tsx and Vite integration
- **Build Command**: `npm run build` - Creates production builds for both frontend and backend
- **Database**: `npm run db:push` - Pushes schema changes to database using Drizzle Kit

### Architecture Decisions

**React + Express Monorepo**: Chosen for simplicity and shared TypeScript configuration between frontend and backend. Allows for easy development and deployment while maintaining clear separation of concerns.

**Drizzle ORM**: Selected for type-safe database operations with PostgreSQL. Provides excellent TypeScript integration and migration management.

**Tailwind CSS + Radix UI**: Combination provides rapid styling with accessible components. Tailwind offers utility-first styling while Radix ensures proper accessibility patterns.

**Memory Storage with Database Interface**: Current implementation uses memory storage for development but provides interface for easy database integration when needed.