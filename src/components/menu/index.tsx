import { Link } from "react-router-dom";
import useMenu from "../../hooks/use-menu";

export const MenuList = () => {
  const { menu } = useMenu();

  return (
    <ul className="container w-full h-full flex flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mx-auto flex-wrap justify-between">
      <div className="flex flex-row gap-4 flex-wrap">
        {menu.map((item, index) => (
          <li key={index} className=" text-white hover:text-gray-300">
            <Link to={item.route} className="flex flex-row items-center gap-2">
              {item.label}
              {item.icon && <span>{item.icon}</span>}
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
};
