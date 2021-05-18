let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;


    let result;

    if (currencyElement.value === "EUR") {
        result = amount / 4.53;
    }

    if (currencyElement.value === "USD") {
        result = amount / 3.73;
    }

    if (currencyElement.value === "GBP") {
        result = amount / 5.26;
    }

    resultElement.innerText = `${amountElement.value}PLN = ${result.toFixed(2)}${currencyElement.value}`;
});