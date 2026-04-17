var arr2=[101,300,20,155,600]
var newarr2 = arr2.filter(function(ele,index){
    return ele>200
})
console.log(newarr2)
console.log(arr2)

let person=[{name:"raj", age:30},
            {name:"ram", age:36},
            {name:"rao", age:32},
            {name:"ravi", age:38},
            {name:"rat", age:37}
]
let newarr3 = person.filter(function(ele,index){
    return ele.age<35
})
console.log(newarr3)