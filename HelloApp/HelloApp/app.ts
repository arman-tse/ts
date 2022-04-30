class Person {
    name: string;
    private _age: number;
    private _name: string;

    private static retirementAge: number = 65;
    static calculateYears(age: number): number {
        return Person.retirementAge - age;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        if (value < 0 || value > 130) {
            console.log("Incorrect age");
        }
        else {
            this._age = value;
        }
    }
} 

let tom = new Person();
tom.name = "Nursultan";
tom.age = 36;

let years: number = Person.calculateYears(tom.age);
console.log(Person.retirementAge);
console.log(years);