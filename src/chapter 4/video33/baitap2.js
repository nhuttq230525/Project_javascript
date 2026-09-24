console.log("video 33")

const diemToan = 9
const diemVan = 8
const diemAnh = 7

function tinhTrungBinh(diemToan, diemVan, diemAnh) {
    return (diemToan + diemVan + diemAnh) / 3
}

console.log(tinhTrungBinh(diemToan, diemVan, diemAnh));

// function xepLoai(diemTrungBinh) {
//     if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
//         console.log("xuat xac")
//     } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
//         console.log("gioi")
//     } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
//         console.log("kha")
//     } else {
//         console.log("trung binh")
//     }
// }

function xepLoai(diemTrungBinh) {
    switch (true) {
        case (diemTrungBinh >= 9 && diemTrungBinh <= 10):
            return "xuat xac"
        case (diemTrungBinh >= 8 && diemTrungBinh < 9):
            return "gioi"
        case (diemTrungBinh >= 6.5 && diemTrungBinh < 8):
            return "kha"
        default:
            return "trung binh"
    }
}
console.log(xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh)))