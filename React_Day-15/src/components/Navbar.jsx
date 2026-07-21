import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        <h1 className="text-3xl font-bold text-indigo-600">
          MyStore
        </h1>

        <ul className="flex items-center gap-10 text-[16px] font-medium text-gray-700">
          <li className="cursor-pointer transition hover:text-indigo-600">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="cursor-pointer transition hover:text-indigo-600">
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li className="cursor-pointer transition hover:text-indigo-600">
            <NavLink to={"/service"}>Services</NavLink>
          </li>
          <li className="cursor-pointer transition hover:text-indigo-600">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="cursor-pointer transition hover:text-indigo-600">
            <NavLink to={"/cart/:"}>Cart</NavLink>
          </li>
        </ul>

        <button className="rounded-lg bg-indigo-600 px-6 py-2.5 text-white transition hover:bg-indigo-700">
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar