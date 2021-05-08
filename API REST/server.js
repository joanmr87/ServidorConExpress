const express = require ("express");
const { PORT } = require("./config");
const app = express();

const DB = [];

app.get("/api/users", (req, res) => {
    res.json(DB);
});

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});