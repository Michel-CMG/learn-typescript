// So, now javascript and typescript has Class

class Animal
{
    public name : string;
    constructor(name : string)
    {
        this.name = name;
    }
    sayHello()
    {
        return "My name is " + this.name;
    }
}

let jack = new Animal("Jack");
console.log(jack.sayHello());
