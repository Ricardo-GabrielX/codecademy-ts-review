import products from "./products";

let productName: string;
productName = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "New York";

const product = products.find(item => item.name === productName);

console.log(product);

if(product){
  if(product.preOrder == 'true'){
    console.log("Oder Sent");

  } else {
    console.log("Sorry, this product has not yet been shipped");
  }

  if(Number(product.price) >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product");
  } else {
     shipping = 5;
    console.log("We didn't receive shipping for this product");
  }

  if(shippingAddress.match("New York")) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping ;
  console.log(total);

  console.log("\n--- RECEIPT ---");
  console.log("Product name: " + productName);
  console.log("Shipping Address: " + shippingAddress);
  console.log("Price of the product: $" + Number(product.price).toFixed(2));
  console.log("Tax total: $" + taxTotal.toFixed(2));
  console.log("Shipping: $" + shipping.toFixed(2));
  console.log("Total amount: $" + total.toFixed(2));
  console.log("---------------");
}


