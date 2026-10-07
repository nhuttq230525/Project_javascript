
// 1. LẤY CÁC PHẦN TỬ HTML


const nameInput = document.getElementById("name");
const studentIdInput = document.getElementById("studentId");
const emailInput = document.getElementById("email");
const classNameInput = document.getElementById("className");
const addButton = document.getElementById("addBtn");
const search = document.getElementById("searchInput");
const table = document.getElementById("studentList");



// 2. KHAI BÁO POPUP


const deletePopup = document.getElementById("deletePopup");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

// Lưu ID sinh viên đang muốn xóa
let studentIdToDelete = null;


// 3. DANH SÁCH SINH VIÊN


let students = [
    {
        id: "SV001",
        name: "Nguyễn Văn A",
        email: "a@gmail.com",
        className: "23DTH01"
    },

    {
        id: "SV002",
        name: "Trần Văn B",
        email: "b@gmail.com",
        className: "23DTH02"
    },

    {
        id: "SV003",
        name: "Hồ Văn Hoàng",
        email: "c@gmail.com",
        className: "23DTH03"
    }
];


// 4. HIỂN THỊ SINH VIÊN


function displayStudents() {

    table.innerHTML = "";

    students.forEach(function (student) {

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.className}</td>

                <td>
                    <button class="edit-btn">
                        Sửa
                    </button>

                    <button class="delete-btn" data-id="${student.id}">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });


    // Lấy các nút Xóa
    const deleteBtn = document.querySelectorAll(".delete-btn");


    // Gắn sự kiện cho từng nút Xóa
    deleteBtn.forEach(function (button) {

        button.addEventListener("click", function () {

            // Lưu ID sinh viên muốn xóa
            studentIdToDelete = button.dataset.id;

            // Hiện popup
            deletePopup.classList.add("show");

        });

    });
}



// 5. HIỂN THỊ DANH SÁCH BAN ĐẦU


displayStudents();


// 6. THÊM SINH VIÊN


addButton.addEventListener("click", function () {

    const newStudent = {

        name: nameInput.value,
        id: studentIdInput.value,
        email: emailInput.value,
        className: classNameInput.value

    };

    // Thêm vào mảng
    students.push(newStudent);

    // Hiển thị lại
    displayStudents();

    alert("Bạn đã thêm sinh viên thành công");
});



// 7. NÚT HỦY XÓA


cancelDelete.addEventListener("click", function () {

    deletePopup.classList.remove("show");

    studentIdToDelete = null;

});



// 8. NÚT XÁC NHẬN XÓA


confirmDelete.addEventListener("click", function () {

    students = students.filter(function (student) {

        return student.id !== studentIdToDelete;

    });

    // Hiển thị lại danh sách
    displayStudents();

    // Đóng popup
    deletePopup.classList.remove("show");

    studentIdToDelete = null;

});