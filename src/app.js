import express from "express";
import ProductManager from "./ProductManager.js"
const app = express();

const manager = new ProductManager("Products.json")

app.use(express.urlencoded({extended:true}))


app.get("/products", async (req, res) => {
    try {
        let products = await manager.getProducts();
        let { limit } = req.query;
        let limitProducts = limit ? products.slice(0, limit) : products;
        res.status(200).send({ limitProducts });
    } catch (error) {
        res.status(500).send({ error: "Error al obtener productos" });
    }
});

app.get("/products/:id", async (req, res) => {
    try {
        let products = await manager.getProducts();
        let id = req.params.id;
        let idProduct = products.find(prod => prod.id == id);
        if (idProduct) {
            res.send(idProduct);
        } else {
            res.status(404).send({ error: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).send({ error: "Error al obtener el producto" });
    }
});


const server = app.listen(8080, ()=>{
    console.log("Server Runing on port 8080");
})