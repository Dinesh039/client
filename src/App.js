import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Homescreen from "./Screen/Homescreen";

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
      
    </div>
  );
}
 
export default App;
