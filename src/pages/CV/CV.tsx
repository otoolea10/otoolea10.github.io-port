import React from "react";
import CVCards from "../../components/CVCards/CVCards";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Mountains from "../../../public/assets/images/backgrounds/mountains.jpg";
const CV = () => {
  return (
    <>
      <HeroBanner heroBannerHeading="CV" heroBannerImage={Mountains} />
      <SkinnyBanner bannerHeading="Education" />
      <CVCards cvCardDataStart={0} cvCardDataEnd={3} />
      <SkinnyBanner bannerHeading="Skills" />
      <CVCards cvCardDataStart={3} cvCardDataEnd={6} />
      <SkinnyBanner bannerHeading="Misc" />
      <CVCards cvCardDataStart={6} cvCardDataEnd={9} />
    </>
  );
};
export default CV;
