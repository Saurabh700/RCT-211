import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useThrottle } from "./useDebounce";
import { useDebounce } from "./useDebounce";

const Debouncing = () => {
  // ------------METHOD 1-----------
  const [count, setCount] = useState(0);

  const debounce = (callback, delay) => {
    let debounceId;
    return function () {
      console.log("debounceId", debounceId);
      debounceId && clearTimeout(debounceId); //in first scroll debounceId is already null -> so this line will be ignored--> but in second scroll debounceId is present so clearTimeout will clear it and then it will go to next line
      debounceId = setTimeout(() => {
        console.log("Setting Timeout");
        callback();
      }, delay);
    };
  };

  const handleScroll = () => {
    setCount((prev) => prev + 1);
  };

  //   insta uses this scroll effect to load new data

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 100));
    return () => {
      window.removeEventListener("scroll", debounce(handleScroll, 100));
    };
  }, []);

  //   ------METHOD 2-------

  const [countHook, setCountHook] = useState(0);

  const dValue = useDebounce(countHook, 2000);

  const handleScrolluseDebounce = () => {
    setCountHook((prev) => prev + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolluseDebounce);
    return () => {
      window.removeEventListener("scroll", handleScrolluseDebounce);
    };
  }, []);

  //   Method 3
  useThrottle(() => {
    console.log(count, "throttle");
  }, 2000);

  return (
    <div style={{ height: "10000px" }}>
      Debouncing
      <div style={{ position: "sticky", top: "100px" }}>
        <h1>Scroll Count: {count}</h1>
        <h1>Scroll Count use useDebouncing: {dValue}</h1>
      </div>
    </div>
  );
};

export default Debouncing;
