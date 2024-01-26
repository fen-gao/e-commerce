import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import { CaretDown, ShoppingCart, User } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <nav className="h-[75px] flex justify-center items-center">
      <div className="container flex flex-row justify-between items-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ul className="flex flex-row gap-16">
          <li className="flex flex-row items-center gap-2">
            <Link to="/discovery">Discovery</Link>
            <CaretDown size={20} />
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <div className="flex flex-row gap-4">
          <button>
            <User size={20} />
          </button>
          <button>
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
