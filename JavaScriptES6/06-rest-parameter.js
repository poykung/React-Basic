/* 
rest parameter

ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

*/

summation = (...number)=>{
    let result = 0 //กำหนดตัวแปรไว้สำหรับรับค่าที่วนลูปภายใน array ที่ส่งเข้ามาทำงานใน function
    for(let numberArr of number) result += numberArr //ใช้ loop for สำหรับวนค่า array ที่ส่งเข้ามาทำงานและ + ค่าภายใน loop
    return result
}

console.log(summation(100,200,300,400))