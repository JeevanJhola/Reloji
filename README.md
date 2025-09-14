# 🛍️ Reloji

Reloji is our team’s e-commerce project built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This repository currently contains the **backend server setup** using Express and a static frontend served from the `public/` folder.

---

## Project Structure

```
.
├── public/
│   └── index.html  # Frontend for the application
├── .gitignore      # Files to be ignored by Git
├── package.json    # Project metadata and dependencies
├── README.md       # Project documentation
└── server.js       # Main server file
```

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm)

To install Node.js and npm, download the installer from the [official Node.js website](https://nodejs.org/) and follow the setup instructions for your operating system.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/JeevanJhola/Reloji.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd Reloji
    ```
    
3.  Install the dependencies:
    ```bash
    npm install
    ```

This will download the packages listed in `package.json` into the `node_modules` directory.

## Usage

To run the application, you can use the following scripts defined in `package.json`:

*   **Start the server:**
    
    ```bash
    npm start
    ```
    
    This will run the `server.js` file using Node.js.
    
*   **Start the server in development mode:**
    
    ```bash
    npm run dev
    ```
    
    This uses `nodemon` to automatically restart the server whenever you make changes to the code.
    

Once the server is running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Contributing

1. Create a new branch (git checkout -b feature-branch)

2. Commit changes (git commit -m 'Add new feature')

3. Push to branch (git push origin feature-branch)

4. Open a Pull Request
