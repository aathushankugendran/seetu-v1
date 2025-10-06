# Seetu - Digital Rotating Savings Platform

A modern, feature-rich digital rotating savings platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Type Safety**: Full TypeScript support with strict type checking
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Production Ready**: Optimized for production deployment

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seetu-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
seetu-v1/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   └── ui/          # shadcn/ui components
│   ├── config/          # Application configuration
│   ├── constants/       # Application constants
│   ├── handlers/        # Serverless function handlers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   ├── pages/           # Page components
│   ├── providers/       # React context providers
│   ├── router/          # Routing configuration
│   ├── services/        # API services
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Public assets
│   └── logos/           # Logo files
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── .prettierrc         # Prettier configuration
├── .prettierignore     # Prettier ignore rules
├── components.json     # shadcn/ui configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── serverless.yml      # Serverless framework configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🚀 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Building
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run build:staging` - Build for staging
- `npm run build:prod` - Build for production
- `npm run preview` - Preview production build



## 📦 Build and Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build:prod
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Configuration

### Environment Variables

Copy `env.example` to `.env.local` and configure:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_API_TIMEOUT=10000

# Authentication
VITE_AUTH_DOMAIN=your-auth-domain
VITE_AUTH_CLIENT_ID=your-client-id

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG_MODE=false
```

### Vite Configuration

The build is configured in `vite.config.ts` with:
- Path aliases for clean imports
- Code splitting for optimal performance
- Production optimizations
- Development server configuration

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built components
- **CSS Modules** for component-specific styles
- **PostCSS** for processing

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive breakpoints
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## 🔒 Security

- Environment variables for sensitive data
- Input validation and sanitization
- Secure API communication
- Content Security Policy (CSP) ready

## 🚀 Performance

- Code splitting and lazy loading
- Optimized bundle size
- Image optimization
- Caching strategies
- Performance monitoring ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in `/docs`

## 🔄 Version History

- **v1.0.0** - Initial release with core features
- Production-ready structure and configuration
