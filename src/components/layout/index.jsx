import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return <Fragment>
    <Header/>
    <main className="bg-">
      <Outlet/>
    </main>
    <Footer/>
  </Fragment>;
};

export default Layout;
