/*nested object*/

var user={
    name:"Chandan",
    id:101,
    isplaced:false,
    skills:["HTML","CSS","JavaScript"],
    address:{
        country:"Pakistan",
        city:"karachi",
        state:"karachi",
        pincode:560001,
        area:{
            areaName:"MG Road",
            landmark:"UB city top"
        }

    }
};
console.log(user);
// console.log(user.name);
// console.log(user.address.city);
// console.log(user.address.area.areaName);    
// console.log(user.address.area.landmark);
// console.log(user.skills[2]);