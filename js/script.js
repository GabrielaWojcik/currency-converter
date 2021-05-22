{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const rateEUR = 4.53;
    const rateGBP = 5.26;
    const rateUSD = 3.73;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;


        let result;

        switch (currency) {
            case "EUR":
            result = amount / rateEUR;
            break;
        
            case "USD":
            result = amount / rateUSD;
            break;

            case "GBP":
            result = amount / rateGBP;
            break;
        }

        resultElement.innerText = `${amount.toFixed(2)}PLN = ${result.toFixed(2)}${currency}`;
    });
}