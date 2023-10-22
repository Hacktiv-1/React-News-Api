import { Link } from "react-router-dom";

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
        <Link key={index} to={item.path} className={style}>
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default NavItem;
