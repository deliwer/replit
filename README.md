# iPhone Trade-In Application

A full-stack web application for iPhone trade-in services, built with React, Express, and TypeScript.

## Features

- **Device Valuation Calculator**: Get instant trade-in values for different iPhone models
- **Trade-In Application Form**: Submit trade-in applications with device details
- **Modern UI**: Built with React, Tailwind CSS, and Radix UI components
- **Real-time Chat**: AI-powered chat widget for customer support
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Wouter** for client-side routing
- **React Query** for data fetching
- **React Hook Form** for form handling

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **Zod** for schema validation
- **In-memory storage** (can be easily replaced with PostgreSQL)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deliwer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility libraries
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data storage layer
│   └── vite.ts           # Vite development setup
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schema and types
└── config files          # Various configuration files
```

## API Endpoints

### Device Valuations
- `GET /api/device-valuations` - Get device valuation by model, storage, and condition
- `POST /api/device-valuations` - Create new device valuation

### Trade Applications
- `GET /api/trade-applications` - Get all trade-in applications
- `POST /api/trade-applications` - Submit new trade-in application

## Database Schema

The application uses the following main tables:

- **users**: User accounts and authentication
- **trade_in_applications**: Submitted trade-in applications
- **device_valuations**: Predefined device valuations

## Development

### Port Configuration
The application runs on port 3000 by default to avoid conflicts with macOS AirTunes service on port 5000.

### Environment Variables
- `PORT` - Server port (default: 3000)
- `DATABASE_URL` - Database connection string (for production)

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License 