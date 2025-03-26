# Demo: a practical introduction to code splitting in a React + Vite app

This is a tutorial app accompanying this [blog post about code splitting in React](https://oliviac.dev/blog/a-practical-introduction-to-code-splitting-in-react/).

## App overview

This app demonstrates various code-splitting techniques and includes the following pages:

- **Home Page**: The main landing page of the app.
- **Movies Page**: Displays a list of movies fetched from a free API.
- **Movie Detail Page**: Shows detailed information about a specific movie.
- **About Page**: Includes an informational modal for additional details.

## Getting started

1. Clone the repo

```sh
git clone git@github.com:liv7c/demo-code-splitting-react-vite.git
```

2. Install the dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

## Tech stack

It uses:

- Vite: The app was created using `npm create vite@latest`.
- React Router v7: Used for routing in the app, managed via `createBrowserRouter`. This app is not using React Router in framework mode (it’s not a Remix-style app).
- React Query: Handles data fetching and caching.
- Radix UI: used for the modal component on the About page.
- Tailwind CSS: for quick styling
