class Person {
    protected name : string ="";
    protected age : number;
    protected jobTitle : string = "";
    constructor(name:string,age:number, jobTitle: string){
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    protected introduce(){
        return `Hello there, My name is ${this.name} and  I am ${this.age} years old, and I work as a ${this.jobTitle}`;
    }

    public sayIntroduce(){
        console.log(this.introduce());
    }
}

class Workerperson extends Person {
    protected salary : number;
    protected jobLocation : string;

    constructor(name:string, age:number, jobTitle:string, salary:number, jobLocation:string){
        super(name, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    protected worker(){
        this.sayIntroduce()
        console.log(`and I get ${this.salary} every month, and I work in ${this.jobLocation}`)
    }
}