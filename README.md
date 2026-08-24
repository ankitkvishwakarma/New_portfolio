# Ankit Portfolio

This is the supplied React portfolio with project navigation added.

## Project flow

Home:
`/`

Featured Projects:
- **View all projects** opens `/projects`
- Clicking any featured card opens `/projects/:slug`

All projects:
`/projects`

Individual detail pages:
- `/projects/greenbasket`
- `/projects/college-placement-system`
- `/projects/tradescape-risk-dashboard`
- `/projects/crm-platform`
- `/projects/inventory-management-system`

## Current project data

Project data lives in:
`src/data/projects.js`

Update each project's:
- `github`
- `demo`
- description
- tech stack
- highlights

## Install and run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Important

The project uses React Router for client-side navigation. If deploying to a static host, configure SPA fallback/rewrites so direct URLs such as `/projects/greenbasket` resolve to `index.html`.
