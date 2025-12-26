# E-Design Portfolio

A modern, interactive portfolio dashboard for managing and visualizing investment bonds and cashflow timelines. Built with Next.js, React, and Tailwind CSS.

## 🎯 Features

- **Responsive Dashboard Layout**: Clean sidebar navigation with header bar and scrollable content area
- **Portfolio Management**: View and manage your investment portfolio with an intuitive interface
- **Cashflow Timeline Visualization**: Interactive timeline showing bond payouts across multiple years (2025-2026 and beyond)
- **Alternating Timeline Events**: Dynamic left/right alternating event cards for better visual hierarchy
- **Bond Information Cards**: Detailed bond information with interest and maturity payout breakdowns
- **Advanced Filtering**: Filter bonds by type with dropdown selectors and date range filters
- **Custom Styling**: Modern design with primary color scheme (#002C59) and smooth visual connections

## 🏗️ Project Structure

```
e-design-portfolio/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          # Navigation sidebar with portfolio icons
│   │   ├── Header.tsx           # Top navigation with tabs and filters
│   │   ├── CashflowTimeline.tsx # Main timeline visualization container
│   │   └── TimelineEvent.tsx    # Reusable timeline event component
│   ├── globals.css              # Global styles and custom scrollbar
│   ├── layout.tsx               # Root layout with flex structure
│   └── page.tsx                 # Home page
├── public/
│   └── assets/                  # SVG icons and images
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-design-portfolio.git
cd e-design-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📋 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design System

### Color Palette
- **Primary**: `#002C59` (Dark Navy Blue)
- **Secondary**: `#9BC1E3` (Light Blue - for accents)
- **Border**: `#E1E6E8` (Light Gray)
- **Success**: `#008C3B` (Green for Interest Payout)
- **Accent**: `#9C27B0` (Purple for Maturity Payout)

### Typography
- **Font Family**: Poppins (400, 500, 600, 700 weights)
- **Primary Font Size**: 14-16px for body text
- **Heading Font Size**: 18-20px

### Components

#### Sidebar
- Fixed navigation bar with 4 main sections
- Portfolio icon highlighted by default
- Navigation items with disabled state styling

#### Header
- Title and user information display
- Navigation tabs with active state indicators
- Filter controls (bond type dropdown, date range picker)
- Contact information (phone and WhatsApp icons)

#### CashflowTimeline
- Vertical timeline with connecting lines
- Year dividers (2025, 2026, Last)
- Multiple timeline events with alternating left/right alignment
- Round mark indicators on the vertical line

#### TimelineEvent
- Date card with calendar icon
- Bond information cards (Interest/Maturity payouts)
- Directional triangle pointers (left/right facing)
- Horizontal and vertical connecting lines
- Info button for additional bond details

## 📊 Timeline Features

### Timeline Markings
The timeline displays multiple financial events across different time periods:

1. **First Event** (2025, Left-aligned): Two payout types (Interest + Maturity)
2. **Second Event** (2025, Right-aligned): Maturity payout only
3. **Third Event** (2026, Left-aligned): Interest payout only
4. **Fourth Event** (2026, Right-aligned): Both payout types (Maturity first)

### Visual Elements
- **Vertical Line**: Connects all timeline events (1px width, #E1E6E8 color)
- **Horizontal Connectors**: Link bond cards to the main timeline (1px width, #E1E6E8 color)
- **Round Marks**: Indicator circles at each event position on the timeline
- **Triangle Pointers**: Directional indicators on date cards (reversed for right-aligned events)

## 🔧 Customization

### Adding New Timeline Events

Edit `app/components/CashflowTimeline.tsx` and add new objects to the `timelineMarkings` array:

```typescript
{
  id: '5',
  positionTop: '2100px',
  eventDate: '01 Aug 2026',
  eventAmount: '55,000.00',
  bonds: [
    {
      id: '9',
      type: 'interest',
      company: '8.0% BANK NAME LIMITED 01/Aug/2027',
      amount: '27,500.00',
    },
    {
      id: '10',
      type: 'maturity',
      company: '8.0% BANK NAME LIMITED 01/Aug/2027',
      amount: '27,500.00',
    },
  ],
}
```

### Styling
All component styles use Tailwind CSS classes with custom inline styles for precise positioning. Global styles are defined in `app/globals.css`.

## 📱 Responsive Design

The application uses a flex-based layout that adapts to different screen sizes:
- **Sidebar**: Fixed width navigation
- **Header**: Spans full width with scrollable content area
- **Content**: Scrollable with custom scrollbar styling
- **Timeline**: Responsive positioning with dynamic event alignment

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) - React metaframework with SSR support
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Linting**: [ESLint 9](https://eslint.org/) - Code quality checker
- **Bundler**: Webpack (via Next.js)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Support

For questions or issues, please open an issue on GitHub or contact the project maintainers.

---

**Last Updated**: December 26, 2025

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
