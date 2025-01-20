class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }   
    getDetails(){
        return `${this.name} earns ${this.salary}`
    }
}
class Manager extends Employee{
    constructor(name,salary){
        super(name,salary)
    }
    getDetails(){
        console.log(super.getDetails(),'and is a Manager.')
    }

}
class Developer extends Employee{
    constructor(name,salary){
        super(name,salary)
    }
    getDetails(){
        console.log(super.getDetails(),'and is a Developer.')
    }
}
const employees=[
    new Manager('Alice',5000),
    new Developer('Bob',4000)
]
employees.forEach(employee=>{
    employee.getDetails()
})