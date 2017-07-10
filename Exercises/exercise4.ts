

class Person{
    private _firstName:string;

    set firstName(value:string){
          this._firstName = value.toUpperCase();
    }

get firstName(){
        return this._firstName;
}
}

let person = new Person();
person.firstName ='asaad';
console.log(person.firstName);

