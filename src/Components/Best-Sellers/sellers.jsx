import { useState } from "react";
import image1 from "../../assets/images/sellers/image1.png";
import image2 from "../../assets/images/sellers/image2.png";
import image3 from "../../assets/images/sellers/image3.png";
import { MdFavorite } from "react-icons/md";

const dataSellers = [
  {
    id: 1,
    img: image1,
    title: "tailored stretch",
    sub: "turn it up pants",
    price: "180",
    colors: [
      { id: 1, name: "bg-green-800" },
      { id: 2, name: "bg-blue-900" },
      { id: 3, name: "bg-red-900" },
    ],
  },
  {
    id: 2,
    img: image2,
    title: "tailored stretch",
    sub: "turn it up pants",
    price: "120",
    colors: [
      { id: 1, name: "bg-gray-800" },
      { id: 2, name: "bg-red-900" },
      { id: 3, name: "bg-yellow-600" },
    ],
  },
  {
    id: 3,
    img: image3,
    title: "tailored stretch",
    sub: "turn it up pants",
    price: "220",
    colors: [
      { id: 1, name: "bg-gray-800" },
      { id: 2, name: "bg-green-800" },
      { id: 3, name: "bg-red-900" },
    ],
  },
];
const Sellers = () => {
  const [iconColor, setIconColor] = useState(false);
  return (
    <div className="container m-auto">
      <div className="flex items-center justify-between mb-5 ">
        <h2 className="font-bold text-2xl font-sans ">Best Sellers</h2>
        <span className="text-fontItem font-thin">view all</span>
      </div>
      <div className="flex justify-between gap-5 ">
        {dataSellers.map((item) => (
          <div className="" key={item.id}>
            <div className="relative">
              <img src={item.img} alt="" />
              <MdFavorite
                className={`absolute  top-5 right-5 ${
                  iconColor ? "text-red-600" : "text-white"
                } `}
                onClick={() => setIconColor((prevColor) => !prevColor)}
              />
            </div>
            <div className="px-2">
              <h6 className="">{item.title}</h6>
              <div className="flex justify-between ">
                <span className="text-fontItem font-thin">{item.sub}</span>
                <span className="font-bold">${item.price}</span>
              </div>
              <div className="flex gap-1 ">
                {item.colors.map((color) => (
                  <div key={color.id}>
                    <div
                      className={` ${
                        color.name === "bg-gray-800"
                          ? "bg-gray-800 rounded-full w-5 h-5"
                          : "hidden"
                      } `}
                    ></div>
                    <div
                      className={` ${
                        color.name === "bg-yellow-600"
                          ? "bg-yellow-600 rounded-full w-5 h-5"
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`  ${
                        color.name === "bg-blue-900"
                          ? "bg-blue-900 rounded-full w-5 h-5"
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`  ${
                        color.name === "bg-red-900"
                          ? "bg-red-900 rounded-full w-5 h-5"
                          : "hidden"
                      }`}
                    ></div>
                    <div
                      className={`  ${
                        color.name === "bg-green-800"
                          ? "bg-green-800 rounded-full w-5 h-5"
                          : "hidden"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
