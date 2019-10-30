class Person {
    constructor(name, age, jobTitle) {
        this.name = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    introduce() {
        return `Hello there, My name is ${this.name} and  I am ${this.age} years old, and I work as a ${this.jobTitle}`;
    }
    sayIntroduce() {
        console.log(this.introduce());
    }
}
