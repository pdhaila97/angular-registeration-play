export class User {
    name: string;
    number: number;
    email: string;
    age: number;
    password: string;

    constructor(name:string, number:number, email:string, age:number, password: string){
        this.age = age;
        this.email = email;
        this.name = name;
        this.number = number;
        this.password = password;
    }
}
