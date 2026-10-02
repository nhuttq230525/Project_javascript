console.log("bai tap 4")



const username = document.getElementById("username")
const password = document.getElementById("password")
const loginBtn = document.getElementById("loginBtn")



loginBtn.addEventListener("click", (value, index) => {
    if (username.value == "quangnhut@gmail.com" && password.value == "123456") {
        alert("Đăng nhập thành công!")
        window.location.href = "succesful.html"
    } else {
        alert("Đăng nhập thất bại!")
        username.style.borderColor = "red"
        password.style.borderColor = "red"
    }
})
