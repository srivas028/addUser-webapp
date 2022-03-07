import React from "react";

import classes from './UI.module.css'

const UI = (props) => {
   return (
    <div className={`${classes.card} ${props.className}`}>
        {props.children}
    </div>
   ) 

}

export default UI;