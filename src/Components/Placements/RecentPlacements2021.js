
import React from "react";
import Card from "../UI/Card";
import Classes from "./RecentPlacements2021.module.css";
import PlacementsItems from "../Placements/PlacementsItem/PlacementsItem";
const Placements = [
  {
    id: "e1",
    imageUrl:"./image/Konark.ico",
    name: "Konark Anand",
    company: "Loople",
    package:"₹35 Lakhs",
    batch: "2018-2022",
    URL: "https://www.linkedin.com/in/konark-anand-b42738192/",
   
  },
  {
    id: "e1",
    imageUrl:"./image/Maitree.ico",
    name: "Maitree Rawat",
    company: "Google",
    package:"₹54.44 Lakhs",
    batch: "2016-2020",
  
    URL: "https://www.linkedin.com/in/maitreerawat/",
   
  },
  {
    id: "e1",
    imageUrl:"./image/DeepakRautela.ico",
    name: "Deepak Rautela",
    company: "Mircosoft",
    package:"₹40.37 Lakhs",
    batch: "Batch -2017-2021",
    URL: "https://www.linkedin.com/in/deepaksingh5219/",
   },


];

const RecentsPlacements2021 = (props) => {
  const placementList = Placements.map((placements) => (
    <PlacementsItems
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
    <Card className="Classes.placement">
      <ul>
      {placementList}
    </ul>
    </Card>
  );
};
export default RecentsPlacements2021;
