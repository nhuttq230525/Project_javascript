console.log("video 52")

const myText = document.getElementById("myText")

const changeTextBtn = document.getElementById("changeTextBtn")

const backBtn = document.getElementById("backBtn")


changeTextBtn.addEventListener("click", function () {
    console.log("ban vua click vao")
    myText.style.color = "red"
    myText.style.fontSize = "50px"
    alert("ban vua chuyen mau")
})

backBtn.addEventListener("click", function () {
    console.log("ban vua click vao back")
    myText.style.color = "yellow"
    myText.style.backgroundColor = "green"
})