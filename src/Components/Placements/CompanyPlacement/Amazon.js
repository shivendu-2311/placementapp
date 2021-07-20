import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
import Fragment from 'react'
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/Ishita.ico",
    name: "Ishita verma",
    company: "Amazon",
    batch: "Batch -2017-2021",
    package:"₹32 Lakhs",
    URL: "https://www.linkedin.com/in/ishita-verma-539506172/",
   
  },

  {
    id: "e1",
    imageUrl:"./image/1556308402511.ico",
    name: "Amber Saxena",
    company: "Amazon",
    batch: "Batch -2017-2021",
    package:"₹32 Lakhs",
    URL: "https://www.linkedin.com/in/amber-saxena-276458150/",
  },

  {
    id: "e1",
    imageUrl:"./image/1610110757500.ico",
    name: "Mukesh Singh Bisht",
    company: " SDE intern at Amazon",
    batch: "Batch -2017-2021",
    package:"Unknown..",
    URL: "https://www.linkedin.com/in/mukesh-singh-bisht-486800148/",
  },
  {
    id: "e1",
    imageUrl:"./image/1586017884541.ico",
    name: "Priyanka Gujral",
    company: "Amazon",
    batch: "Batch -2017-2021",
    package:" ₹32 Lakhs",
    URL: "https://www.linkedin.com/in/priyanka-gujral-8aa037184/",
  },
  {
    id: "e1",
    imageUrl:"./image/Poonam.ico",
    name: "Poonam pant",
    company: "Amazon",
    batch: "Batch -2017-2021",
    package:" ₹32 Lakhs",
    URL: "https://www.linkedin.com/in/priyanka-gujral-8aa037184/",
  },
  

];

const Amazon = (props) => {



  const placementList = Placements.map((placements) => (
    <PlacementsItem
      key={placements.id}
      img={placements.imageUrl}
      name={placements.name}
      package={placements.package}
      batch={placements.batch}
      company={placements.company}
      URL={placements.URL}
    />
  ));
  return (
 

    <Card className="classes.Placement">
      <ul>
      {placementList}
    </ul>
    </Card>
 
  );
};
export default Amazon;
