// Tarika 1

function sum(a) {
  return function inner(b) {
    return a + b;
  };
}

let innerFunction = sum(2);
// it will return the inner function and that inner function main 3 jayega
console.log(innerFunction(3));

// Tarika 2

function sum2(a) {
  return function inner(b) {
    return a + b;
  };
}
console.log(sum2(2)(3));

// Tarika 3
const sum3 = (a) => (b) => {
  return a + b;
};
console.log(sum3(2)(3));
