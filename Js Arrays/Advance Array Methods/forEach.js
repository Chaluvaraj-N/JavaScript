var arr = ["raj", 100, "rahul", true]
arr.forEach(function(ele,index){
    console.log(ele, index)
})
console.log(arr)

let data = [{name:"raj", age:30},
            {name:"ram", age:36},
            {name:"rao", age:32},
            {name:"ravi", age:38},
            {name:"rat", age:37}
]
data.forEach(function(element,index){
    console.log(index,element.name,element.age)
})
data.forEach(function(element,index){
    console.log(index,element)
})