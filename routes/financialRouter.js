import { Router } from "express";

import {
    fetchFinancialBalance,
    fetchFinancialEvents,
    insertFinancialEvent,
} from "../controllers/financialController.js";

const financialRouter = Router();

financialRouter.post("financial-events", insertFinancialEvent);
financialRouter.get("financial-events", fetchFinancialEvents);
financialRouter.get("financial-events/sum", fetchFinancialBalance);

export default financialRouter;
