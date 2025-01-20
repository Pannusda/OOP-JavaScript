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
        let index= this.inventory.findIndex(findProduct=>findProduct.name===productname)
        if (quantity && index!==-1){
            if (this.inventory[index].quantity<quantity){
                console.log('Not enough available quantity in the stock. The current quantity is',this.inventory[index].quantity )
            }else{
                this.inventory[index].quantity-=quantity;
                console.log('Removed completedly. The current quantity is',this.inventory[index].quantity)
            }
        }
        else if(!quantity){
                this.inventory.splice(index,1)
                console.log('Removed',productname,'completedly')
            }
            
        else if(index==-1){
            console.log('Cannot find the product')
        }}
    
    listProducts(){
        this.inventory.forEach(inventoryForEach=>inventoryForEach.getDetails())}}

    const inventory = new Inventory();
    const product1 = new Product("Laptop", 1000, 5);
    const product2 = new Product("Mouse", 20, 10);
    inventory.addProduct(product1);
    inventory.addProduct(product2);
    inventory.listProducts(); 
    // Output: 
    // Product: Laptop, Price: 1000, Quantity: 5 
    // Product: Mouse, Price: 20, Quantity: 10 
    inventory.addProduct(new Product("Laptop", 1000, 3)); 
    inventory.listProducts(); 
    // Output: 
    // Product: Laptop, Price: 1000, Quantity: 8 
    // Product: Mouse, Price: 20, Quantity: 10 
    inventory.removeProduct("Mouse"); 
    inventory.listProducts(); 
    // Output: 
    // Product: Laptop, Price: 1000, Quantity: 8

