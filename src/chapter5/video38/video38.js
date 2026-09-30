console.log("video 38")

const myClass = ["nhut", "kieu", "tam", "hoang"]


//for each
myClass.forEach(function (value, index) {
    console.log("value", value, "index", index)
}
);

console.log("---------")

myClass.forEach((value, index) => {
    console.log("value", value, "index", index)
});