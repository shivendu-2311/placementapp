import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/Konark.ico",
    name: "Konark Anand",
    company: "Loople",
    batch: "2018-2022",
    package:"₹35 Lakhs",
    URL: "https://www.linkedin.com/in/konark-anand-b42738192/",
   
  },
];

const Loople = (props) => {
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
export default Loople;
