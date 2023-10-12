import express from "express";
import __dirname from "./utils.js";
import ProductsRouter from "./routes/productsRouter.js";
import CartRouter from "./routes/cartsRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));

app.use("/api/products", ProductsRouter)
app.use("/api/carts", CartRouter)


const server = app.listen(8080, ()=>{
    console.log("Server Runing on port 8080");
})