# 🛍️ Reloji - MERN E-commerce Project

Reloji is an e-commerce project built with the **MERN stack** (MongoDB, Express, React, Node.js).

## Project Structure

```
.
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── assets
│   │   │   │   ├── CategorySelect.jsx
│   │   │   │   ├── ReusableButton.jsx
│   │   │   │   └── SearchBar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Main.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── vite.config.js
├── output.txt
├── package-lock.json
├── package.json
├── README.md
└── server
    ├── package-lock.json
    ├── package.json
    └── server.js

```

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (or a [MongoDB Atlas](https://www.mongodb.com/atlas/database) account)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JeevanJhola/Reloji.git
    cd Reloji
    ```

2.  **Install dependencies for both client & server: **
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file inside the `server/` directory:
    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/reloji
    ```

## Running the Application in Development

Run both backend (Express) and frontend (React + Vite) together:

```bash
npm run dev
```
- Backend → http://localhost:5000
- Frontend → http://localhost:5173

## Available Scripts

### Root
- npm run dev → Start both frontend & backend (development)
- npm run build → Build frontend for production
- npm start → Start backend server (production)

### Server (server/)
- npm run dev → Start backend with Nodemon
- npm start → Start backend with Node

### Client (client/)
- npm run dev → Start Vite development server
- npm run build → Build React app
- npm run preview → Preview production build locally
- npm run lint → Run ESLint
