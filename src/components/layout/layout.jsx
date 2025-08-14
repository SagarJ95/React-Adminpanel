// layout.jsx
import {useEffect} from 'react'
import Headers from "./header";
import Footer from "./footer";
import Siderbar from "./sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  useEffect(() => {
    if (window.KTDrawer) window.KTDrawer.createInstances();
    if (window.KTMenu) window.KTMenu.createInstances();
    if (window.KTToggle) window.KTToggle.createInstances();

    // ScrollTop Initialization
    if (window.KTScrolltop) {
      window.KTScrolltop.createInstances();
    }
  }, []);


  return (
    <>
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        <Headers />
        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
          <Siderbar />
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              <Outlet/>
              <Footer />
          </div>
        </div>
      </div>
    </div>
		<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
      <i className="ki-duotone ki-arrow-up">
        <span className="path1" />
        <span className="path2" />
      </i>
    </div>
    </>
  );
};

export default Layout;
