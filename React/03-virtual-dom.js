/* 
Virtual Dom

การทำงานของ Virtual DOM

Virtual Dom มีลักษณะการทำงานคล้ายๆกับ DOM ใน html โดย virtual dom จะทำการคัดลอก dom จริง (real dom)
มาเก็บลงใน memeory ถ้ามีการเปลี่ยนแปลงเกิดขึ้นที่ component ก็จะอัพเดทเฉพาะ componenet ที่เปลี่ยนแปลงเท่านั้น
โดยไม่จำเป็นต้อง update dom ใหม่หมดทั้งหน้า ทำให้เกิดการทำงานได้อย่างรวดเร็ว

**ถ้าใช้ dom ปกติจะ refesh ทั้งหน้าเพื่อ update หน้า web ที่เปลี่ยนแปลงไป


*/