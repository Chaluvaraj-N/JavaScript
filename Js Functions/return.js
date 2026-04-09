//example 1

function greet(){
    return "welcome to js functions"
}
let a = greet()
console.log(a)
console.log(greet())


//example 2

function add(){
    let c = 10 + 20
    return c
}
console.log(add())


//example 3

function multiple(){
    let a = 10
    let b = 2
    return 10*2
}
console.log(multiple())


//example 4

function greet(name){
    return console.log("welcome to js functions " + name)
}  
greet("chalu")


//example 5

function add(x,y){
    var res = x+y
    return res
}
var res = add(100,200)
console.log(res)


//example 6

function fun(){
    return "welcome to js functions"
}
console.log(fun())


//example 7

function fun(){
    return "welcome to js functions"
    console.log("hello")
}
console.log(fun())