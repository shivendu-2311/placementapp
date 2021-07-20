import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/1626107620173.ico",
    name: "Ishita verma",
    company: "Amazon",
    batch: "2017-2021",
    package:"₹20 Lakhs",
    URL: "https://www.linkedin.com/in/ishita-verma-539506172/",
   
  },
];

const Walmart = (props) => {
  const placementList = Placements.map((placements) => (
    <PlacementsItem
      key={placements.id}
      img={placements.imageUrl}
      name={placements.name}
      company={placements.company}
      batch={placements.batch}
      package={placements.package}
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
export default Walmart;
