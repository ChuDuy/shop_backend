import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import productRoutes from "./routes/productRouter.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
const app =express();
const swaggerDocument = YAML.load("./swagger.yaml");
app.use(express.json());
app.get("/", (req , res)=>{
    res.send(
        " Hello Backend "
    );

});
app.use("/products", productRoutes);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);
app.use(errorMiddleware);
app.use("/api/auth" , authRoutes);
export default app;