

function expenseAndBalance(inputId) {
    const input = document.getElementById(inputId + '-input');
    const inputValue = parseInt(input.value);
    input.value = '';
    return inputValue;
};




document.getElementById('calculate-btn').addEventListener('click', function () {

    const foodInputValue = expenseAndBalance('food');
    const rentInputValue = expenseAndBalance('rent');
    const clothsInputValue = expenseAndBalance('cloths');

    // const foodInput = document.getElementById('food-input');
    // const foodInputValue = parseInt(foodInput.value);

    // const rentInput = document.getElementById('rent-input');
    // const rentInputValue = parseInt(rentInput.value);


    // const clothsInput = document.getElementById('cloths-input');
    // const clothsInputValue = parseInt(clothsInput.value);


    const expenseTotal = document.getElementById('expense-total');
    const expenseTotalText = expenseTotal.innerText;
    const expenseTotalAmount = parseFloat(expenseTotalText);
    expenseTotal.innerText = foodInputValue + rentInputValue + clothsInputValue;

    const income = document.getElementById('income-input');
    const incomeValue = parseInt(income.value);
    // expenseAndBalance('income');

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)
    balanceTotal.innerText = incomeValue - expenseTotal.innerText;

});
const save = document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;
    const saveAmount = document.getElementById('save-amount');
    const saveAmountValue = saveAmount.innerText;
    saveAmount.innerText = balanceTotal.innerText / saveInputValue;
})