# React Animation Starter Template

A modern React starter template featuring **GSAP** and **Framer Motion** for powerful animations.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React version
- 🎨 **Tailwind CSS** - Utility-first styling
- 🎬 **GSAP** - Professional-grade animation library
- 🎭 **Framer Motion** - Production-ready motion library
- 🚀 **React Router v7** - File-based routing
- 📘 **TypeScript** - Type safety out of the box

## Getting Started

### Development

Run the dev server:

```bash
npm run dev
```

Visit `http://localhost:5173` to see your app with animation examples.

### Build

Build for production:

```bash
npm run build
```

### Production

Run in production mode:

```bash
npm start
```

## Animation Libraries

### GSAP

GSAP (GreenSock Animation Platform) is included for timeline-based animations:

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MyComponent() {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.to(elementRef.current, {
      x: 100,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true
    });
  }, []);

  return <div ref={elementRef}>Animated Element</div>;
}
```

**GSAP is great for:**
- Complex timeline animations
- Precise control over animation sequences
- Morphing and advanced effects
- ScrollTrigger animations

### Framer Motion

Framer Motion provides declarative animations:

```tsx
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      Animated Content
    </motion.div>
  );
}
```

**Framer Motion is great for:**
- UI transitions and interactions
- Gesture-based animations
- Layout animations
- Variants and orchestration

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── GsapExample.tsx
│   └── MotionExample.tsx
├── routes/              # Route components
│   └── home.tsx
├── app.css             # Global styles
└── root.tsx            # Root layout
```

## Example Components

The template includes two example components demonstrating both libraries:

- **`GsapExample.tsx`** - Shows GSAP animations with refs
- **`MotionExample.tsx`** - Shows Framer Motion declarative animations

## Useful Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run typecheck  # Run TypeScript checks
npm start          # Start production server
```

## Tips

### Combining GSAP and Framer Motion

You can use both libraries in the same project:
- Use **Framer Motion** for UI interactions (hover, click, page transitions)
- Use **GSAP** for complex timeline animations and effects

### Performance

- Both libraries are optimized for 60fps animations
- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, `top`, `left` when possible

## Learn More

- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

Built with ❤️ using React Router
