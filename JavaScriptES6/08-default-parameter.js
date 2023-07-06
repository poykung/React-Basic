/* 
default parameter

คือการกำหนดค่าเริ่มต้นให้กับ parameter ที่อยู่ใน function
โดยหากมีการกำหนดค่า default ให้กับ parameter ในกรณีไม่มีการส่งค่าเข้ามาทำงานใน parameter
ค่าที่อยู่ภายในจะถูก set ให้เป็นค่า default ที่ถูกตั้งไว้

*/

const getData = (fname,address='warinchamrab')=>{ //parameter address ถูกกำหนดให้เป็น default parameter ในกรณีที่ไม่มีการส่งค่าเข้ามาทำงานใน parameter address
    const result = `ชื่อ : ${fname} 
    ที่อยู่ : ${address}`
    return result
}

console.log(getData('Thaweekun',))