// Method 1 -> not working properly

// import React, { useState } from "react";

// const useDebounce = (value, delay) => {
//   const [dValue, setDvalue] = useState(value);
//   let debounceId = setTimeout(() => {
//     setDvalue(value);
//   }, delay);
//   return () => {
//     clearTimeout(debounceId);
//   };
//   //   return dValue;
// };

// export default useDebounce;

// METHOD 2

import { useEffect, useState, useRef } from "react";

const useDebounce = (value, delay) => {
  const [dValue, setDvalue] = useState(value);
  useEffect(() => {
    let debounceId = setTimeout(() => {
      setDvalue(value);
    }, delay);
    return () => {
      clearTimeout(debounceId);
    };
  }, [delay, value]);

  return dValue;
};

// export default useDebounce;

// METHOD 3

const useThrottle = (func, delay) => {
  const throttledId = useRef(false);
  useEffect(() => {
    if (!throttledId.current) {
      throttledId.current = true;
      setTimeout(() => {
        func();
        throttledId.current = false;
      }, delay);
    }
  }, [func, delay]);
};

export { useThrottle, useDebounce };
