# ReelNest — Your Personal Cinema Universe

A responsive React movie watchlist application built with React 18 and Vite.

## Features
- Reusable MovieCard component displaying title, genre, year and rating.
- React `useState` manages the watchlist, genre filter and search.
- Duplicate prevention: saved movies show a disabled Added button.
- Watchlist view supports removing saved movies.
- `useEffect` + Axios fetches the local `public/movies.json` catalogue.
- Loading spinner while the catalogue is loading.
- Genre filters and conditional No movies found empty state.
- Responsive dark cinematic interface.

## Tech stack
React 18 · Vite · Axios · Lucide React · CSS

## Run locally
1. Install Node.js (LTS).
2. Extract this project folder.
3. Open a terminal inside the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the local URL printed by Vite (usually `http://localhost:5173`).

To verify a production build, run `npm run build`.

## Project structure
```text
ReelNest-React-Movie-Watchlist/
├── public/
│   └── movies.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── MovieCard.jsx
│   │   └── Watchlist.jsx
│   ├── data/
│   │   └── movieFallback.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Assignment submission details
- Learner Name: Devadharshini V
- Batch Code: Agentic FSD-ANB49
- Assignment: Assignment No. 4 — Build a Movie Watchlist App with React

## GitHub upload
Upload the **contents of this extracted project folder**, not the ZIP file itself, to your public GitHub repository. Keep the folder structure intact.
