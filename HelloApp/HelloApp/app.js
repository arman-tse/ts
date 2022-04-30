class Person {
    static calculateYears(age) {
        return Person.retirementAge - age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 130) {
            console.log("Incorrect age");
        }
        else {
            this._age = value;
        }
    }
}
Person.retirementAge = 65;
let tom = new Person();
tom.name = "Tom";
tom.age = 36;
let years = Person.calculateYears(tom.age);
console.log(Person.retirementAge);
console.log(years);
//# sourceMappingURL=app.js.map