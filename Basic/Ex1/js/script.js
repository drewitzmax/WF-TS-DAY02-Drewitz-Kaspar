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
class Workerperson extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    worker() {
        this.sayIntroduce();
        console.log(`and I get ${this.salary} every month, and I work in ${this.jobLocation}`);
    }
}
