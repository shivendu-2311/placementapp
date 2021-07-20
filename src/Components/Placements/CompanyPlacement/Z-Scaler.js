import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/Ajay.ico",
    name: "Ajay Raj Singh",
    company: "Z-Scaler",
    package:"₹17 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/ajay-raj-singh-632a821b4/",
   
  },

  {
    id: "e1",
    imageUrl:"./image/Deepak.ico",
    name: "Deepak Singh ",
    company: "Z-Scaler",
    package:"₹17 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/deepak-singh-940ab71b4/",
  },

  {
    id: "e1",
    imageUrl:"./image/Bro.ico",
    name: "Mukesh Singh Bisht",
    company: " Z-Scaler",
    package:"₹17 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/mukesh-singh-bisht-486800148/",
  },
  {
    id: "e1",
    imageUrl:"./image/Akash.ico",
    name: "Akash Mamgain",
    company: " Z-Scaler",
    package:"₹14 Lakhs",
    batch: "2017-2021",
    URL: "  https://www.linkedin.com/in/akash-mamgain/",
  },
  {
    id: "e1",
    imageUrl:"./image/Sudipt.ico",
    name: "Sudipt Dabral ",
    company: " Z-Scaler",
    package:"₹14 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/sudipt-dabral-15b516165/",
  },
  {
    id: "e1",
    imageUrl:"./image/Gaurav.ico",
    name: "Gaurav Karki",
    company: " Z-Scaler",
    package:"₹14 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/gaurav-karki-219620160/",
  },


];

const ZScaler = (props) => {
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
export default ZScaler;
