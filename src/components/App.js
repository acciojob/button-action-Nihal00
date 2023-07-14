import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {

  const [show, setShow] = useState("hide");
  
  return (
    <div className="App" id="main">
      <button onClick={() => setShow("show")}>Action</button>
      <p id="para" className={show}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    </div>
  );
};

export default App;
