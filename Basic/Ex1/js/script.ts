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