import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const NavStyle = ({ isActive }) => {
    let className = "font-bold  ";

    if (isActive) {
      className = className + "text-lightBlue dark:text-lightGreen";
    } else {
      className = className + "hover:text-lightGreen dark:hover:text-lightBlue";
    }

    return className;
  };
  return (
    <li className="mx-4 my-6 md:my-0 cursor-pointer" onClick={props.onClick}>
      <NavLink to={props.to} className={NavStyle}>
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavItem;
