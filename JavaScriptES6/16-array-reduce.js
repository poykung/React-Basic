// array reduce การนำข้อมูลที่อยู่ใน array มารวมผลลัพธ์และแสดงค่าผลลัพธ์ return ออกไป

const cart = [
    {product : 'กระเป๋า' , price : 680},
    {product : 'รองเท้า' , price : 1200},
    {product : 'เสื้อ' , price : 599}
  ]
  
  const result = cart.reduce((element,sum) => { 
    const sumation = sum.price+element 
    return  sumation 
  },0) 
  
  console.log("รวมราคาสินค้า",result)