import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Outlet />
      {/* Footer component */}
    </>
  );
};

export default PageLayout;
