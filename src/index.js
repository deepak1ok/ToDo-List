import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from "./TodoList/App";
import "./TodoList/TodoList.css";

// import CountInc from "./Incre_Decre/CountIncrement";
// import "./Incre_Decre/CountInc.css";

ReactDOM.render(
  <>
    <App />
    {/* <CountInc /> */}

    {/* <button className='btn btn-primary m-5 p-3 '>Thapa Technical</button> */}
  </>,
  document.getElementById("root")
);
