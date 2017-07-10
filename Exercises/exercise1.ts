interface account{
    money:number;
    deposit(value:number):void;
}
interface self{
    name:string ;
    bankAccount:account;
    hobbies:[string,string];
}


let bankAccount:account = {
    money:  2000,
    deposit(value){
        this.money +=value;
    }
};


let myself:self =  {
    name :"Asaad",
    bankAccount:bankAccount,
    hobbies:["Violin","Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
