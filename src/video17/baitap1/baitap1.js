const fullName = "Ta quang nhut"
const birthYear = 2005
let isStudents = true

const today = new Date()
const currentYear = today.getFullYear()
const age = currentYear - birthYear

console.log(`ho va ten: ${fullName} tuoi: ${age} sinh vien: ${isStudents}`)