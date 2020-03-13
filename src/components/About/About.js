import React, { useEffect, useState } from "react";

function About() {
  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    document.title = `you clicked ${counter} times`;
  },[counter]);
  return (
    <>
      <p>You clicked {counter} times</p>
      <button onClick={()=>setCounter(counter+1)}>Click me</button>
    </>
  );
}

export default About;
