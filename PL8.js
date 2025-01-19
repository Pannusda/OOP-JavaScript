class Car{
    constructor(brand,model,price){
        this.brand=brand
        this.model=model
        this.price=price
    }
    getDetails(){
        console.log(this.brand,this.model,'costs',this.price,'USD.')
    }
}
class Showroom{
    cars=[]
    addCar(car){
        this.cars.push(car)
    }
    removeCar(model){
        let index=this.cars.findIndex(findIndex=>findIndex.model==model)
        if (index!==-1){
            let car_removed=this.cars.splice(index,1)
            console.log(car_removed[0].brand,car_removed[0].model,'is removed completely.')
        }else{
            console.log('This car model is not available.')
        }
        
    }
    listCars(){
        if(this.cars.length==0){
            console.log('No car in the showroom')
        }else{
            this.cars.forEach(carsForEach=>{
                carsForEach.getDetails()
            })
        }        
    }
}
let showroom=new Showroom()
let car1=new Car('Toyota','Camry',30000)
let car2=new Car('Honda','Civic',25000)
let car3=new Car('Mitsubishi','Triton',17000)
showroom.addCar(car1)
showroom.addCar(car2)
showroom.addCar(car3)
showroom.listCars()
showroom.removeCar('Civic')
showroom.removeCar('suzuki')
showroom.removeCar('Camry')
showroom.removeCar('Triton')
showroom.listCars()
