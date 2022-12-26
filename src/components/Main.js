import React from "react";
import About from "./About";

function Main() {
  return (
    <div>
      <h1>hello main</h1>  
      <div style={{ position: "fixed", bottom: 0 }}>
        <About />
      </div>
    </div>
  );
}

export default Main;