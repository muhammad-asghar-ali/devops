import express from "express";
import winston from "winston";
import routes from "./src/routes.js";

const app = express();
const PORT = process.env.PORT || 8100;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [new winston.transports.Console()],
});

app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
