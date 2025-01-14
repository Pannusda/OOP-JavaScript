class Product{
    constructor(name,price,quantity){
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    getDetails(){
        console.log('Product: ',this.name,', Price: ',this.price,', Qauantity: ',this.quantity)
    }
}
class Inventory{
    inventory=[]
    addProduct(product){
    //สินค้้าซ้ำให้เพิ่มจำนวน
    let found=false
    for(let i=0;i<this.inventory.length;i++){
        if (this.inventory[i].name===product.name){
            this.inventory[i].quantity+=product.quantity;
            found=true
            break
        }}
    if (found===false){
        this.inventory.push(product);     
    }}

    removeProduct(productname,quantity){
        let removeproduct= this.inventory.findIndex(findProduct=>findProduct.name===productname)
        if (removeproduct!==-1){
            if (this.inventory[removeproduct].quantity<quantity){
                console.log('Not enough available quantity in the stock. The current quantity is',this.inventory[removeproduct].quantity )
            }else{
                this.inventory[removeproduct].quantity-=quantity;
                console.log('Removed completedly. The current quantity is',this.inventory[removeproduct].quantity)
            }
        }else{
            console.log('Cannot find the product')
        }}
    
    listProducts(){
        this.inventory.forEach(inventoryForEach=>inventoryForEach.getDetails())}}

let inv= new Inventory
let prod1= new Product('comp',40000.00,5)
let prod3= new Product('comp',40000.00,6)
let prod4= new Product('comp',40000.00,4)
let prod10= new Product('keyboard',5000.00,6)
let prod5= new Product('comp',40000.00,3)
let prod6= new Product('keyboard',3000.00,3)
let prod7= new Product('keyboard',3000.00,5)
let prod9= new Product('keyboard',3000.00,1)
let prod11= new Product('comp',40000.00,3)
let prod12= new Product('monitor',40000.00,2)
inv.addProduct(prod1)
inv.addProduct(prod3)
inv.addProduct(prod4)
inv.addProduct(prod5)
inv.addProduct(prod6)
inv.addProduct(prod7)
inv.addProduct(prod9)
inv.addProduct(prod10)
inv.addProduct(prod11)
inv.addProduct
//inv.removeProduct('comp',5)
prod5.getDetails()
inv.listProducts()

