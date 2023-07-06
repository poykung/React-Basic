/*  */

//for 
const numbers = [10,20,30,40]
for(i = 0; i<numbers.length; i++){
    console.log("forloop",numbers[i])
}

//foreach
numbers.forEach(ele => {
    console.log(`foreach ${ele}`)
});

//for of
summation = (...number)=>{
    let result = 0 
    for(let numberArr of number) result += numberArr 
    return result
}
console.log(summation(100,200,300,400))