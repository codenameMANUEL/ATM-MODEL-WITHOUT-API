const currentBalance = 50000;
const password = 1010;

const inputField = prompt("Enter Your Pin \n" + "DON'T SHARE YOUR PIN WITH ANYONE !!!");

if(inputField == password){
   let balancechecker = prompt("Enter the amount you want to withdraw")
    if(balancechecker <= currentBalance){
        alert("RECEIVING....");
        alert("You Just Withdraw " + balancechecker + "\n" + "\n" + "New Balance is " + (currentBalance - balancechecker));
       
        alert("THANK YOU FOR BANKING WITH US");
    }else{
        alert("INSUFFICENT BALANCE !!!");
    }
}else{
    alert("INCORRECT PIN !!!")
}