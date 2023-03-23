import { Outlet } from "react-router-dom";
const CharactersLayout = () => {
  return (
    <div className=" px-12">
      <div className="flex">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CharactersLayout;
