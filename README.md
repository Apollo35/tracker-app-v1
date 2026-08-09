# Tracker App

A local-first, gamified habit tracker built around daily consistency, progression, and rewards.

Tracker turns everyday habits into a simple progression loop:

**Habit → XP → Level → Achievement → Diamonds → Shop**

The current version is an MVP focused on a simple, reliable local experience.

---

## MVP Features

### Habit Tracking
- Create and delete habits
- Complete habits daily
- Daily streak tracking
- 7-day habit history
- Maximum habit limit
- Persistent local data

### Progression
- XP system
- Level progression
- Level-up notification
- Progress tracking

### Achievements
- Automatic achievement detection
- Achievement rewards
- Persistent achievement claims

### Economy
- Diamond currency
- Streak rewards
- Achievement rewards
- Shop purchases
- Owned item persistence
- Duplicate purchase protection

### Companion

The MVP includes a single companion:

**Otter**

The Otter is part of the Tracker experience from the beginning.

The current companion system is intentionally simple. Future versions may introduce animations, interactions, progression, environments, and additional companions.

### 30-Day Challenge

An optional challenge system is included with:

- Challenge progress
- Challenge completion
- Challenge failure
- Challenge restart

---

## Local-First Architecture

Tracker currently runs entirely locally.

There is no:

- Authentication
- Login system
- Supabase
- Cloud synchronization
- Multiplayer

Persistent application data is stored using browser `localStorage`.

This keeps the MVP simple, independent, and usable without an account or backend connection.

---

## Tech Stack

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript
- LocalStorage

---

## Getting Started

### Requirements

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Apollo35/tracker-app-v1.git
````

Enter the project directory:

```bash 
cd tracker-app-v1
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

### Production Build

```bash
npm run build
```

Creates the production build.

### Preview

```bash
npm run preview
```

Previews the production build locally.

---

## MVP Scope

The current version intentionally focuses on the core habit progression experience.

The following are outside the current MVP:

* Cloud accounts
* Authentication
* Supabase
* Multiplayer
* Multiple companions
* Companion equipment system
* Advanced companion gameplay
* Companion animations
* Advanced analytics
* Complex customization systems

These may be considered for future versions.

---

## Current Status

**MVP — Release Candidate**

The current MVP has completed:

* Functional development
* Local-first migration
* UI polish
* Responsive testing
* Production build testing
* Functional QA
* Regression testing
* ESLint cleanup

The project is currently being prepared for its first MVP release.

---

## Future Direction

Potential future development includes:

* Otter animations and interactions
* Companion progression
* Additional companions
* Companion environments
* More shop customization
* Advanced analytics
* Cloud synchronization
* User accounts
* Multiplayer features

These features are intentionally deferred until after the MVP.

---

## License

This project is currently a personal development project.

```
