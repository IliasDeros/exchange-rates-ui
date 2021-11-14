# exchange-rates-ui
Consumer of https://exchangeratesapi.io/

![demo](./demo.png)

## Getting Started

```
yarn
yarn start # http://localhost:1234
```

## Configuring API key

This app makes use of exchange rates API. 
Sign up for a free account for an API key at https://manage.exchangeratesapi.io/signup/free
and update `./frontend/.env` with it:
```
API_KEY=<your api key>
```