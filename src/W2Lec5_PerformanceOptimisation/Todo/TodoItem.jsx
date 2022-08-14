import React from "react";

const TodoItem = ({ status, title, id, handleDelete, handleToggle }) => {
  //   console.log(title);

  // today we will also learn how to optimise expensive operations --> expensive operation are those which are synchronous and takes time to execute --> NOTE --> fetch also takes time but it is Asynchronous thats why it is not considered as expensive
  console.log("on typing anything in input box i am also re rendering", id);

  // there is one more method in which we can simply apply useMemo to only the expensive operations so that we dont need to do React.memo or useCallback

  // const expensiveOne = useMemo(()=>expensiveOperation(200),[]) --> only first rerender will be expensive but next rerenders will be very quick

  // useCallback memoises a function || stores the reference of the function objects --> prefer
  // useMemo memoises only the return value that expensiveOperation returns --> prefer
  // React.memo is a an higher order component which memoises the whole component --> less prefer

  return (
    <div>
      <div>
        {title}---{status ? "True" : "False"}
      </div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

// const shallowEqual = (prevProps, currProps) => {
//   return prevProps.id === currProps.id && prevProps.status === currProps.status;
// };

// export default TodoItem;
// to avoid rerendering to TodoItem when typing anything in input box in Todo just use memo
// export default React.memo(TodoItem, shallowEqual);
export default React.memo(TodoItem); // if we are using useCallback in Todo then we dont need to use shallowEqual

// jab tak handleToggle and delete nahi the tab tak memo rerendering rok rha tha on input --> because by now there are only primitive data types --> but ab nhi rok pa rha --> qki both are props handleDelete and handleToggle are react function and since in javaScript every function is an object so memo will do a shallow check-> and since {} !== {} --> thats why it is rerendering

// memo is a higher order component because it takes a component as an argument and it is telling that if i am getting the same props { status, title, id } then i should not rerender

// but always using memo is not a good practive because we cannot debug to find what error is --> so instead of applying memo to the whole component it will be better if we apply this concept on that individual function --> useCallback do this job
