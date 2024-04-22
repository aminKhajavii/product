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
      { id: 1, name: "#7F1D1D" },
      { id: 2, name: "#713F12" },
      { id: 3, name: "#064E3B" },
      { id: 3, name: "#312E81" },
    ],
  },
  {
    id: 2,
    img: image2,
    title: "tailored stretch",
    sub: "turn it up pants",
    price: "120",
    colors: [
      { id: 1, name: "#831843" },
      { id: 2, name: "#16A34A" },
      { id: 3, name: "#84CC16" },
      { id: 4, name: "#F59E0B" },
    ],
  },
  {
    id: 3,
    img: image3,
    title: "tailored stretch",
    sub: "turn it up pants",
    price: "220",
    colors: [
      { id: 1, name: "#F87171" },
      { id: 2, name: "#047857" },
      { id: 3, name: "#2563EB" },
      { id: 4, name: "r#2563EB" },
    ],
  },
];
const Sellers = () => {
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
              <MdFavorite className={`absolute  top-5 right-5 `} />
            </div>
            <div className="px-2">
              <h6 className="">{item.title}</h6>
              <div className="flex justify-between ">
                <span className="text-fontItem font-thin">{item.sub}</span>
                <span className="font-bold">${item.price}</span>
              </div>
              <div className="flex gap-1 ">
                {item.colors.map((color, index) => (
                  <div key={index}>
                    <div
                      style={{ backgroundColor: color.name }}
                      className={`bg-${color.name} rounded-full w-5 h-5`}
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
