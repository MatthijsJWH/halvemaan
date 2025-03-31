export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  readingTime: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "how-handball-improved-my-coding",
    title: "How Handball Improved My Coding Skills",
    excerpt: "Discover the surprising ways that playing handball has made me a better software developer and improved my approach to problem-solving.",
    content: `
# How Handball Improved My Coding Skills

As both a software developer and handball enthusiast, I've noticed some fascinating parallels between these seemingly unrelated passions. The skills and mindset I've developed on the handball court have surprisingly translated to making me a better programmer.

## Team Coordination and Collaboration

In handball, coordination with teammates is essential. You need to anticipate movements, communicate effectively, and work together toward a common goal. Similarly, in software development, especially in agile environments, collaboration is key.

Working within a handball team taught me:

- **Clear Communication**: Just as I need to call plays on the court, I've learned to articulate my ideas clearly in code reviews and team meetings.
- **Trust in Specialists**: In handball, you trust your goalkeeper with saves and your wings with scoring. In development, I've learned to trust the expertise of UX designers, backend specialists, and other team members.
- **Adaptability**: When the opposing team changes their defense strategy, we must adapt quickly. This translates directly to adapting to changing project requirements or unexpected technical challenges.

## Strategic Thinking

Handball requires constant strategic thinking - analyzing the opponent's defense, finding weaknesses, and creating opportunities. This strategic mindset has enhanced my approach to coding problems.

- **Pattern Recognition**: Recognizing defensive patterns in handball is similar to identifying patterns in code or user behavior.
- **Anticipating Problems**: A good handball player anticipates the opponent's next move. As a developer, I've gotten better at anticipating edge cases and potential bugs.
- **Resource Management**: Managing energy throughout a match parallels managing computational resources in software.

## Handling Pressure

Few experiences match the pressure of taking a penalty throw in a tied game with seconds remaining. Handball has taught me to perform under pressure, which is invaluable when facing tight deadlines or critical production issues.

- **Focus**: The ability to tune out distractions and focus on the task at hand.
- **Grace Under Pressure**: Maintaining composure when things get stressful.
- **Quick Decision Making**: Making good decisions quickly, even with incomplete information.

## Continuous Improvement Mindset

Both handball and coding require a commitment to continuous improvement:

- **Deliberate Practice**: Just as I practice specific throws or defensive movements, I deliberately practice coding patterns and techniques.
- **Learning from Failures**: Every lost match is a learning opportunity. Similarly, every bug or failed project contains valuable lessons.
- **Feedback Loops**: The immediate feedback of scoring (or not scoring) in handball is similar to the feedback loop of tests passing or failing in development.

## Conclusion

The mental models and skills I've developed through handball have made me a more effective, collaborative, and resilient developer. The discipline, strategic thinking, and team-oriented mindset transfer remarkably well to the world of software development.

So the next time you're looking to improve your coding skills, consider picking up a team sport like handball. The benefits might surprise you!
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-10-15",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    category: "Career",
    tags: ["Handball", "Coding", "Productivity", "Teamwork"],
    readingTime: "5 min read",
    featured: true
  },
  {
    id: "2",
    slug: "building-responsive-uis-with-tailwind",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS and avoid common pitfalls in the process.",
    content: `
# Building Responsive UIs with Tailwind CSS

Tailwind CSS has revolutionized the way many developers approach styling web applications. Its utility-first approach allows for rapid development without leaving your HTML (or JSX), while still providing the flexibility to create unique, responsive designs.

## Why Tailwind?

Before diving into the how, let's briefly discuss why Tailwind has become so popular:

- **Development Speed**: Build custom UIs without writing custom CSS
- **Consistency**: Predefined design system with spacing, colors, etc.
- **Responsive Design**: Built-in responsive modifiers
- **Dark Mode**: Simple implementation of dark mode
- **Customization**: Highly customizable to match your brand

## Setting Up Tailwind in a Next.js Project

If you're using Next.js, setting up Tailwind is straightforward:

1. Install the required packages:
   \`\`\`bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   \`\`\`

2. Configure your template paths in \`tailwind.config.js\`:
   \`\`\`javascript
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
       "./app/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   \`\`\`

3. Add the Tailwind directives to your CSS:
   \`\`\`css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   \`\`\`

## Responsive Design with Tailwind

Tailwind makes responsive design intuitive with its breakpoint prefixes:

- \`sm:\` - Small screens (640px and up)
- \`md:\` - Medium screens (768px and up)
- \`lg:\` - Large screens (1024px and up)
- \`xl:\` - Extra large screens (1280px and up)
- \`2xl:\` - 2X large screens (1536px and up)

Here's an example of a responsive grid layout:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Grid items */}
</div>
\`\`\`

This creates a single-column layout on mobile, two columns on medium screens, and three columns on large screens.

## Common Responsive Patterns

### Responsive Navigation

\`\`\`jsx
<nav className="flex flex-col md:flex-row md:justify-between md:items-center">
  <div className="flex justify-between items-center">
    <Logo />
    <button className="md:hidden">Menu</button>
  </div>
  <div className="hidden md:flex space-x-4">
    <NavLink>Home</NavLink>
    <NavLink>About</NavLink>
    <NavLink>Contact</NavLink>
  </div>
</nav>
\`\`\`

### Responsive Typography

\`\`\`jsx
<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>
\`\`\`

### Responsive Padding and Margins

\`\`\`jsx
<section className="px-4 py-6 md:px-6 md:py-12 lg:px-8 lg:py-16">
  {/* Content */}
</section>
\`\`\`

## Advanced Techniques

### Custom Design System

Extend Tailwind's theme to match your design system:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... other shades
          900: '#0c4a6e',
        },
        // ... other colors
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
\`\`\`

### Component Extraction

For repeated patterns, extract components:

\`\`\`jsx
function Card({ title, content, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{content}</p>
      </div>
    </div>
  );
}
\`\`\`

## Common Pitfalls and How to Avoid Them

### Overusing @apply

While \`@apply\` can help extract repeated utility combinations, overusing it defeats the purpose of Tailwind's utility-first approach. Instead, create React components for reusable UI elements.

### Ignoring Mobile-First Approach

Tailwind is mobile-first. Start with the base styles for mobile, then add responsive variants for larger screens.

### Not Purging Unused Styles

In production, make sure to purge unused styles to keep your CSS bundle small.

## Conclusion

Tailwind CSS provides a powerful, flexible system for building responsive UIs. By leveraging its utility classes and responsive modifiers, you can create beautiful interfaces that work across all device sizes without writing custom CSS.

Remember that the best responsive designs consider the user experience at each breakpoint, not just how the layout looks. Think about how users interact with your application on different devices and optimize accordingly.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-09-28",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    category: "Development",
    tags: ["Tailwind CSS", "Responsive Design", "Frontend", "CSS"],
    readingTime: "8 min read"
  },
  {
    id: "3",
    slug: "state-management-in-react-applications",
    title: "State Management in Modern React Applications",
    excerpt: "An overview of different state management approaches in React and when to use each one.",
    content: `
# State Management in Modern React Applications

State management is one of the most important aspects of building React applications. As applications grow in complexity, managing state effectively becomes increasingly challenging. In this post, we'll explore different state management approaches and when to use each one.

## Local Component State

React's built-in \`useState\` hook is perfect for managing component-specific state:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

**When to use**: For component-specific state that doesn't need to be shared with other components.

## Context API

React's Context API allows you to share state across components without prop drilling:

\`\`\`jsx
// Create a context
const ThemeContext = React.createContext('light');

// Provider component
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

**When to use**: For state that needs to be accessed by multiple components at different levels of the component tree.

## Zustand

Zustand is a small, fast state management solution with a simple API:

\`\`\`jsx
import create from 'zustand';

// Create a store
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// Use the store in a component
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Add bear</button>;
}
\`\`\`

**When to use**: For global state in medium-sized applications where Redux might be overkill.

## Redux Toolkit

Redux Toolkit simplifies Redux development with utilities to simplify common tasks:

\`\`\`jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

// Configure the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Use in a component with react-redux
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.decremented())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(counterSlice.actions.incremented())}>+</button>
    </div>
  );
}
\`\`\`

**When to use**: For large applications with complex state logic, especially when you need middleware, dev tools, and a predictable state container.

## Jotai

Jotai takes an atomic approach to state management:

\`\`\`jsx
import { atom, useAtom } from 'jotai';

// Create atoms
const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Use in components
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}

function DoubleCounter() {
  const [doubleCount] = useAtom(doubleCountAtom);
  return <div>Double count: {doubleCount}</div>;
}
\`\`\`

**When to use**: When you want atomic state management with React suspense integration.

## Recoil

Recoil is Facebook's experimental state management library:

\`\`\`jsx
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Define atoms and selectors
const countAtom = atom({
  key: 'countAtom',
  default: 0,
});

const doubleCountSelector = selector({
  key: 'doubleCount',
  get: ({get}) => get(countAtom) * 2,
});

// Use in components
function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  const doubleCount = useRecoilValue(doubleCountSelector);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <div>Double count: {doubleCount}</div>
    </div>
  );
}
\`\`\`

**When to use**: For applications that need fine-grained reactivity and time-travel debugging.

## Choosing the Right Approach

When deciding on a state management approach, consider:

1. **Application size and complexity**: Smaller apps can often use useState and useContext, while larger apps might benefit from Redux or Zustand.
2. **Team familiarity**: Use what your team knows unless there's a compelling reason to switch.
3. **Performance needs**: Some solutions are more optimized for performance than others.
4. **Developer experience**: Consider the debugging tools, documentation, and community support.

## Conclusion

There's no one-size-fits-all solution for state management in React. The best approach depends on your specific requirements and constraints. Often, a combination of approaches works best - using local state for component-specific concerns and a global state solution for shared state.

Remember that simpler is usually better. Start with the simplest solution that meets your needs, and only add complexity when necessary.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-08-15",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    category: "Development",
    tags: ["React", "State Management", "JavaScript", "Frontend"],
    readingTime: "10 min read"
  },
  {
    id: "4",
    slug: "olympic-handball-tactics",
    title: "Olympic Handball Tactics Explained",
    excerpt: "A deep dive into the tactical aspects of Olympic handball and how teams strategize to win.",
    content: `
# Olympic Handball Tactics Explained

Olympic handball is a fast-paced, high-scoring sport that combines elements of basketball, soccer, and water polo. While it might look chaotic to the uninitiated, there's a deep tactical layer to the game that makes it fascinating to analyze.

## Basic Offensive Formations

### 3-3 Formation

The most common offensive setup is the 3-3 formation, with three players at the 6-meter line (circle runners and wing players) and three players at the 9-meter line (backcourt players).

This formation provides:
- Good spacing across the court
- Multiple attacking options
- Flexibility to transition into other formations

### 4-2 Formation

When facing a more aggressive defense, teams might switch to a 4-2 formation with four players at the 6-meter line and two at the 9-meter line. This puts more pressure on the interior defense but sacrifices some shooting power from distance.

## Defensive Systems

### 6-0 Defense

The 6-0 defense, where all six defenders stay at the 6-meter line, is the most common defensive formation. It's effective at:
- Protecting against close-range shots
- Blocking shooting lanes
- Maintaining defensive cohesion

However, it can be vulnerable to powerful backcourt shooters who can score from distance.

### 5-1 Defense

The 5-1 defense positions one defender higher up to disrupt the opponent's backcourt play. This system:
- Pressures the opponent's playmaker
- Disrupts offensive rhythm
- Can force turnovers

The tradeoff is that it creates potential gaps near the 6-meter line that quick circle runners can exploit.

### 3-2-1 Defense

More aggressive teams might employ a 3-2-1 defense, which positions defenders at different depths. This creates a more dynamic defense that:
- Confuses the offense
- Closes passing lanes
- Forces the offense to make quick decisions

It's a high-risk, high-reward system that requires excellent communication and conditioning.

## Key Tactical Concepts

### Creating and Exploiting Numerical Advantages

Much of handball tactics revolves around creating numerical advantages (e.g., 2-on-1 or 3-on-2 situations). Teams do this through:

- **Screens**: Setting picks to free up teammates
- **Crosses**: Two offensive players crossing paths to confuse defenders
- **Fast breaks**: Quickly transitioning from defense to offense before the opposition can set up

### The Importance of the Circle Runner

The circle runner (pivot) plays a crucial role in modern handball:

- Acts as a screen to create space for backcourt players
- Provides an inside passing option
- Draws defensive attention to create space for others

Top circle runners like Nikola Karabatic (France) have revolutionized the position by combining traditional pivot play with playmaking abilities.

### The Two-Minute Suspension

The two-minute suspension (similar to a power play in hockey) creates a significant tactical dimension:

- The team with the player advantage often uses specific set plays designed for this situation
- The team with the player disadvantage must adapt defensively, often switching to a 5-0 formation
- Managing these situations effectively can be the difference between winning and losing close matches

## Case Study: Norway's Women's Team

Norway's women's team has dominated international handball for years with their distinctive tactical approach:

1. **Aggressive 5-1 defense** that transitions quickly into offense
2. **Fast-paced counterattacks** that prevent the opposition from setting up defensively
3. **Fluid positional rotations** where players constantly switch positions to confuse defenders
4. **Disciplined shot selection** with an emphasis on high-percentage opportunities

## Conclusion

Olympic handball tactics continue to evolve, with teams constantly innovating to gain competitive advantages. The best teams master not only one system but can seamlessly transition between different tactical approaches based on the game situation.

Understanding these tactical elements adds another layer of appreciation when watching handball at the Olympic level. Next time you watch a match, pay attention to these formations and strategies – you'll see the beautiful chess match happening amid the physical intensity.
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "2023-07-20",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=100&width=100"
    },
    category: "Handball",
    tags: ["Olympics", "Handball", "Sports", "Tactics"],
    readingTime: "7 min read",
    featured: true
  },
]

