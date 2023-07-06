/* 
Spread Operator

ใช้กระจายสมาชิกภายใน array ออกมาใช้งานโดยใช้เครื่องหมาย ... ไว้ที่ด้านหน้า array



*/

// ข้อมูล array ที่ยังไม่ได้ใช้ spread operator เข้ามาทำงาน
const colors = ["red","green","blue"]
const newColors = ["black","white",colors]

console.log(newColors) //ผลลัพธ์ที่ได้จะเป็นการนำเอาข้อมูลใน array ทั้งชุดมาต่อกัน

const color = ["red","green","blue"]
const newColor = ["black","white",...color]

console.log(newColor) //ผลลัพธ์ที่ได้ข้อมูลภายใน array จะถูกนำมาเรียกต่อกันโดยมองข้อมูลภายในด้านในเป็นกลุ่มเดียวกัน