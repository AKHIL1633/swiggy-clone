# Swiggy Clone

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2-764ABC?logo=redux&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

A React 18 clone of Swiggy's restaurant listing and menu pages. Restaurant and menu
data is pulled **live** from Swiggy's public API through a small Express proxy (needed
to get around CORS/bot-detection restrictions on direct browser calls).

## Screenshots

| Restaurant listing | Restaurant menu | About page |
| --- | --- | --- |
| ![Restaurant listing page](screenshots/home.png) | ![Restaurant menu page](screenshots/menu.png) | ![About page](screenshots/about.png) |

## Features

- Restaurant listing with search and a "top rated" filter, backed by live Swiggy data
- Restaurant menu page with items, prices, ratings and offers
- Cart powered by Redux Toolkit (add/remove items, cross-restaurant cart warning)
- Lazy-loaded `About` and `Grocery` routes via `React.lazy` + `Suspense`
- Online/offline detection
- Client-side routing via `react-router-dom`
- Custom Express proxy to work around Swiggy's CORS/bot-detection restrictions

## Tech stack

React 18 · React Router · Redux Toolkit · Express · Parcel

## Prerequisites

- Node.js 18+
- npm

## Getting started

```bash
npm install
npm run dev
```

`npm run dev` starts both processes together:

- the Express API proxy on **http://localhost:5000**
- the Parcel dev server on **http://localhost:1234**

Open **http://localhost:1234** in your browser.

If you'd rather run them separately (e.g. in two terminals):

```bash
npm run server   # Express proxy on :5000
npm start        # Parcel dev server on :1234
```

## Other scripts

```bash
npm run build   # production build (dist/)
npm test        # run Jest tests
```

## Project structure

```
index.html            entry HTML, mounts src/App.js
server.js             Express proxy for Swiggy's restaurant/menu APIs
src/
  App.js              router setup, top-level layout
  components/          UI components (Header, Body, RestaurantMenu, Cart, ...)
  utils/               Redux store/slice, custom hooks, constants
```

## Why the proxy server?

Swiggy's API blocks direct browser requests (CORS + bot checks). `server.js` forwards
requests to `swiggy.com` from Node with the headers it expects, and re-serves the JSON
to the React app on `localhost:5000`.

## License

MIT — see [LICENSE](LICENSE).

---

Originally started while following the [Namaste React](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32QqCUEqR6r5F1jt2Vhx)
course by Akshay Saini, since rewritten into a standalone project.
