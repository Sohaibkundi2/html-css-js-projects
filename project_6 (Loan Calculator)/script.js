function calculate(){
    const loanAmountEl = document.getElementById("loan-amount").value;
    const intrestRateEl = document.getElementById("intrest-rate").value;
    const monthPayEl = document.getElementById("month-pay").value;
    const paymentEl = document.querySelector(".payment");


    interest = (loanAmountEl* (intrestRateEl * 0.01))/monthPayEl;

    monthlyPayment = (loanAmountEl/monthPayEl+interest).toFixed(2);

    paymentEl.innerHTML=`Monthly Payment: ${monthlyPayment}`;

}