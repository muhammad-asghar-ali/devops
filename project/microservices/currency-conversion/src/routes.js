import express from "express";
import { imHealthy, convertCurrency } from "./controllers.js";

const router = express.Router();

router.get("/", imHealthy);
router.get(
  "/currency-conversion/from/:from/to/:to/quantity/:quantity",
  convertCurrency
);

export default router;
