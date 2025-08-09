# Smartway Engineering — Multilingual Next.js Starter

This is a minimal Next.js starter configured for three languages: **English**, **Français**, and **العربية** using `next-i18next`.

## Quick start
```bash
# install
npm install

# dev
npm run dev

# build
npm run build
npm run start
```

## Notes
- The project uses Tailwind CSS for quick styling. You need to run `npx tailwindcss init -p` if you want to customize further.
- The i18n translation files are in `public/locales/{en,fr,ar}/common.json`.
- To deploy on Vercel, connect the repository and set the root to this project. Vercel will install and build automatically.
