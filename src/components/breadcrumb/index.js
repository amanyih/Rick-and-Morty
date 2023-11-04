import { useLocation, Link } from "react-router-dom";
const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter((p) => p !== "");
  let links = "";

  return (
    <div className="mb-10 ml-10 ">
      {path.map((link) => {
        links = links + "/" + link;
        return (
          <span className="text-5xl font-bold text-lightBlue dark:text-lightGreen">
            <span className="mr-2">/</span>
            <Link
              className="text-4xl hover:text-lightGreen mr-2"
              key={links}
              to={links}
            >
              {link}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
