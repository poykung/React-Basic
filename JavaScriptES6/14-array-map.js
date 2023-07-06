/* array map การนำค่าสมาชิกใน array มาทำการ map ค่า/หรือเปลี่ยนแปลงค่า และสร้างเป็น new array เพื่อนำไปใช้งาน
.map() โดยหน้าที่คือการวนค่าทุกค่าใน array ตาม function ที่ต้องการ และทำการสร้าง array ใหม่ออกมาพร้อมกับค่าใหม่

*/


const numbers = [10,20,30];
getnumber = numbers.map(ele=>{ 
    const result = ele*2 
    return result;
})
console.log(getnumber); 