const express = require("express");
const PORT = 3000;
const app = express();

app.use((req, res, next) => {
    if (req.query.valid === "123") {
        next();
    } else {
        res.send("invalido");
    }
})

app.get("/", (req, res) => {
    console.log("Probando app.get");
    res.json([{ usuario: "Astor" }, { usuario: "Dante"}]);
});

app.listen(PORT, () => {
    console.info("Escuchando en puerto 3000");
});

