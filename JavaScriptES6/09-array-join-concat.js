/* 
Join&concat

join() เป็นการแปลงสมาชิกที่อยู่ภายใน array ให้เป็นข้อความ
สามารถใช้สัญญาลักษณ์ใน function join() เพื่อใช้ขั้นสมาชิกภายใน array ได้ เช่น join("/")

concat การต่อ array เป็นการนำเอา array มาเรียกต่อกัน


*/

//join()
const data = [100,200,300]
const result = data.join("/") //แปลง array ให้เป็น string โดยใช้ function join
console.log(data) // array
console.log(result) //string

//concat()

const data1 = ["100","200"]
const data2 = ["300","400"]

const concatData = data1.concat(data2)

console.log(concatData)