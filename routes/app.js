import cors from "cors";
import express from "express";
import "express-async-errors";

import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(financialRouter);

export default app;
