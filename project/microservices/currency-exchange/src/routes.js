import express from "express";
import { imHealthy, retrieveExchangeValue } from "./controllers.js";

const router = express.Router();

router.get("/", imHealthy);
router.get("/currency-exchange/from/:from/to/:to", retrieveExchangeValue);

export default router;
