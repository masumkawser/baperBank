

// 1.even hander withdrawbutton.
// 2. get ammount feild with draw input feild.
// 3.previous withdraw total.
// 4.current widthdraw.Total
// 5.total balance.
// 6.calculate newbalance.


// step-1

document.getElementById("btnWithdraw").addEventListener('click',function(){

    // step-2
const withdrawFeild=document.getElementById("withdrawFeild");
const newWithdrawAmountString=withdrawFeild .value ;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

// step-3
const widrawTotalElement=document.getElementById("WidrawTotal");
const previousWidrawTotalstring=widrawTotalElement.innerText;
const previousWidrawTotal=parseFloat(previousWidrawTotalstring);


// step-4
const currentWidrawTotal=previousWidrawTotal+newWithdrawAmount;
widrawTotalElement.innerText=currentWidrawTotal;

// step-5
const TotalBalanceElement=document.getElementById("balanceTotal");
const previousbalanceTotalString=TotalBalanceElement.innerText;
const previousbalanceTotal=parseFloat(previousbalanceTotalString);

// step-6
const newBalanceTotal=previousbalanceTotal-newWithdrawAmount;
TotalBalanceElement.innerText=newBalanceTotal;


// step-7

withdrawFeild .value= '';
})