let arr = [{ a: 100 }, { a: 20 }, { a: -10 }]
let sum = arr.reduce((num1, num2) => num1 + num2.a, 0)
console.log(sum)
