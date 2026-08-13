// method 1
// var box1 = document.getElementById("inputnum1")
// var box2 = document.getElementById("inputnum2")
// var result = document.getElementById("result")
// function resultfun()
// {
//     var box1value = Number(box1.value)
//     var box2value = Number(box2.value)
//     var total = box1value + box2value
//     result.textContent= (`Result : ${total}`)
// }

// method 2

let value1 = Number(window.prompt("Enter the value 1"));
let value2 = Number(window.prompt("Enter the value 2"));
let result = value1+ value2;
console.log(result)