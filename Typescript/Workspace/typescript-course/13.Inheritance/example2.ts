//with inheritance to neglect code duplications

class Person{
    firstName: string;
    lastName: string;
    age: number;    

    
    constructor(firstName: string, lastName: string, age: number)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

        greet(){
        return (`Hello Welcome ${this.firstName} ${this.lastName}`);
    }

    getAge(){
        return this.age;
    }
}

// the function in the parent class is also added in the Person Class
//adding the Person class in the User Class using extend keyword and calling the constructor of the parent class using super("same arguments as in the parent constructor")
class User extends Person{
        constructor(firstName: string, lastName: string, age: number)
    {
        super(firstName,lastName,age)//calling constructor from the parent Class
    }
}

//When we need to add new properties to the child class declare and intiliase as it is
class Admin extends Person{
    role: string;

    constructor( firstName : string, lastName: string, age: number, role: string){
        super(firstName,lastName, age);
        this.role = role;
    }

     greet(){
        return (`Hello Welcome ${this.firstName} ${this.lastName}; Role : ${this.role}`)
    }

    getAge(){
        return this.age;
    }

    manageUsers(){
        return `Managing users with role ${this.role}`
    }
} 

let u1 = new Admin("Arshad","Zakir",20,"Administrator");

console.log(u1.greet());
console.log(u1.manageUsers());
console.log(u1.getAge());