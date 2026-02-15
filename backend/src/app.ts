import dotenv from "dotenv";
import express from "express";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`server is working on port:${3000}`);
});

export default app;
