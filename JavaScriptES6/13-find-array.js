/* 
ค้นหาข้อมูลใน array
indexOf => ผลการค้นหาจะได้ตำแหน่ง ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1 (ค้นหาตำแหน่งเลข index)
find => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undifined ()
findIndex => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอถ้าไม่เจอจะได้ -1

*/

const colors = ["red","green","blue"]

//indexof
const index = colors.indexOf("blue")
console.log("Indexof",index)

//find
const search = colors.find(element=>element==="green")
console.log("find",search)

