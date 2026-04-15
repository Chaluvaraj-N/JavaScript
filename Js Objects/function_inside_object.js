var person={
    name:"Virat",
    age:22,
    height:"male",
    skill: ['React','Js','css','htm'],
    address: {
        state: "karnataka",
        city: "Bengaluru"
    },
eat: function(){
    console.log(this.name +" is eating")
}
}
console.log(person)
console.log(person.age)
console.log(person.skill[1])
console.log(person.address.city)
console.log(person.eat)
person.eat()
// person.play() error