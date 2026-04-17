var arr1 = [101,300, 20, 155, 600]
var newarr1 = arr1.map(function(element,index){
    return element*50
})
console.log(newarr1)
console.log(arr1)

let emp = [{id:101,salary:1000},
           {id:102,salary:2000},
           {id:103,salary:3000},
           {id:104,salary:4000}
]
let newEmp = emp.map((element,index)=>{
    return element.salary+(element.salary*10/100)
})
console.log(newEmp)