import { fetchProducts } from "../src/services/apiService";
import { calculateDiscount } from "../src/utils/discountCalculator";
import { calculateTax } from "../src/utils/taxCalculator";
import { ConnectionError } from "../src/utils/errorHandler";
import { Product } from "../src/models/product";



async function productInstances() {
    const products = await fetchProducts()
    const productList: Product[] = []

    for(let i=0; i < products.length; i++) {
        const product = new Product(products[i].id, products[i].title, products[i].description, products[i].category, products[i].price, products[i].discountPercentage)
        productList.push(product)
    }
    return productList
}


async function displayProduct(productid:number) {
    try{
    const productList = await productInstances()
    const productIndex = productid -1
    if(productList && productList[productIndex]){
        productList[productIndex].displayDetails()
    }
    }catch(e){
        throw new ConnectionError("Cannot connect to API")
    }
    
    
}

