import image1 from "../../assets/images/Collection/💠I UI page/Desktop/Landing/pic2image1.jpg";
import image2 from "../../assets/images/Collection/💠I UI page/Desktop/Landing/pic1image2.jpg";
import image3 from "../../assets/images/Collection/💠I UI page/Desktop/Landing/pic1image3.jpg";
import image4 from "../../assets/images/Collection/💠I UI page/Desktop/Landing/pic1image4.jpg";
const imageCollection = [
  { id: 1, img: image1 },
  { id: 2, img: image2 },
  { id: 3, img: image3 },
  { id: 4, img: image4 },
];
const Collection = () => {
  return (
    <div className="">
      <div className="mt-14 container m-auto   ">
        <h1 className="font-bold text-2xl font-sans mb-8">Collection</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-3  m-auto gap-5">
            <div className="row-span-1 relative">
              <img className="" src={image1} alt="" />
              <button className="font-thin absolute text-fontItem bottom-10 right-10 px-14 py-2 bg-white">
                Boluses
              </button>
            </div>
            <div className="row-span-2 relative">
              <img className="" src={image2} alt="" />
              <button className="font-thin absolute text-fontItem bottom-64 left-10 px-14 py-2 bg-white">
                Pants
              </button>
            </div>
            <div className="row-span-2 mt-[8.5rem] relative">
              <img className="" src={image3} alt="" />
              <button className="font-thin absolute text-fontItem bottom-32 right-10 px-14 py-2 bg-white">
                Dresses
              </button>
            </div>
            <div className="row-span-1  relative">
              <img className="" src={image4} alt="" />
              <button className="font-thin absolute text-fontItem bottom-32 right-10 px-14 py-2 bg-white">
                Outwear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
