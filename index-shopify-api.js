const Shopify = require('shopify-api-node');

const shopify = new Shopify({
    'shopName': 'elephs.myshopify.com',
    'accessToken': 'a5f01794e4fb7b15a41b3bfb8370d342'
});
let products;
async function getproducts  () {
    products = await shopify.product.list({ limit: 10 });
    console.log("---product---");
    console.log(products);
    
}
getproducts();
console.log("---index.js---");

