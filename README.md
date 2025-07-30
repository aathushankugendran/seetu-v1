# Seetu - Digital Rotating Savings Platform

<!-- AWS Amplify deployment trigger -->
<div align="center">

![Seetu Logo](https://raw.githubusercontent.com/aathushankugendran/svg/main/Color%20logo%20-%20no%20background.svg)

**The Traditional Savings Circle, Rebuilt for the Digital Age**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)

</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)

## 🌟 Overview

Seetu is a modern digital platform that transforms traditional rotating savings groups into secure, automated, and accessible financial tools. We bring group savings into the 21st century with built-in fraud protection, verified members, and guaranteed payouts.

## ✨ Features

- **Identity Verification**: KYC-lite verification for all users
- **Fraud Protection**: Advanced security measures and escrow systems
- **Verified Members**: Community-based trust with platform oversight
- **Guaranteed Payouts**: Secure transaction processing
- **Two Product Models**: Organization Seetu and Marketplace Seetu
- **Smart Matching System**: AI-powered group matching algorithm

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite
- **UI Components**: Custom button library with 8 variants
- **Routing**: React Router DOM
- **State Management**: React Query for data fetching

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aathushankugendran/seetu-v1.git

# Navigate to the project directory
cd seetu-v1

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
seetu-v1/
├── public/                 # Static assets
│   ├── Logo Files/        # Brand assets
│   └── robots.txt         # SEO configuration
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (buttons, cards, etc.)
│   │   └── Layout.tsx    # Main layout component
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # About page
│   │   ├── Contact.tsx   # Contact page
│   │   └── ...           # Other pages
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── integrations/     # Third-party integrations
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # Project documentation
```

## 🎨 Design System

### Button Component Library
- **8 Variants**: Primary, Glass, Neon, Gradient Border, Floating, Outline, Ghost, Destructive
- **4 Sizes**: Small, Medium, Large, Extra Large
- **4 Shapes**: Default, Large, Extra Large, Full Rounded
- **Specialized Components**: WaitlistButton, CTAButton, ContactButton

### Color Scheme
- **Primary**: Blue to Teal gradient
- **Accent**: Cyan and Green highlights
- **Background**: Gradient backgrounds with glassmorphism effects

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

### Key Components
- **Layout**: Handles navigation and page structure
- **Pages**: Individual page components with gradient backgrounds
- **UI Components**: Reusable design system components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **Website**: [seetu.ca](https://seetu.ca)
- **Email**: [Contact through website](https://seetu.ca/contact)

---

<div align="center">
Made with ❤️ by the Seetu team
</div>
