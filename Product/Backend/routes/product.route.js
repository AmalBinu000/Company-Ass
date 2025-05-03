import express from 'express';
import {getProduct,createProduct, deleteProduct}from '../controller/product.controller.js';

const prodRoute = express.Router()


prodRoute.post("/products",createProduct)
prodRoute.get("/products",getProduct)
prodRoute.delete("/products/:id",deleteProduct)

export default prodRoute;

