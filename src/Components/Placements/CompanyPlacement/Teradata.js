import PlacementsItem from "../PlacementsItem/PlacementsItem";
import React from "react";
import Card from "../../UI/Card";
import classes from "./Amazon.module.css";
import PlacementsItems from "../PlacementsItem/PlacementsItem";
const Placements= [
  {
    id: "e1",
    imageUrl:"./image/Dikshika.ico",
    name: "Dikshika Gupta",
    company: "Teradata",
    package:"₹10.44 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/dikshika-gupta-5b71a9193/",
   
  },

  {
    id: "e1",
    imageUrl:"./image/Aditya.ico",
    name: "Aditya Kothari ",
    company: "Teradata",
    package:"₹10.44 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/adi-kothari/",
  },

  {
    id: "e1",
    imageUrl:"./image/Vivek.ico",
    name: "Vivek Darmwal ",
    company: "Teradata",
    package:"₹10.44 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/vivek-darmwal-1357ba163/",
  },
  {
    id: "e1",
    imageUrl:"./image/Kartikay.ico",
    name: " Kartikay Sawhney",
    company: "Teradata",
    package:"₹10.44 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/kartikay-sawhney/",
  },

  {
    id: "e1",
    imageUrl:"./image/Tanmay.ico",
    name: " Tanmay Gupta",
    company: "Teradata",
    package:"₹10.44 Lakhs",
    batch: "2017-2021",
    URL: "https://www.linkedin.com/in/tanmay-gupta-862409183/",
  },

];

const Teradata = (props) => {
  const placementList = Placements.map((placements) => (
    <PlacementsItem
      key={placements.id}
      img={placements.imageUrl}
      name={placements.name}
      company={placements.company}
      package={placements.package}
      batch={placements.batch}
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
export default Teradata;
