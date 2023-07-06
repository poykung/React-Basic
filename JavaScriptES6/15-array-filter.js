//Array Filter ใช้คัดกรองสมาชิกที่อยู่ภายใน array ที่ผ่านเงื่อนไขตามที่ได้กำหนดขึ้น

const numbers = [10,20,30,40]
result = numbers.filter(ele =>ele>30 || ele>10);
console.log(result) 