function calculateLoan()
{
    var Lamount=document.getElementById("amount").value;
    var Interestvalue=document.getElementById("interest").value;
    var months=document.getElementById("mnth").value;
    var interestRate=(Lamount*(Interestvalue*.01))/months;
    var monthlypayment=(Lamount/months+interestRate).toFixed(2);

    document.getElementById("final").innerHTML=`Monthly Payment: ${monthlypayment}`

}
