# Altmünster am Traunsee

Premium tourism website for Altmünster am Traunsee, Upper Austria.

## Requirements

- Node.js **18.18+** (20+ recommended)
- npm 9+

## Quick start

```bash
cd "/Users/daniele/Desktop/Projects/Altmünster-v2"
npm install
npm run dev:clean
```

Open **http://localhost:3456** in your browser.

> The dev server uses port **3456** on purpose so it does not clash with other apps on port 3000.
> If you see errors, stop any old servers (`Ctrl+C`) and run `npm run dev:clean`.

## Production

```bash
npm run build
npm run start
```

Then open **http://localhost:3456**.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `next: command not found` | Run `npm install` first |
| Turbopack / "Next.js package not found" | Use `npm run dev:clean` (Turbopack is disabled) |
| Internal Server Error / 500 | Stop all dev servers, then `npm run dev:clean` |
| Blank page / map errors | Hard-refresh the browser (Cmd+Shift+R) |
| Port already in use | Stop the other process or run `npm run dev -- -p 4000` |
| Node too old | Upgrade to Node 18.18+ with `nvm install 20` |

## GitHub Pages

Live site: **https://masterdanny.github.io/Altm-nster/**

Pushes to `main` deploy automatically via GitHub Actions. In the repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
