import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js"; 
import naturebaRouter from "./routes/storeRoutes.js";



const app = express();
app.use(cors());
app.use(express.json());


app.use([authRouter,naturebaRouter])




const port = 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));