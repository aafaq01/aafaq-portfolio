# Modern DevOps Portfolio

A modern, dark-themed portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Perfect for DevOps engineers and cloud professionals to showcase their projects and skills.

## Features

- 🌙 Dark theme with modern, minimalist design
- 🎨 Smooth animations and transitions
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 SEO optimized
- 🎨 Customizable color scheme
- 📦 Component-based architecture

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **UI Components:** Radix UI
- **Deployment:** Vercel (recommended)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information
1. Update your name and role in `src/app/layout.tsx`
2. Modify the hero section content in `src/app/page.tsx`
3. Update your skills and experience in `src/app/about/page.tsx`
4. Add your projects in `src/app/projects/page.tsx`
5. Update contact information in `src/app/contact/page.tsx`

### Theme Colors
The color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  background: '#1A1E23',
  primary: '#FF2990',
  secondary: '#FFEBF2',
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
  }
}
```

### Social Links
Update your social media links in `src/app/contact/page.tsx`:

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    // ...
  },
  // ...
]
```

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Deploy with a single click

## License

This project is open source and available under the [MIT License](LICENSE). 