import Sellers from "../../Components/Best-Sellers/sellers";
import Collection from "../../Components/Collection/collection";
import Navbar from "../../Components/Navbar/navbar";
import Sliders from "../../Components/Slider/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Sliders />
      <Sellers />
      <Collection />
    </>
  );
};

export default Home;
