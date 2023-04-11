import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function CountIncrement() {
  const [Incre, setIncre] = useState(0);
  const inc = () => {
    setIncre(Incre + 1);
  };
  const dec = () => {
    if (Incre > 0) {
      setIncre(Incre - 1);
    } else {
      alert("Sorry, Zero Llimit Reached");
    }
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{Incre}</h1>
          <div className='btn_div'>
            <Tooltip title='Add'>
              <Button onClick={inc} className='btn_green'>
                <AddIcon />
              </Button>
            </Tooltip>
            <Tooltip title='Delete'>
              <Button onClick={dec} className='btn_red'>
                <DeleteIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
}
export default CountIncrement;
