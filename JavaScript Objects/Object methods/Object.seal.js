let user = {
    name: "raj",
    age: 36
};

Object.seal(user);

user.city = "mysore";

console.log(user);  

delete user.age;

console.log(user);  

Object.seal(user);

console.log(user.age);

console.log(user);