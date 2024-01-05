import image1 from "../../assets/images/navbar/💠I UI page/Desktop/Landing/slider1.webp";
import image2 from "../../assets/images/navbar/💠I UI page/Desktop/Landing/slider2.avif";
import image4 from "../../assets/images/navbar/💠I UI page/Desktop/Landing/hero.png";

const imageSlider = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 4, img: image4 },
];
import Slider from "react-slick";
const Sliders = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    pauseOnHover: false,
    pauseOnfocus: true,
    cssEase: "ease-in-out",
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-16 ">
      <Slider {...settings}>
        {imageSlider.map((item) => (
          <div key={item.id} className="w-auto relative ">
            <img
              className=" w-screen h-[80vh]  object-cover"
              src={item.img}
              alt=""
            />
            <div>
              <p
                className="absolute text-2xl leading-loose w-72 left-40 bottom-44
              bg-gradient-to-tr from-yellow-300  animate-pulse z-10 to-yellow-600  bg-clip-text  font-black uppercase text-transparent
              "
              >
                Elegance in simplicity, Earth’s harmony
              </p>
              <button className="font-thin absolute text-fontItem bottom-32 left-32 px-14 py-2 bg-white">
                New In
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
