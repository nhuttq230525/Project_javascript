console.log("video 51")

const myText = document.getElementById("myText")

const changeTextBtn = document.getElementById("changeTextBtn")

const backBtn = document.getElementById("backBtn")


changeTextBtn.addEventListener("click", function () {
    console.log("ban vua click vao")
    myText.innerText = "ban vua click vao change text"
})

backBtn.addEventListener("click", function () {
    console.log("ban vua click vao back")
    myText.innerText = "video 51"
})