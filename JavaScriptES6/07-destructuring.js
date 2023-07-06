/* 
Destructuring การสลายโครงสร้าง

คือ การกำหนดค่าที่อยู่ภายใน array หรือ object ให้กับตัวแปรโดยใช้วิธิการจับคู่ตัวแปรกับค่าใน array หรือ object

*/

const color =  ["green","white","gray"]

//Destructuring Array

const [green,white,gray] = color //ด้านขวาคือ array ด้านซ้ายคือตัวแปร หากต้องการเข้าถึงเฉพาะข้อมูลบางตัวให้ใช้เครื่องหมาย , ไว้ที่ช่องที่ไม่ต้องการ


console.log(green)
console.log(white)
console.log(gray)

//Destructuring Object

const personal = {
    p_name:"Thaweekhun",
    n_name:"poy",
    p_age:"13"
}

const {p_name,n_name,p_age} = personal

console.log(personal)