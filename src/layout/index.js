import { Outlet } from "react-router-dom";
import { NavBar, Footer, Breadcrumb } from "../components";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto px-5 transition-all duration-700 dark:bg-bodyColor dark:text-white">
      <header className="mb-5 flex items-center justify-between">
        <NavBar />
      </header>
      <main className=" flex flex-col flex-1 ">
        <Breadcrumb />
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
