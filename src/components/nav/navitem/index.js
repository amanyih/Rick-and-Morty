import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const NavStyle = ({ isActive }) => {
    let className = "font-bold  ";

    if (isActive) {
      console.log(isActive, props.title);
      className = className + "text-lightBlue dark:text-lightGreen";
    } else {
      className = className + "hover:text-lightGreen dark:hover:text-lightBlue";
    }

    return className;
  };
  return (
    <li className="text-2xl px-8 cursor-pointer ">
      <NavLink to={props.to} className={NavStyle}>
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavItem;
