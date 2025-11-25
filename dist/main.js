import { fetchProducts } from "../src/services/apiService.js";
import { calculateDiscount } from "../src/utils/discountCalculator.js";
import { calculateTax } from "../src/utils/taxCalculator.js";
import { ConnectionError } from "../src/utils/errorHandler.js";
import { Product } from "../src/models/product.js";
async function productInstances() {
    const products = await fetchProducts(); //will fetch 5 products from API
    const productList = [];
    for (let i = 0; i < products.length; i++) {
        const product = new Product(products[i].id, products[i].title, products[i].description, products[i].category, products[i].price, products[i].discountPercentage);
        productList.push(product);
    }
    return productList;
}
async function displayProduct(productid) {
    try {
        const productList = await productInstances();
        const productIndex = productid - 1;
        if (productList && productList[productIndex]) {
            productList[productIndex].displayDetails();
        }
    }
    catch (e) {
        throw new ConnectionError("Cannot connect to API");
    }
}
//# sourceMappingURL=main.js.map
