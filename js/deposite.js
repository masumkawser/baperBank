document.getElementById("btnDeposite").addEventListener('click',function(){
    const depositeFeild=document.getElementById("DepositeFeild");
    const  NewdepositeAmaountString=depositeFeild.value ;
    const NewdepositeAmaount=parseFloat(NewdepositeAmaountString);

    const TotaldepositeAmount=document.getElementById("DepositeTotal");
    const previousdepositeTotalString=TotaldepositeAmount. innerText;
    const previousdepositeTotal=parseFloat(previousdepositeTotalString);
    const CurrentDeposite=previousdepositeTotal +NewdepositeAmaount;
    TotaldepositeAmount .innerText= CurrentDeposite;

    const BalanceTotal=document.getElementById("balanceTotal");
    const previousbalanceTotalString=BalanceTotal.innerText;
    const previousbalanceTotal =parseFloat(previousbalanceTotalString);

    const CurrentBalanceTotal=previousbalanceTotal+NewdepositeAmaount;
    BalanceTotal.innerText =CurrentBalanceTotal;
})