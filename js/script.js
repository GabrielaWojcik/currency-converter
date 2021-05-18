let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;


    let result;

    if (currencyElement.value === "eur") {
        result = amount / 4.53;
    }

    if (currencyElement.value === "usd") {
        result = amount / 3.73;
    }

    if (currencyElement.value === "gbp") {
        result = amount / 5.26;
    }

    resultElement.innerText = result.toFixed(2);
});