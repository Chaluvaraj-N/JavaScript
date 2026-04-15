const user1 = {name:"Raj", age:30}
Object.freeze(user1)
 user1.name="virat"
 user1.city="beng"
 delete user1.age

 console.log(user1)