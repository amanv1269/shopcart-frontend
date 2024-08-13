import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarouse from "../components/HomeSectionCarousel/HomeSectionCarouse";
import { WomensKurti } from "../components/data/WomensKurti";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarouse data={WomensKurti} sectionName={"Women kurti"} />
        <HomeSectionCarouse data={WomensKurti} sectionName={"Women dress"} />
        <HomeSectionCarouse data={WomensKurti} sectionName={"Women shoes"} />
        <HomeSectionCarouse data={WomensKurti} sectionName={"Women clothes"} />
        <HomeSectionCarouse data={WomensKurti} sectionName={"Women fashion"} />
      </div>
    </div>
  );
};

export default HomePage;
