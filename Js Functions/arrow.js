//syntax
//              (parameters) => {
//              //function body
//              }

//example 1 normal arrow function
let fun = () => {
    console.log("Hello world");
}
fun()


//example 2 parameterized arrow function
let add = (a, b) => {
    console.log(a + b);
}


//example 3 return arrow function
let mul = (a, b) => {
    return a * b;
}   
console.log(mul(5, 6))

            //or 

let mul1 = (a, b) => a * b;
console.log(mul1(5, 6))

            //or

let mul2 = () => 30 + 40
console.log(mul2())


//example 4 parameterized return arrow function
let div = (a, b) =>{
    let result = a / b
    return result;
}
console.log(div(10, 5))

            //or

let res1 = (a, b) => a / b
console.log(res1(10, 5))


//example 5 arrow as a callback function

fun(() => {
    console.log("Hello world");
})


//example 6 parameterized arrow callback function 
fun1((a, b) => {
    console.log(a + b);
})
function fun1(f){
    f(10, 20)
}


//example 7 return arrow callback function
function fun2(f){
    let res = f()
    console.log(res);
}
fun2(() => {
    return 30 + 40
})


//example 8 parameterized return arrow callback function
function fun3(f){
    let res = f(10, 20)
    console.log(res);
}
fun3((a, b) => {
    return a + b
})  


