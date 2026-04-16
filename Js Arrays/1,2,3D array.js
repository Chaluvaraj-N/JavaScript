//*array

let array=[1,2,3,4,5,{name:"deepak",age:22},6,7,8]              // 1D array
console.log(array)
console.log(array[2])
console.log(array[5])


let array2=[[1,2,3,4,5],["a","b","e"],[1.1,2.1,3.1,4.1,5.1]]        //2D array

console.log(array2)
console.log(array2[0][2])
console.log(array2[1][3])
console.log(array2[2][4])

let array3=[[[1,2,3,4,5],["a","b","c","d","e"],[1.1,2.1,3.1,4.1,5.1]],      //3D array
[[6,7,8,9,10],["f","g","h","i","j"],[6.1,7.1,8.1,9.1,10.1]]]
console.log(array3)
console.log(array3[0][0][2])
console.log(array3[0][1][3])
console.log(array3[0][2][4])