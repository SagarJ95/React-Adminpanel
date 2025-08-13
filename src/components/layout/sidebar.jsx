import React from "react";
const Siderbar = () => {
    return (
        <>
  <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
  <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
    <a href="/admin/dashboard">
      <img alt="Logo" src="/media/logos/ft_logo.png" className="h-35px app-sidebar-logo-default" />
      <img alt="Logo" src="/media/logos/favicon.png" className="h-20px app-sidebar-logo-minimize" />
    </a>
    <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate active" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
      <i className="ki-duotone ki-black-left-line fs-3 rotate-180">
        <span className="path1" />
        <span className="path2" />
      </i>
    </div>
  </div>
  <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
    <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
      <div id="kt_app_sidebar_menu_scroll" className="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
        <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
          <div className="menu-item">
            <a className="menu-link" href="/admin/dashboard">
              <span className="menu-icon">
                <i className="fa-solid fa-chart-line fs-2" />
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </div>
        <div>
          <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">

              <span className="menu-link">
                <span className="menu-icon">
                  <i className="ki-duotone ki-element-11 fs-2">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </span>
                <span className="menu-title">Order Management</span>
              </span>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
            {/*begin:Menu link*/}
            <span className="menu-link">
              <span className="menu-icon">
                <i className="ki-duotone ki-element-11 fs-2">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </i>
              </span>
              <span className="menu-title">Product Management</span>
              <span className="menu-arrow" />
            </span>
            {/*end:Menu link*/}
            {/*begin:Menu sub*/}
            <div className="menu-sub menu-sub-accordion">
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/overview.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Overview</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/projects.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Projects</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/campaigns.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Campaigns</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/documents.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Documents</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/followers.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Followers</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
              {/*begin:Menu item*/}
              <div className="menu-item">
                {/*begin:Menu link*/}
                <a className="menu-link" href="pages/user-profile/activity.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Activity</span>
                </a>
                {/*end:Menu link*/}
              </div>
              {/*end:Menu item*/}
            </div>
            {/*end:Menu sub*/}
          </div>
        <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
          {/*begin:Menu link*/}
          <span className="menu-link">
            <span className="menu-icon">
              <i className="ki-duotone ki-element-11 fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>
            </span>
            <span className="menu-title">Customer Management</span>
          </span>
          {/*end:Menu link*/}
        </div>
        </div>

        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default Siderbar