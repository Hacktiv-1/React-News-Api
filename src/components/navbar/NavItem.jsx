import { NavLink } from "react-router-dom";

function NavItem({ style }) {
  const navItems = [
    { path: "/", title: "Indonesia" },
    { path: "/programming", title: "Programming" },
    { path: "/covid", title: "Covid 19" },
    { path: "/bookmark", title: "Bookmark" },
  ];
  return (
    <>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "p-2 text-white rounded-md bg-slate-800 font-bold block"
              : "p-2 text-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition duration-500 block font-semibold"
          }
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
}

export default NavItem;
