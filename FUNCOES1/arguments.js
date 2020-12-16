//function expression:

// const somar = function () {
//   console.log(arguments);
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// };

// console.log(somar(1, 2, 3, 4));

// function declaration
function somar() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  }

console.log(somar(1, 2, 3, 4));
