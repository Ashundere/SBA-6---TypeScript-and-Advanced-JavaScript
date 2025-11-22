//Product Base Class (Product.ts):
//Define a Product class that includes the appropriate properties based on data provided in the API response.
//Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
// export interface ProductData {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
// }
export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        console.log(`~~~Product Details: ${this.title}~~~`);
        console.log(`ID: ${this.id}`);
        console.log(`Category: ${this.category}`);
        console.log(`Description: ${this.description}`);
        console.log(`Price: ${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
    }
    getPriceWithDiscount() {
        const discountAmount = this.price * (this.discountPercentage / 100);
        const discountedPrice = this.price - discountAmount;
        return discountedPrice;
    }
}
//# sourceMappingURL=product.js.map