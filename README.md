# About the project

Demo React app using atomic-style folders, Webpack, and Chakra UI. The home page loads product-style cards from the [Pexels API](https://www.pexels.com/api/) via TanStack Query, with loading skeletons, empty states, and error handling with retry.

# Built with

- React 18, TypeScript
- Webpack 5
- Chakra UI
- TanStack Query (React Query)
- React Router 6

# Scripts

| Command | Description |
| -------- | ----------- |
| `npm start` | Dev server (`webpack serve`) |
| `npm run serve` | Dev server and open browser |
| `npm run build` | Production build to `dist/` |
| `ANALYZE=1 npm run build` | Same build, writes a static bundle report (webpack-bundle-analyzer) |

# Environment

At build time, Webpack injects `process.env.PEXELS_API_KEY` into the client bundle.

- **Recommended:** copy `.env.example` to `.env`, set `PEXELS_API_KEY`, then run `npm start` or `npm run build`. Webpack loads `.env` from the project root. Do not commit `.env` (it is gitignored).
- If unset, the Webpack config falls back to a demo key for local runs (rotate that key if the repo is public).

# Folder structure

![struct image](https://github.com/NguyenTichDuy/react-demo/blob/master/public/assets/images/atoms-struct.png)

High level:

- `src/components/atoms`, `molecules`, `organisms`, `templates` — UI composition
- `src/pages` — route-level screens
- `src/config` — API helpers (e.g. Pexels `fetchData`)
