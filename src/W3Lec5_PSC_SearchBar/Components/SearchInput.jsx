import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useThrottle } from "use-throttle";

const SearchInput = ({ onInputChange, suggestions }) => {
  const [inputText, setInputText] = useState("");
  //   console.log(inputText);
  //   to highlight option on hover we have to capture the index of item on which mouse is present -> we can also use onHover poperty but it has many limitations like we cannot use keyboard arrow -> and capturing the current has wide applications
  const [active, setActive] = useState(0);

  //   To scroll using keyboard arrow keys
  const scrollRef = useRef();

  //   Debouncing vs throttle -> debouncing triggers the function after certain interval && throttling tells that as long as the event is happening -> it will triggers that function at certain interval
  // Debouncing limits the function call after the event has stopped But throttling triggers the event after certain intervals as long as the event is performing or while the event is in the ongoing phase

  //   basic difference between debouncing and throttling is that -> if i am using debouncing of 1 sec then agar 1sec se kam time main koi bhi type karta hai to vo debounce age bad jayega-> but agar throttling main bohot speed main type karte hai to bhi vo 1 sec main execute hoga

  // debouncing is like setTimeOut
  // Throttling is like setInterval

  //   console.log(active);

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  //   -> this is without throttling
  //   useEffect(() => onInputChange(inputText), [inputText, onInputChange]);

  // to apply throttling use below logic
  const throttledText = useThrottle(inputText, 1000);

  useEffect(() => {
    onInputChange(throttledText);
  }, [throttledText, onInputChange]);

  const handleActiveSuggestion = (e) => {
    // console.log(e.keyCode);
    // 38 -> uparrow
    // 40 -> downarrow
    switch (e.keyCode) {
      case 38:
        if (active === 1) {
          scrollRef.current.scrollTop = suggestions.length * 38.667;
          setActive(suggestions.length);
        }
        if (active <= suggestions.length - 4) {
          scrollRef.current.scrollTop -= 38.667;
        }
        setActive((prev) => prev - 1);
        break;
      case 40:
        if (active === suggestions.length) {
          scrollRef.current.scrollTop = 0;
          setActive(0);
        } else if (active >= 4) {
          scrollRef.current.scrollTop += 38.667;
        }
        setActive((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper onKeyUp={handleActiveSuggestion}>
      <SearchBarWrapper>
        <InputBox
          type="text"
          value={inputText}
          onChange={handleInputTextChange}
        />
      </SearchBarWrapper>
      {/* NOTE it is very imp to pass active inside below tag to set Active style despite of the fact that active is defined in the same code block and it is in the lexical sope but still we need to pass it */}
      <SearchBarSuggestion ref={scrollRef} active={active} limit={5}>
        {suggestions.length > 0 &&
          suggestions.map((item, index) => {
            return (
              <div
                //className={active === index ? "activeDiv" : ""} //-> we can also use normal css using this --> but for conditional rendering prefer styled component
                onMouseOver={() => setActive(index + 1)}
                key={index}
              >
                {item}
              </div>
            );
          })}
      </SearchBarSuggestion>
    </Wrapper>
  );
};

export default SearchInput;

const SearchBarSuggestion = styled.div`
  border: 1px solid black;
  max-height: ${({ limit }) => `${limit * 38.667}px`};
  overflow: auto;

  & * {
    padding: 10px;
    border: 1px solid black;
  }

  & :nth-child(${({ active }) => active}) {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const SearchBarWrapper = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
`;

const InputBox = styled.input`
  flex: 1;
  outline: none;
  border: none;
  font-size: 20px;
`;

const Wrapper = styled.div`
  max-width: 400px;
  margin: auto;
`;
