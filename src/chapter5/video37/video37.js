console.log("video37")

//mang
const names = ["quangnhut", "nam", "tuoi", "20"]

//index = 0 ; arr[index]

console.log("0 =", names[0])
console.log("2 =", names[2])
//thay doi mang

names [2] = "update tuoi";

console.log("before" ,names)

//them o cuoi mang 
names.push("con cho","con meo")
//them o dau mang
names.unshift("con voi")

console.log(names)

//xoa o cuoi mang
names.pop("con cho")
//xoa o dau mang
names.shift("con voi")

console.log("after", names);