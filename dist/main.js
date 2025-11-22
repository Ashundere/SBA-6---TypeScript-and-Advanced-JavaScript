import { fetchProducts } from "../src/services/apiService.js";
import { calculateDiscount } from "../src/utils/discountCalculator.js";
import { calculateTax } from "../src/utils/taxCalculator.js";
import { ConnectionError } from "../src/utils/errorHandler.js";
import { Product } from "../src/models/product.js";
async function productInstances() {
    const products = await fetchProducts();
    const productList = [];
    for (let i = 0; i < products.length; i++) {
        const product = new Product(products[i].id, products[i].title, products[i].description, products[i].category, products[i].price, products[i].discountPercentage);
        productList.push(product);
    }
    return productList;
}
async function displayProduct(productid) {
    const productList = await productInstances();
    productList[productid - 1].displayDetails();
}
displayProduct(1);
displayProduct(3);
//# sourceMappingURL=main.js.map