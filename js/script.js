

function expenseAndBalance(inputId) {
    const input = document.getElementById(inputId + '-input');
    const inputValue = parseInt(input.value);
    return inputValue;


}

// Expense Area 
function expenseTotal() {
    const incomeInputValue = expenseAndBalance('income')
    const foodInputValue = expenseAndBalance('food');
    const rentInputValue = expenseAndBalance('rent');
    const clothsInputValue = expenseAndBalance('cloths');
    const expenseTotal = document.getElementById('expense-total');
    const balanceTotal = document.getElementById('balance-total');
    const expenseTotalBalance = foodInputValue + rentInputValue + clothsInputValue;
    // Error Message 
    if (isNaN(incomeInputValue) || incomeInputValue < 0 || isNaN(foodInputValue) || foodInputValue < 0 || isNaN(rentInputValue) || rentInputValue < 0 || isNaN(clothsInputValue) || clothsInputValue < 0) {
        expenseTotal.innerText = 'Please provide valid number';
        balanceTotal.innerText = 'Please provide valid number';
    }
    else {
        if (incomeInputValue < expenseTotalBalance) {
            expenseTotal.innerText = expenseTotalBalance;
            balanceTotal.innerText = 'Your expense is more than income';
        }
        else {
            const expenseTotalBalance = foodInputValue + rentInputValue + clothsInputValue;
            const remainingBalance = incomeInputValue - expenseTotalBalance;

            expenseTotal.innerText = expenseTotalBalance;
            document.getElementById('balance-total').innerText = remainingBalance;
        }


    }

}
// Savings Area 
function savings() {
    const saveInput = parseFloat(document.getElementById('save-input').value);
    // Error Message 
    if (isNaN(saveInput) || saveInput < 0) {
        alert('Please Put A Valid Number');
    }
    else {
        const incomeInput = parseFloat(document.getElementById('income-input').value);
        const savings = incomeInput * (saveInput / 100);
        const saveAmount = document.getElementById('save-amount');
        saveAmount.innerText = savings;
        const balance = document.getElementById('balance-total').innerText;
        const totalBalance = parseFloat(balance);
        const remainingBalance = totalBalance - savings;
        document.getElementById('remaining-amount').innerText = remainingBalance;
    }




}

