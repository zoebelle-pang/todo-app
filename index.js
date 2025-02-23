const express = require("express");

const PORT = 8000;

// Init app
const app = express();

// View engine
app.set("view engine", "ejs");

// Listen to the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
