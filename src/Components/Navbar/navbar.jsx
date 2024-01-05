import Logo from "../../assets/images/navbar/Header/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePerson4 } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";

const ulItem = [
  { id: 1, title: "Collection" },
  { id: 2, title: "New In" },
  { id: 3, title: "Modiweek" },
  { id: 4, title: "Plus Size" },
  { id: 5, title: "Sustainability" },
];
const ulIcon = [
  { id: 1, icon: <IoMdSearch /> },
  { id: 2, icon: <MdOutlinePerson4 /> },
  { id: 3, icon: <MdOutlineFavoriteBorder /> },
  { id: 4, icon: <AiOutlineShopping /> },
];
const Navbar = () => {
  return (
    <div className="mb-3">
      <div className="bg-primary w-auto text-center text-white font-bold mb-4">
        <span>zeroOne</span>
      </div>
      <div className="container flex justify-between items-center m-auto">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="flex items-center gap-12">
            {ulItem.map((item) => (
              <li
                className="font-thin text-fontItem hover:text-primary"
                key={item.id}
              >
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            {ulIcon.map((item) => (
              <li
                className="font-bold text-2xl hover:text-primary"
                key={item.id}
              >
                <a href="#">{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
