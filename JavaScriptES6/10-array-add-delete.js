/* 
push, pop, shift, unshift

push เป็นการนำเอาข้อมูลเข้าไปต่อใน array
pop เป็นการนำข้อมูลที่อยู่ท้ายสุดใน array ออกไป
shift เป็นการนำเอาข้อมูลที่อยู่ตัวหน้าสุดภายใน array ออกไป
unshift เป็นการเพิ่มสมาชิกเข้าไปด้านหน้า array

*/


// push
const data = ["10","20"]
data.push("30")
data.push(...["40","50","60"]) //สามารถใช้ spread operater นำมา push ข้อมูล array เข้าไปต่อท้ายได้
console.log(data)

//pop
const colors = ["red","green","blue","yellow"]
colors.pop() //นำเอา array ตัวสุดท้ายออกไป
console.log(colors)

//shift
const animals = ["tiger","lion","bird"]
animals.shift()
console.log(animals)

//unshift
const computers = ["ram","mainboard","case"]
computers.unshift("cpu")
console.log(computers)

