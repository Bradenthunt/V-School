var employees = []

function Employee(name, job, salary, status){
    this.name = name,
    this.job = job,
    this.salary = salary,
    this.status = "Full Time"
    this.info = "Name: " + this.name + ", Job Title: " + this.job + ", Salary: $" + this.salary + "/hour, Status: " + this.status,
    this.printEmployeeForm = function(){
        console.log(this.info)
    }
}

var Jim = new Employee("Jim", "Paper Salesman", 500);
employees.push(Jim);

var Dwight = new Employee("Dwight", "Paper Salesman", 600);
employees.push(Dwight);

var Ryan = new Employee("Ryan", "The Temp", 3);
Ryan.status = "Temp";
employees.push(Ryan);

console.log(employees)