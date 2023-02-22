import { useEffect, useState } from "react";

const pageTitle = document.title;

export default () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count > 0 ){
      document.title = `${pageTitle}-${count}`
    }
  })
  return (
    <>
      <h4>Button "(if else condition used)"</h4>
      <button className="outline" onClick={() => setCount(count + 1)}>
        {/* Writing if else condition in jsx */}
        {(() => {
          if (count === 0) {
            return "Click here to support please!";
          } else {
            return `Supported ${count} times`;
          }
        })()}
      </button>

      <h4>Button "(Ternary condition used)"</h4>

      <button className="outline" onClick={() => setCount(count + 1)}>
        {/* Ternary operator */}
        {count === 0
          ? "Click here to support please!"
          : `Supported ${count} times`}
      </button>
    </>
  );
};
