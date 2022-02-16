document.getElementById('calculate-btn').addEventListener('click', function () {



    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseInt(foodInput.value);

    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseInt(rentInput.value);


    const clothsInput = document.getElementById('cloths-input');
    const clothsInputValue = parseInt(clothsInput.value);


    const expenseTotal = document.getElementById('expense-total');
    expenseTotal.innerText = foodInputValue + rentInputValue + clothsInputValue;

    const income = document.getElementById('income-input');
    const incomeValue = parseInt(income.value);


    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = incomeValue - expenseTotal.innerText;

});
