# DeliWer Shopping Metaverse - iPhone-to-Water Trade Service

## Overview

DeliWer is a Dubai-based sustainable technology platform that transforms the traditional device trade-in market by offering customers the ability to exchange their old iPhones for premium water filtration systems and dining vouchers. The platform combines e-commerce functionality with environmental sustainability, featuring an AI-powered valuation system, partnership integration with local restaurants, and comprehensive reward programs. The application serves as both a customer-facing trade-in portal and a backend management system for processing device valuations and applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form submissions
- **Styling**: Custom CSS variables for brand colors (aqua-primary, dubai-gold, dirham-green) with responsive design

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API endpoints for device valuations and trade-in applications
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Storage**: In-memory storage implementation with interface-based design for easy database migration

### Database Schema
- **Trade-in Applications**: Stores customer submissions with device details, contact information, and trade preferences
- **Device Valuations**: Maintains pricing data for different iPhone models, storage configurations, and conditions
- **Users**: Basic user management structure for future authentication features
- **Data Types**: Uses Drizzle ORM schema definitions with PostgreSQL dialect configuration

### Component Architecture
- **Section-based Layout**: Modular sections (Hero, Calculator, Benefits, etc.) for maintainable code structure
- **Reusable UI Components**: Comprehensive component library with consistent styling and behavior
- **AI Chat Widget**: Interactive assistant for customer support and guidance
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Integration Systems
- **WhatsApp Integration**: Direct messaging for quotes and customer support
- **Email Integration**: Automated communication for partnership inquiries
- **Phone Integration**: Click-to-call functionality for immediate customer service

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Primary database dialect for production deployment

### Third-party UI Libraries
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe variant styling for components

### Communication Services
- **WhatsApp Business API**: Customer communication and quote delivery
- **Email Services**: Partnership and support communication channels
- **Phone Integration**: Direct calling capabilities for customer service

### Development Tools
- **Vite**: Fast build tool with hot module replacement
- **TypeScript**: Static type checking across frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

### Business Partnerships
- **Bakers Kitchen UAE**: Restaurant partner providing meal vouchers as trade-in rewards
- **AquaCafe Systems**: Water filtration system provider for device trade conversions
- **Dubai Airport Freezone**: Collection point and logistics partner
- **Affiliate Network**: Community-based device aggregation program