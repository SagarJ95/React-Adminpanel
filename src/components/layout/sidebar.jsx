import React from "react";
import { NavLink } from "react-router-dom";
const Siderbar = () => {
    return (
        <>
          {/*begin::Sidebar*/}
          <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
            {/*begin::Logo*/}
            <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
              {/*begin::Logo image*/}
              <NavLink to="/">
                <img alt="Logo" src="assets/media/logos/default-dark.svg" className="h-25px app-sidebar-logo-default" />
                <img alt="Logo" src="assets/media/logos/default-small.svg" className="h-20px app-sidebar-logo-minimize" />
              </NavLink>
              <div id="kt_app_sidebar_toggle" className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary h-30px w-30px position-absolute top-50 start-100 translate-middle rotate" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="app-sidebar-minimize">
                <i className="ki-duotone ki-black-left-line fs-3 rotate-180">
                  <span className="path1" />
                  <span className="path2" />
                </i>
              </div>
              {/*end::Sidebar toggle*/}
            </div>
            {/*end::Logo*/}
            {/*begin::sidebar menu*/}
            <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
              {/*begin::Menu wrapper*/}
              <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                {/*begin::Scroll wrapper*/}
                <div id="kt_app_sidebar_menu_scroll" className="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                  {/*begin::Menu*/}
                  <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">

                    <div className="menu-item">
                      <NavLink className={({ isActive }) => isActive ? 'menu-link custom_active' : 'menu-link'} to="/">
                        <span className="menu-icon">
                          <i className="fa-solid fa-chart-line fs-2" />
                        </span>
                        <span className="menu-title">Dashboard</span>
                      </NavLink>
                    </div>
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                      {/*begin:Menu link*/}
                      <NavLink className={({ isActive }) => isActive ? 'menu-link custom_active' : 'menu-link'} to="/order_management">
                          <span className="menu-icon">
                            <i className="ki-duotone ki-element-11 fs-2">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </span>
                          <span className="menu-title">Order Management</span>
                        </NavLink>
                      {/*end:Menu link*/}
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
                          <NavLink className="menu-link" to="/categories_master">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Category Master</span>
                          </NavLink>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <NavLink className="menu-link" to="/product_master">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Product Master</span>
                          </NavLink>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <NavLink className="menu-link" to="/change_price">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Change Price</span>
                          </NavLink>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                          {/*begin:Menu link*/}
                          <NavLink className="menu-link" to="/country_master">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot" />
                            </span>
                            <span className="menu-title">Country_master</span>
                          </NavLink>
                          {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}


                      </div>
                      {/*end:Menu sub*/}
                    </div>
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                      {/*begin:Menu link*/}
                      <NavLink className={({ isActive }) => isActive ? 'menu-link custom_active' : 'menu-link'} to="/customer_management">
                        <span className="menu-icon">
                          <i className="ki-duotone ki-element-11 fs-2">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                          </i>
                        </span>
                        <span className="menu-title">Customer Management</span>
                      </NavLink>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    {/*end:Menu item*/}
                  </div>
                  {/*end::Menu*/}
                </div>
                {/*end::Scroll wrapper*/}
              </div>
              {/*end::Menu wrapper*/}
            </div>
            {/*end::sidebar menu*/}
            {/*begin::Footer*/}
            {/*end::Footer*/}
          </div>
          {/*end::Sidebar*/}
        </>
    )
}

export default Siderbar