console.log("video 32")

const sum = (a, b, c) => {

    console.log("run before")
    if (typeof a !== 'number') {
        console.log("run empty return")
        return;
    }// khi ham gap return thi se dung lai va thoat ra khoi ham
    console.log("run after")
    return a + b + c;
}

console.log(sum("nhut", 2, 3));