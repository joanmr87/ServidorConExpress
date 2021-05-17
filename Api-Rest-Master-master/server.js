const express = require ("express");
const { PORT } = require("./src/config");
const routingAPI = require("./src/handlers")

const app = express();

app.use(express.json());

app.use(routingAPI);
app.use(express.static('./public'));

app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});