/* 
splice (ตำแหน่งที่จะลบ,จำนวนที่จะลบ) สามารถ add ข้อมูล array เข้าไปแทน data ที่ถูกลบออกไปได้ด้วย ,

slice (ตำแหน่งที่เริ่มต้น,ตำแหน่งสุดท้าย -1) เป็นการนำเอาข้อมูลภายใน array มาใช้โดยให้กำหนด function ลงในตัวแปร



*/

//splice

const numbers = [10,20,30,40,50]
numbers.splice(1,3,333) //ลบตั้งแต่ index ที่หนึ่ง จำนวน index ที่ลบจะนับรวมเอาตำแหน่งแรกที่ต้องการลบเข้าไปนับด้วย
console.log(numbers)

//slice
const num = [10,20,30,40,50]
const result = num.slice(1,4)
console.log(result)