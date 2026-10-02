console.log("bai tap 3")


const sp1 = {
    name: "iphone 18",
    price: 5000,
    inStock: true
}

const sp2 = {
    name: "iphone Xs max",
    price: 350,
    inStock: true
}

const sp3 = {
    name: "nokia 12",
    price: 100,
    inStock: false
}

const sp4 = {
    name: "samsung note8",
    price: 720,
    inStock: true
}

const sp5 = {
    name: "iphone 13",
    price: 800,
    inStock: false
}

const myProducts = [sp1, sp2, sp3, sp4, sp5]

//in ra tat ca ten san pham
myProducts.forEach((value, index) => {
    console.log(`ten san pham ${index + 1}:`, value.name)
});
//1.in ra ten san pham dau tien
console.log("ten san pham dau tien : ", myProducts[0].name)

//2.thay doi gia tri san pham thu 2 thanh 150
myProducts[1].price = 150;
console.log("tat ca san pham sau khi thay doi gia tri sp2", structuredClone(myProducts))

//3.them 1 san pham moi vao cuoi mang
myProducts.push({
    name: "laptop lenovo",
    price: 4000,
    inStock: false
})
console.log("tat ca san pham sau khi them sp moi", structuredClone(myProducts))

//4.xoa san pham cuoi cung ra khoi danh sach
myProducts.pop()
console.log("tat ca san pham sau khi xoa sp cuoi cung", structuredClone(myProducts))

//5.dung forEach de in ra tat ca san pham
myProducts.forEach((value, index) => {
    console.log(`San pham ${index + 1}: ${value.name} - Gia: ${value.price} - Trang thai: ${value.inStock ? "Con hang" : "Het hang"}`)
})

//6.dung map de tao ra 1 mang chua san pham
const pricelist = myProducts.map((value, index) => {
    return value.price;
});
console.log("Danh sach gia tri san pham:", pricelist);

//7.dung filter de loc cac san pham con hang
let TrangThai = myProducts.filter((value, index) => {
    return value.inStock === true
})
console.log("Cac san pham con hang:", structuredClone(TrangThai));

//8.dung for in de duyet qua cac thuoc tinh

for (let key in myProducts[0]) {
    console.log(`thuoc tinh ${key}: - gia tri : ${myProducts[0][key]}`)
}

for (const key in sp1) {
    console.log(key, sp1[key])
}