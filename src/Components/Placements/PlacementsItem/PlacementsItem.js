import classes from "./PlacementsItem.module.css";
import React from "react";
const PlacementsItems = (props) => {

  return (
    <li className={classes.placement}>
   <div>
   <div>
   <div>
     <img src={props.img}/> </div>
   <h3>{props.name}</h3>
</div>
<div className={classes.description}>{props.company}</div>
   </div>
   <div>
   <div className={classes.offer}>{props.package}</div>
   <div className={classes.offer}>{props.batch}</div>
   </div>
   <a href={props.URL}><button className={classes.button}>LINKEDIN</button> </a>
  
    </li>
  );
};
export default PlacementsItems;
