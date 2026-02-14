# Emoji Reaction Picker — useState

Build an emoji reaction picker to learn useState for managing interactive state.

## What You'll Learn

- useState hook for state management
- Event handlers and onClick callbacks
- Updating state
- Conditional styling based on state

## Tech Stack

- **React Router v7** (framework mode) — handles pages and routing
- **Supabase** — database and auth (pre-configured client)
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-reaction-picker.git
cd fpp-reaction-picker

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
app/
├── routes/
│   └── home.tsx          ← Reaction picker component and state
├── lib/
│   └── supabase.ts       ← Supabase client setup
├── app.css               ← Global styles (Tailwind)
├── root.tsx              ← App shell and layout
└── routes.ts             ← Route definitions
```

## Your Exercise Tasks

See the exercise instructions on the course platform for the full task list. The short version:

1. Clone the repo and run the dev server
2. Add useState for reaction counts
3. Increment counts on emoji click
4. Highlight the most popular reaction
5. Display counts next to each emoji

## Hints

- useState returns a state value and a function to update it
- onClick handlers can call state update functions
- You can toggle classes based on state conditions

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
