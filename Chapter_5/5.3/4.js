function extractCurrencyValue(currencyString) {
    return Number(currencyString.slice(1));
}

console.log(extractCurrencyValue('$120'))