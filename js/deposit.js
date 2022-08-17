// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDipositAmountString = depositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);
    // console.log(newDipositAmount)
    // step-3
    depositField.value = "";
    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previouseDepositTotalString = depositTotalElement.innerText;
    const previouseDepositTotal = parseFloat(previouseDepositTotalString);
    // step-5
    const newDipositTotal = previouseDepositTotal + newDipositAmount;
    depositTotalElement.innerText = newDipositTotal;
    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previouseBalanceTotalString = balanceTotalElement.innerText;
    const previouseBalanceTotalAmount = parseFloat(previouseBalanceTotalString);
    // step-7
    const newBalanceTotal = previouseBalanceTotalAmount + newDipositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})