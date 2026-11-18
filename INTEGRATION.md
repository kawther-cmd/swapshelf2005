# Integration Guide — Member 1 → Team Swap Shelf project

This guide explains how to copy the Member 1 files (Navbar, Footer, Layout, About, Login, Register, routing) into the team's main Swap Shelf project.

## 1. Install the router (if the team project does not have it)

```bash
npm install react-router-dom@6
```

## 2. Copy the folders

Copy these from `swap-shelf-member1/src/` into the team project's `src/`:

| Copy this | Into team project |
| --- | --- |
| `src/styles/variables.css`, `src/styles/global.css` | `src/styles/` |
| `src/components/layout/` (whole folder) | `src/components/layout/` |
| `src/components/common/` (whole folder) | `src/components/common/` |
| `src/pages/About.jsx`, `About.css` | `src/pages/` |
| `src/pages/Login.jsx`, `Register.jsx`, `Auth.css` | `src/pages/` |
| `src/utils/validation.js` | `src/utils/` |
| `src/services/authService.js` | `src/services/` |
| `public/favicon.svg` (optional) | `public/` |

**Do not copy** `src/pages/Home.jsx` / `Home.css` — they are only a placeholder. Use the team's real Home page.

If a file with the same name already exists in the team project, compare them before overwriting.

## 3. Load the global styles and the router

In the team's `src/main.jsx`:

```jsx
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

If the team project already wraps the app in `<BrowserRouter>`, keep only one.

## 4. Add the routes

In the team's `src/App.jsx`, wrap all pages in the shared `Layout` so every page gets the Navbar and Footer:

```jsx
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";          // the team's real Home page
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other members add their routes here, inside the Layout */}
      </Route>
    </Routes>
  );
}

export default App;
```

## 5. Fonts

Add these lines inside `<head>` in the team's `index.html` (the design uses Fraunces for headings and Karla for text):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Karla:wght@400;500;700&display=swap" rel="stylesheet" />
```

## 6. Adding more links to the Navbar

Edit the `NAV_LINKS` list at the top of `src/components/layout/Navbar.jsx`:

```js
const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  // { to: "/books", label: "Books" },   // example for another member's page
];
```

## 7. Search box

The Navbar search box is **visual only**. The member who builds search can connect it in `Navbar.jsx` (the `<form role="search">`), for example by reading the input value in `onSubmit` and navigating to their results page.

## 8. Connecting the backend later

Only `src/services/authService.js` needs to change. Replace the bodies of `loginUser()` and `registerUser()` with real requests (an example `fetch` call is in the file's comments) and set `API_BASE_URL`. The Login and Register pages already call these functions and check `result.connected`.

## 9. Check

```bash
npm run dev     # open /about, /login, /register and try the mobile menu
npm run build   # should finish without errors
```
