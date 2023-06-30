//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCouter";
//import your own components




let seconds = 0;
//render your react application
setInterval(function(){
ReactDOM.render(<SecondsCounter seconds={seconds}/>, document.querySelector("#app"));
seconds += 1;
},
1000);