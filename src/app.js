import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js"; 
import naturebaRouter from "./routes/storeRoutes.js";
import productsRouter from "./routes/productsRoutes.js";



const app = express();
app.use(cors());
app.use(express.json());


app.use([authRouter,/*naturebaRouter,*/productsRouter])




const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));