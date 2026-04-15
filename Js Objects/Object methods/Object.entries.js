const user = {
    name: "John",
    age: 30,
    city: "New York"
};

const entries = Object.entries(user);
console.log(entries);
// Output: [["name", "John"], ["age", 30], ["city", "New York"]]

// Iterating over entries
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Converting back to object
const newObj = Object.fromEntries(entries);
console.log(newObj); // { name: "John", age: 30, city: "New York" }


var person={
    name:"virat",
    age:22,
    height:"male",
    city:"beng"
}
let result=Object.entries(person)
console.log(result)