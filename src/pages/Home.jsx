import React from "react";
import Landing from "../component/Landing";
import Highlights from "../component/Highlights";
import Featured from "../component/Featured";
import Discounted from "../component/Discounted";
import Explore from "../component/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
