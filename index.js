class Person {
    static #count = 0;
    #id;
    constructor(a, b,c) {
        console.log(this.constructor)
        this.name = a;
        this.age = b;
        this.salary = c;
    }
    setID(x)
    {

        this.#id=x;
    }

    getID()
    {
        return this.#id;
    }

}
class Employee extends Person {
    static count=0;
    constructor(a, b,c) {
        Employee.count++;
        super(a, b,c)
    }
    static displayHTRules() {
      console.log("Our rules are bla bla bla" )
    }
    getcount() {
        return Employee.count;
    }
    showSalary(){
        console.log(this.salary)
    }
    increaseSalary2(){
        console.log(this.salary+2000)
    }

}

class Student extends Person {
    constructor(a, b) {
        super(a, b)
    }
}

Employee.displayHTRules()

var p1=new Employee("CJ",22,2000);
var p2=new Employee("Smoke",44,5000);
var p2=new Employee("huss",44,3000);
console.log(Employee.count);
p2.showSalary()
p2.increaseSalary2()














