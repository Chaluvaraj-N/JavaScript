//example 1 normal anynomous function
let fun=function(){
    console.log("This is an anonymous function");
}
fun()


//example 2 parameterized anonymous function
let add = function(a,b){
    let c = a + b
    console.log(c)
}
add(10,20)


//example 3 return anonymous function
let greet = function(x,y){
    return "welcome"
}
console.log(greet())


//example 4 self invoking anonymous function
let multiply = function(a,b){
    let res=a * b
    return res
}
console.log(multiply(10,20))
