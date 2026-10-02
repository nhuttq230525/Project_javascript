console.log("video 41")

const person = {
    name: "nhut",
    age: 20,
    address: "hue",
    sizeshoes: 40
}

console.log(" nhut before", { ...person })

// get date
console.log("name is", person.name)
console.log("name is", person["name"])

//set data 

person.language = "tieng viet"
person.sizeTshirt = "L"

delete person.language

console.log("nhut after", { ...person })