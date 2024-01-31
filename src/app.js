const express = require("express");
const app = express();
const PUERTO = 8080;
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");


app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use("/api", productsRouter);
app.use("/api", cartsRouter);


app.listen(PUERTO);
