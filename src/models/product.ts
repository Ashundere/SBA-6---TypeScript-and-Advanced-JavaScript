

//Product Base Class (Product.ts):
//Define a Product class that includes the appropriate properties based on data provided in the API response.
//Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

export interface ProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
}

export class Product {
    public id: number;
    public title: string;
    public description: string;
    public category: string;
    public price: number;
    public discountPercentage: number;

constructor(data: ProductData){
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
}
displayDetails(): void {
    console.log( `~~~Product Details: ${this.title}~~~`);
    console.log(`ID: ${this.id}`)
    console.log(`Category: ${this.category}`)
    console.log(`Description: ${this.description}`)
    console.log(`Price: ${this.price}`)
    console.log(`Discount: ${this.discountPercentage}`)
}
getPriceWithDiscount(): number {
    const discountAmount = this.price * (this.discountPercentage / 100);
    const discountedPrice = this.price - discountAmount;
    return discountedPrice;
  }
}