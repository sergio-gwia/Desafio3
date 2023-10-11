import express from "express";
import ProductManager from "./ProductManager.js"
import ProductsRouter from "./routes/productsRouter.js";
import CartRouter from "./routes/cartsRouter.js";

const app = express();

const manager = new ProductManager("Products.json")

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/products", ProductsRouter)
app.use("/api/carts", CartRouter)


const server = app.listen(8080, ()=>{
    console.log("Server Runing on port 8080");
})