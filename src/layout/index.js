import { Outlet } from "react-router-dom";
import { NavBar, Footer, Breadcrumb } from "../components";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto px-5 transition-all duration-700 dark:bg-bodyColor dark:text-white">
      <NavBar />

      <main className=" flex flex-col flex-1 ">
        <Breadcrumb />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
