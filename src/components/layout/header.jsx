import React from "react";


const Headers = () => {
    return(
        <>
       <div id="kt_app_header" className="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}" data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}" data-kt-sticky-animation="false">
        <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
            <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
            <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                <i className="ki-duotone ki-abstract-14 fs-2 fs-md-1">
                <span className="path1" />
                <span className="path2" />
                </i>
            </div>
            </div>
            <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <a href="/admin/dashboard" className="d-lg-none">
                <img alt="Logo" src="/media/logos/default-small.svg" className="h-30px" />
            </a>
            </div>
            <div className="d-flex align-items-stretch justify-content-end flex-lg-grow-1" id="kt_app_header_wrapper">
            <div className="app-navbar flex-shrink-0">
                <div className="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
                <div className="cursor-pointer symbol symbol-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <img src="/media/avatars/300-3.jpg" className="rounded-3" alt="user" />
                </div>
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                    <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                        <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="/media/avatars/300-3.jpg" />
                        </div>
                        <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                            test
                        </div>
                        <p href="#" className="fw-semibold text-muted text-hover-primary fs-7">test@gmail.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="menu-item px-5">
                    <a href="/admin/sign-out" className="menu-link px-5">Sign Out</a>
                    </div>
                </div>
                </div>
                <div className="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
                <div className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
                    <i className="ki-duotone ki-element-4 fs-1">
                    <span className="path1" />
                    <span className="path2" />
                    </i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>


    </>
    )
}

export default Headers;