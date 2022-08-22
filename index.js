// let oy = 5;

// switch (oy) {
//   case 12:
//   case 11:
//   case 1:
//     console.log("Qish");
//     break;
//   case 2:
//   case 3:
//   case 4:
//     console.log("Bahor");
//     break;
//   case 5:
//   case 6:
//   case 7:
//     console.log("Yoz");
//     break;
//   case 8:
//   case 9:
//   case 10:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("noto'g'ri oy kuni kiritildi");
// }

let a = parseFloat(prompt("a= "));
let amal = prompt("amal = ");
let b = parseFloat(prompt("b= "));

let javob;

switch (amal) {
  case "+":
    javob = a + b;
    break;
  case "-":
    javob = a - b;
    break;
  case "*":
    javob = a * b;
    break;
  case "/":
    javob = a / b;
    break;
}

alert( a + amal + b + "=" + javob);


alert (""+a+b);