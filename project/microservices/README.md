### Microservices

These simple microservices enable us to **focus on** learning the tools - Docker, Kubernetes, CI, CD and build the infrastructure needed around typical microservices.

### Currency Exchange Service

If you ask it the value of 1 USD in PKR, or 1 Australian Dollar in PKR, the Currency Exchange Service answers

- 1 USD is 60 PKR
- 1 Australian Dollars is 50 PKR.

http://localhost:8000/currency-exchange/from/USD/to/PKR

```json
{
  "id": 10002,
  "from": "USD",
  "to": "PKR",
  "conversionMultiple": 278.28,
  "exchangeEnvironmentInfo": "Conversion Exchange Instance Information"
}
```

### Currency Conversion

Currency Conversion Service is used to convert a bucket of currencies.

- **STEP 1** : Currency Conversion Service calls the Currency Exchange Service for the value of 1 USD. It gets a response back saying 60.
- **STEP 2** : The Currency Conversion Service then multiplies 10 by `rate`

http://localhost:8100/currency-conversion/from/USD/to/PKR/quantity/10

```json
{
  "id": 10002,
  "from": "USD",
  "to": "PKR",
  "conversionMultiple": 278.28,
  "quantity": 10,
  "totalCalculatedAmount": 2782.7999999999997,
  "exchangeEnvironmentInfo": "Conversion Exchange Instance Information",
  "conversionEnvironmentInfo": "Currency Conversion Instance Information"
}
```

#### How does Currency Conversion know the location of Currency Exchange?

- You don't want to HARDCODE
- Configure an Environment Variable - `CURRENCY_EXCHANGE_SERVICE_HOST`
- --env CURRENCY_EXCHANGE_SERVICE_HOST=http://currency-exchange