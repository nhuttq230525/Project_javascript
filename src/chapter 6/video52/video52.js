console.log("video 52")

// const myText = document.getElementById("myText")

// const changeTextBtn = document.getElementById("changeTextBtn")

// const backBtn = document.getElementById("backBtn")


// changeTextBtn.addEventListener("click", function () {
//     console.log("ban vua click vao")
//     myText.style.color = "red"
//     myText.style.fontSize = "50px"
//     alert("ban vua chuyen mau")
// })

// backBtn.addEventListener("click", function () {
//     console.log("ban vua click vao back")
//     myText.style.color = "yellow"
//     myText.style.backgroundColor = "green"
// })


const myInput = document.getElementById("myInput")
const SubmitBtn = document.getElementById("SubmitBtn")
const allName = document.getElementById("allName")
const preName = document.getElementById("preName")


SubmitBtn.addEventListener("click", function () {
    // console.log(myInput.value)
    localStorage.setItem("nhut", myInput.value)
    document.getElementById("allName").innerHTML = `<b>${myInput.value}</b>`

})

const getName = localStorage.getItem("nhut")
if (getName) {
    preName.innerHTML = `<b>${getName}</b>`
}

