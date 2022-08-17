document.getElementById('btn-withdraw').addEventListener("click", function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = "";

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number Sir!')
        return;
    }

    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouseWithdrawTotalString = withdrawTotalElement.innerText;
    const previouseWithdrawTotal = parseFloat(previouseWithdrawTotalString);

    const balanceElement = document.getElementById('balance-total');
    const previouseBalanceTotalString = balanceElement.innerText;
    const previouseBalanceTotal = parseFloat(previouseBalanceTotalString);

    if (newWithdrawAmount > previouseBalanceTotal) {
        alert('apnar kase ato taka nay.!');
        return;
    }

    const newWithrawTotal = previouseWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithrawTotal;

    const newBalanceTotal = previouseBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;

})