let product = {
    pname: "MI",
    price: 12333,
    rating: 4.5,
    stock: true,
    category: "electronic"
}

console.log(product)

// read operation
console.log(product.pname)
console.log(product['price'])

// update operation
product.pname = "realme"
product.rating = 4.7
console.log(product)

// create opertion or insert opertion
product.brand='apple'
product['color'] = 'white'
console.log(product)

//delete opertion
delete product.stock
delete product.brand
console.log(product)