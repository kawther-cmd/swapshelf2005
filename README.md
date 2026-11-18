# Swap Shelf — Member 1

This is the **Member 1** part of the Swap Shelf team project, built as a separate, standalone project.

It contains **only** these parts:

- **Navbar**: Swap Shelf logo and name, Home / About / Login / Register links, a search box (looks real but does not search yet) and a mobile menu.
- **Login page**: email and password, basic checks, show/hide password, link to Register.
- **Register page**: name, email, password and confirm password, basic checks, a check that the passwords match, link to Login.
- **About page**: explains the Swap Shelf idea, using the same design.
- **Shared layout**: Navbar + Footer around every page, plus small reusable pieces (Container, Button, FormField, PasswordField).
- **Routing**: `/about`, `/login` and `/register` work. `/` shows a simple placeholder Home page.

What it does **not** include (on purpose): book cards, book data, working search, filters, sorting, buying or borrowing, a backend or a database.

## Tech

- JavaScript only, React with JSX, Vite, plain CSS
- React Router (`react-router-dom` v6)
- No TypeScript: no `.ts` / `.tsx` files and no `tsconfig.json`

## Requirements

- Node.js 18 or newer (comes with npm)

## How to run it

```bash
npm install      # install packages (only the first time)
npm run dev      # start the dev server -> http://localhost:5173
```

Other commands:

```bash
npm run build    # build for production into the dist/ folder
npm run preview  # preview the production build locally
```

## File structure

```text
swap-shelf-member1/
├── index.html                    # HTML page, loads fonts and src/main.jsx
├── package.json                  # packages and scripts
├── package-lock.json             # exact package versions
├── vite.config.js                # Vite setup (React plugin)
├── .gitignore
├── README.md                     # this file
├── INTEGRATION.md                # how to add these files to the team project
├── public/
│   └── favicon.svg               # Swap Shelf icon
└── src/
    ├── main.jsx                  # app entry: BrowserRouter + global styles
    ├── App.jsx                   # all routes, wrapped in the shared Layout
    ├── styles/
    │   ├── variables.css         # colors, fonts, spacing (design tokens)
    │   └── global.css            # base page styles
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx / Layout.css    # Navbar + page + Footer
    │   │   ├── Navbar.jsx / Navbar.css    # main navigation + mobile menu
    │   │   ├── Footer.jsx / Footer.css    # site footer
    │   │   └── Logo.jsx / Logo.css        # logo mark + name
    │   └── common/
    │       ├── Container.jsx / Container.css
    │       ├── Button.jsx / Button.css
    │       ├── FormField.jsx / FormField.css
    │       └── PasswordField.jsx / PasswordField.css
    ├── pages/
    │   ├── Home.jsx / Home.css   # placeholder only
    │   ├── About.jsx / About.css
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── Auth.css              # shared Login/Register styles
    ├── utils/
    │   └── validation.js         # form checks (email, password, matching, name)
    └── services/
        └── authService.js        # placeholder for the future backend (not connected)
```

## Form rules

| Field | Rule |
| --- | --- |
| Email (Login + Register) | Required, must look like `name@domain.com` |
| Password (Login) | Required |
| Name (Register) | Required, at least 2 characters |
| Password (Register) | Required, at least 8 characters |
| Confirm password (Register) | Required, must match Password |

Errors appear when you leave a field or press the submit button.

## Backend status

The forms are **not connected** to any server. When the details are valid, the page says so and explains that signing in / creating an account will work once the backend is connected. Nothing is saved and nobody is logged in.

To connect the backend later, edit only `src/services/authService.js` — `loginUser()` and `registerUser()` already receive the form data and build the payload to send (`{ email, password }` and `{ name, email, password }`).

## Build check

`npm run build` completes successfully (Vite 6, 57 modules, no errors or warnings).

## JavaScript-only check

Every source file is `.js`, `.jsx`, `.css`, `.json`, `.html` or `.md`. There are **no** `.ts` or `.tsx` files, no `tsconfig.json`, and TypeScript is not installed. You can confirm it yourself:

```bash
find . -path ./node_modules -prune -o \( -name "*.ts" -o -name "*.tsx" -o -name "tsconfig*.json" \) -print
# prints nothing
```
