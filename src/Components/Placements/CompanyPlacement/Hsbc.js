import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/1619406349251.ico",
    name: "Agrima Dabral",
    company: "HSBC",
    batch: "2017-2021",
    package:"₹7 Lakhs",
    URL: "https://www.linkedin.com/in/agrima-dabral-3a5005169//",
   
  },

  {
    id: "e1",
    imageUrl:"./image/Screenshot (109).ico",
    name: "Drishya Uniyal ",
    company: "HSBC",
    batch: "2017-2021",
    package:"₹7 Lakhs",
    URL: "https://www.linkedin.com/in/drishya-uniyal-961685166/",
  },

  {
    id: "e1",
    imageUrl:"./image/Kaunuska.ico",
    name: "Kanushka Gupta",
    company: "HSBC",
    batch: "2017-2021",
    package:"₹7 Lakhs",
    URL: "https://www.linkedin.com/in/kanushka-gupta/",
  },
  {
    id: "e1",
    imageUrl:"./image/Tejaswiny.ico",
    name: "Tejaswiny singh ",
    company: "HSBC",
    batch: "2017-2021",
    package:"₹7 Lakhs",
    URL: "https://www.linkedin.com/in/tejaswiny-singh-9125581a1/",
  },


];

const Hsbc = (props) => {
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
export default Hsbc;
