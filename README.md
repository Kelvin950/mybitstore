# MyBitstore Assessment

A cryptocurrency trading platform built with Next.js featuring buy/sell functionality and P2P trading.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Icons**: Lucide React
- **Package Manager**: pnpm (npm compatible)

## How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: http://localhost:3000

## Available Scripts

- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Known Limitations & Future Improvements

### Current Limitations
- Static data (no real API integration)
- Payment methods are display-only
- No user authentication system
- Currency rates are hardcoded

### With More Time, I Would Add:
- **Backend Integration**: Real API for trades, user management, and live crypto prices
- **Authentication**: User login/signup with JWT tokens
- **Real-time Data**: WebSocket integration for live price updates
- **Payment Processing**: Integration with actual payment gateways
- **Order Management**: Complete buy/sell order flow with transaction history
- **Enhanced P2P**: Chat system, escrow functionality, reputation system
- **Mobile Optimization**: Better responsive design and mobile-first approach
- **Testing**: Unit tests with Jest and integration tests with Cypress
- **Performance**: Image optimization, code splitting, and caching strategies
