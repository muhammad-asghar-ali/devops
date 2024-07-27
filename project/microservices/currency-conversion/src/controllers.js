import axios from "axios";
import logger from "./logger.js";
import { getInstanceInfo } from "./services.js";

export const imHealthy = (req, res) => {
  res.send({ healthy: true });
};

export const convertCurrency = async (req, res) => {
  const { from, to, quantity } = req.params;
  const quantityBigDecimal = parseFloat(quantity);

  logger.info(`Received Request to convert from ${quantity} ${from} to ${to}.`);

  try {
    const response = await axios.get(
      `http://localhost:8000/currency-exchange/from/${from}/to/${to}`
    );
    const exchangeValue = response.data;

    const convertedValue =
      quantityBigDecimal * exchangeValue.conversionMultiple;
    const conversionEnvironmentInfo = getInstanceInfo();

    const currencyConversion = {
      id: exchangeValue.id,
      from,
      to,
      conversionMultiple: exchangeValue.conversionMultiple,
      quantity: quantityBigDecimal,
      totalCalculatedAmount: convertedValue,
      exchangeEnvironmentInfo: exchangeValue.exchangeEnvironmentInfo,
      conversionEnvironmentInfo,
    };

    res.send(currencyConversion);
  } catch (error) {
    logger.error(`Error during currency conversion: ${error.message}`);
    res.status(500).send("Internal Server Error");
  }
};
