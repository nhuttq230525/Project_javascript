
// 1. LẤY CÁC PHẦN TỬ HTML


const nameInput = document.getElementById("name");
const studentIdInput = document.getElementById("studentId");
const emailInput = document.getElementById("email");
const classNameInput = document.getElementById("className");
const addButton = document.getElementById("addBtn");
const updateButton = document.getElementById("updateBtn");
const search = document.getElementById("searchInput");
const table = document.getElementById("studentList");



// 2. KHAI BÁO POPUP


const deletePopup = document.getElementById("deletePopup");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

// Lưu ID sinh viên đang muốn xóa
let studentIdToDelete = null;
let studentIdToEdit = null;


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


function displayStudents(list = students) {

    table.innerHTML = "";

    list.forEach(function (student) {

        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.className}</td>

                <td>
                        <button class="edit-btn" data-id="${student.id}">
                            Sửa
                        </button>

                        <button class="delete-btn" data-id="${student.id}">
                            Xóa
                        </button>
                    </td>
            </tr>
        `;
    });


    // Lấy các nút Xóa,Sửa
    const deleteBtn = document.querySelectorAll(".delete-btn");
    const editBtn = document.querySelectorAll(".edit-btn");


    // Gắn sự kiện cho từng nút Xóa
    deleteBtn.forEach(function (button) {

        button.addEventListener("click", function () {

            // Lưu ID sinh viên muốn xóa
            studentIdToDelete = button.dataset.id;

            // Hiện popup
            deletePopup.classList.add("show");

        });

    });

    // Gắn sự kiện tung nút sửa
    editBtn.forEach(function (button) {

        button.addEventListener("click", function () {

            studentIdToEdit = button.dataset.id
            console.log(studentIdToEdit)

            // Tim svien de sua
            const student = students.find(function (student) {
                return student.id === studentIdToEdit;
            })
            //Dua du lieu len form

            nameInput.value = student.name;
            studentIdInput.value = student.id;
            emailInput.value = student.email;
            classNameInput.value = student.className;
        })
    })
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

// Xử lý nút cập nhật
updateButton.addEventListener("click", function () {

    const student = students.find(function (student) {
        return student.id === studentIdToEdit;
    });

    student.id = studentIdInput.value;
    student.name = nameInput.value;
    student.email = emailInput.value;
    student.className = classNameInput.value;

    displayStudents();

    alert("Cập nhật sinh viên thành công");
    studentIdToEdit = null;
})


//  NÚT HỦY XÓA


cancelDelete.addEventListener("click", function () {

    deletePopup.classList.remove("show");

    studentIdToDelete = null;

});



//  NÚT XÁC NHẬN XÓA


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

// includes(keyword) (ktra xemm chuỗi có chứa nội dung cần kiếm tra hay ko)
// tao function tim kiem

function searchStudents() {
    const keyword = search.value.toLowerCase().trim()

    const result = students.filter(function (student) {
        return student.name.toLocaleLowerCase().includes(keyword)
            || student.id.toLocaleLowerCase().includes(keyword)
    })

    displayStudents(result);
}
search.addEventListener("input", function () {  
    searchStudents();
})

