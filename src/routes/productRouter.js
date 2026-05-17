import express from "express";
import Product from "../model/Products.js";
import {
    CreateProduct,
    GetAllProduct,
    GetSingleProduct,
    UpdateProduct,
    DeleteProduct,
} from "../controller/productController.js"
import router from "./authRoutes.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
router.post("/",
    authMiddleware,
    adminMiddleware,
    CreateProduct,


);
// Get all product
router.get("/",

    GetAllProduct,
);
// get single product
router.get("/:id",
    authMiddleware,
    adminMiddleware, 
    GetSingleProduct,

);
// UPdate product
router.put("/:id",
    authMiddleware,
    adminMiddleware, 
    UpdateProduct,

);
// Delete product
router.delete("/:id",
    authMiddleware,
    adminMiddleware,
     DeleteProduct,

);
export default router;

