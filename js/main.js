//Consignas

class ProductManager {
    static latestId = 0;
    constructor() {
        this.products = [];
        }
    addProduct(id, title, description, price, thumbnail, code, stock){
        if(!id || !title || !description || !price || !thumbnail || !code || !stock) {
            console.log("We encountered an error. Complete all fields to continue.");
            return;
        }
        if (this.products.some(item => item.code === code)){
            console.log("Unexistent code. Try again (reminder: code must be unique).");
            return;
        }
        const NewProduct = {
            id: ++ProductManager.latestId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        this.products.push(NewProduct)
    }
    getProducts(){
        return this.products;
    }
    getProductById(){
        const product = this.products.find (item => item.id === id);
        if (!product){
            console.log("Product not found.");
        } else {
            console.log("Found product: " + product);
        }
    }
}

//Testeo

//1.
const manager = new ProductManager();
//2.
console.log(manager.getProducts());
//3.
manager.addProduct(2, "Tester", "Tester product", 50, "img not found", "aaa000", 1);
manager.addProduct(3, "Tester 2.0", "tester product 2.0", 79, "img not found", "aab001", 1);
//4.
console.log(manager.getProducts());
//5. (me salta errorrrrrrrrrrrrrrrrrrrrrrrrrrr <sjfhkasjdhgkjahskgja)
manager.getProductById(1);
