// this is memoisation --> memoFn remembers the value in cache object and whenever new value arrives it first check is it is already present or not .. if yes then return cache[input] else calculate the value by passing input inside function and then storing it into cache

// it stops recomputing the same logic again and again for the same input if that input has already been calculated

const memoFn = (func) => {
  const cache = {};
  console.log(cache);
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fib = memoFn((N) => {
  if (N <= 1) {
    return N;
  }
  return fib(N - 1) + fib(N - 2);
});
console.time("T1");
console.log(fib(10));
console.timeEnd("T1");
