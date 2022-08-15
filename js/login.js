document.getElementById("btnsubmit").addEventListener('click',function(){

const emailFeild =document.getElementById('userEmail');
const email= emailFeild.value;


const passwordFeild =document.getElementById('userPassword');
const password= passwordFeild.value;

if(email ==='baperhotel@com' && password==='1234'){
   window.location.href="bank.html";
}
else{
    console.log('unvalid user');
}
})