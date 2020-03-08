function getCurrency(data) {
    const currency = document.querySelector('#currency');
    data.forEach(element => {
        currency.innerHTML += `
            <option>${element.ccy}</option>
        `;
    });
    return data;
}

function countMoney(data) {
    const $form = document.querySelector('form');

    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const currencyValue = document.querySelector('#currency').value;
        let userCur;
        const userValue = Number(document.querySelector('#sum').value);

        data.filter(item => {
            if(item.ccy === currencyValue) {
                userCur = Number(item.buy);
            }
        });

        const result = document.querySelector('.result');
        result.innerText = `Твоё баблишко в гривнах: ${userCur * userValue}`;
    });
}

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(response => response.json())
    .then(data => {
        getCurrency(data);
        countMoney(data);
    });