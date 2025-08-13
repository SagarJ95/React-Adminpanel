// layout.jsx
import Headers from "./header";
import Footer from "./footer";
import Siderbar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
        <Headers />
        <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
          <Siderbar />
          <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
            <div className="d-flex flex-column flex-column-fluid">
              {children} {/* This replaces your <body tag/> */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
