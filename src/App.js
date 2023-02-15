import React from "react";
import { useState } from "react"; 
 
function App() { 
 const [count, setCount] = useState(0);

 function increment(){
   setCount(prevCount => prevCount + 1)
 }
 function decrement(){
  setCount(prevCount => prevCount - 1)
}

 return (
   <>
     <h1>Count: {count}</h1>
     <button onClick={increment}>
      increment
     </button>
     <button onClick={decrement}>
      decrement
     </button>
   </>
 )

} 
 
export default App; 