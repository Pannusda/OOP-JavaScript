class Calculator{
    add(a=0,b=0){
        if(a && b){return a+b}
        else{return 0}
    }
}
const calculator=new Calculator
console.log(calculator.add(5,10))
console.log(calculator.add())