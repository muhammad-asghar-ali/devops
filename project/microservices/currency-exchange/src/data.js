const exchangeRates = [
  { id: 10002, from: "USD", to: "PKR", conversionMultiple: 278.28 },
  { id: 10003, from: "EUR", to: "PKR", conversionMultiple: 302.67 },
  { id: 10004, from: "GBP", to: "PKR", conversionMultiple: 359.35 },
];

export const getExchangeValue = (from, to) => {
  return exchangeRates.find((rate) => rate.from === from && rate.to === to);
};
