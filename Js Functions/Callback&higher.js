// example 1

function print(){
    console.log("Hello World");
}
print() 


function add(x,y){
let z=x+y
console.log(z);
}
add(10,20)


//example 2

function greet(){
    return "good morning"
}  
greet()
console.log(greet())


function fun(){
    console.log("i am anynomous function")
}
fun()


//example 3

function fun(f){
    console.log(f)
}
fun("i am anynomous function")


// how to pass anynomous function as a callback function

function fun(f){
    console.log()
}
fun(function(){
    return "i am anynomous function"
})


// parameterized return anynomous callback function

function fun(f){
    console.log((10,20))
}
fun(function(x,y){
    return x+y
})


