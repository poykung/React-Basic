/* 
ReactDOM Render HTML

เมื่อหน้า web โหลดเสร็จเรียบร้อย web browser จะสร้าง dom ของหน้านั้นขึ้้นมาโดยมอง html เป็นโครงสร้างต้นไม้
object หรือเรียกว่า DOM (Document Object Model)

ReactDOM เป็น library เหมือนกับ react ทำหน้าที่เฉพาะในการจัดการกับ DOM และ ใช้เฉพาะกับ React เท่านั้น

คำสั่ง ReactDOM.render() จะทำการสร้าง DOM (Vistual DOM) ที่มีลักษณะของโครงสร้างต้นไม้ แล้วนำโครงสร้างดังกล่าวส่งไปยัง DOM (Real DOM)
ซึ่งเป็นวิธีการทำงานใน Render JSX ออกมาแสดงผลทางหน้าจอเช่น 

ReactDOM.render(<p>Hello World</p>,document.getElementByID('root'));

*/