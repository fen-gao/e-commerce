import { Link } from "react-router-dom";
import useMenu from "../../hooks/use-menu";

const MenuList = () => {
  const { menu } = useMenu();

  return (
    <ul className="w-full flex flex-row gap-6 px-20 mx-auto">
      {menu.map((item, index) => (
        <li key={index} className=" text-white hover:text-gray-300">
          <Link to={item.route} className="flex flex-row items-center gap-2">
            {item.label}
            {item.icon && <span>{item.icon}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
