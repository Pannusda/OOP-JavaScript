class Shape{
    getArea(){
        throw new Error('Method getArea() must be implemented.');
    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
    }
    getArea(){
        return Math.PI*this.radius
    }
}
class Rectangle extends Shape{
    constructor(width,length){
        super()
        this.width=width
        this.length=length
    }
    getArea(){
        return this.width*this.length
    }
}
const shapes=[
    new Circle(10),
    new Rectangle(5,10)
]
shapes.forEach(shape=>{
    console.log(`Area: ${shape.getArea()}`)
})