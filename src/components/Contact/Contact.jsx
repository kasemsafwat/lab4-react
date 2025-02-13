import axios from "axios";
import { useContext, useEffect } from "react";

import { CounterContext } from "../../Context/CounterContext";

export default function Contact() {

  let {count,setCount} = useContext(CounterContext);


  

  function welcome(){
    axios.get("http://localhost:3000/").then(({data}) => {
      console.log(data);
      
    }).catch((error) => {
      alert("Error: " + error)
    });
  }


  useEffect(()=>{
    welcome();
  })



  return (
    <>
      <div className="container">
        <h1>Contant Page</h1>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(Math.random() * 100)} className="btn btn-primary">Change Count</button>
      </div>
    </>
  );
}
