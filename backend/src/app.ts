import express from "express";
import dotenv from "dotenv";
import { prisma } from "./lib/db";
import errorMiddleware from "./middlewares/errorMiddleware";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`server is working on port:${3000}`);
});
