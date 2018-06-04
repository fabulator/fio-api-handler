# Fio API handler

[![npm version](https://badge.fury.io/js/fio-api-handler.svg)](https://badge.fury.io/js/fio-api-handler)
[![renovate-app](https://img.shields.io/badge/renovate-app-blue.svg)](https://renovateapp.com/)
[![Known Vulnerabilities](https://snyk.io/test/github/fabulator/fio-api-handler/badge.svg)](https://snyk.io/test/github/fabulator/fio-api-handler)
[![codecov](https://codecov.io/gh/fabulator/fio-api-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/fabulator/fio-api-handler)
[![travis](https://travis-ci.org/fabulator/fio-api-handler.svg?branch=master)](https://travis-ci.org/fabulator/fio-api-handler)

Unofficial API handler for Fio Bank API. Right now only read endpoint are implemented. Post request have to be done by custom requests.

Library is using fetch, don't forget to include polyfil.

There are two API classes basic and enhaced.

## Basic API class

Basic class works with API as it is. It does not process responses in any way and you can request whatever format you want.

```javascript
require('cross-fetch/polyfill');
const { DateTime } = require('luxon');
const { FioApi } = require('./../dist');

const api = new FioApi(YOUR_API_KEY, 'xml');

(async () => {
    const { data } = await api.getTransactions(DateTime.fromISO('2018-01-01'), DateTime.fromISO('2018-01-31'));

    console.log(data);
})();
```

## Enhaced API class

Enhaced API class parse responses from fio and get information like original currency, original amount or card pay date.

```javascript
require('cross-fetch/polyfill');
const { DateTime } = require('luxon');
const { FioApi } = require('./../dist');

const api = new EnhacedFioApi(YOUR_API_KEY);

(async () => {
    const { info, transactions } = await api.getTransactionOverview(2018, 1);

    transactions.map((transaction) => {
        console.log(transaction.getTransactionId());
    });
})();
```
