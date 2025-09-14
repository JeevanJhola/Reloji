const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

