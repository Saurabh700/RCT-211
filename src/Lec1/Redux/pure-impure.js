// pure function --> a function which is independent of any other variable except the parameters
//   below is an example of impure function
const c = 10;
const add = (a, b) => {
  return a + b + c;
};
add(1, 2);

// ------------IMP----------

// below example is independent of any other variable but still it is an impure function because it is causing side effects-> because in case of non-primitive data type the parent array also changes--> this causes memory updation
const addNumtoArrayImpure = (arr, n) => {
  arr.push(n);
  return arr;
};
const arr1 = [1, 2];
console.log(addNumtoArrayImpure(arr1, 3), "fsld");
console.log(arr1);

// this will mutate both arr1 and arr2 --> thats why it is not a pure function

// IMP --> but we can create a pure function of non primitive data type by spreading it

const addNumtoArrayPure = (arr, n) => {
  return [...arr, n];
  //   this happened because spread operator creates a copy of that array at some other location that is the reference changes
};
let arr3 = [1, 2];
console.log(addNumtoArrayPure(arr3, 3));
console.log(arr3);
let sd = [1, 2, 3];
let of = [...sd];
console.log(of === sd);
