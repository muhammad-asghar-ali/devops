import { getExchangeValue } from "./data.js";
import { getInstanceInfo } from "./services.js";
import logger from "./logger.js";

export const imHealthy = (req, res) => {
  res.send({ healthy: true });
};

export const retrieveExchangeValue = (req, res) => {
  const { from, to } = req.params;
  const headers = req.headers;

  printAllHeaders(headers);

  const exchangeValue = getExchangeValue(from, to);

  logger.info(`${from} ${to} ${exchangeValue}`);

  if (!exchangeValue) {
    return res
      .status(404)
      .send(`Unable to find data to convert ${from} to ${to}`);
  }

  exchangeValue.exchangeEnvironmentInfo = getInstanceInfo();

  res.send(exchangeValue);
};

const printAllHeaders = (headers) => {
  Object.entries(headers).forEach(([key, value]) => {
    logger.info(`Header '${key}' = ${value}`);
  });
};
