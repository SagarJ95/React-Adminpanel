import React from "react";
const Footer = () => {
    return (
        <>

     <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="text-gray-900 order-2 order-md-1">
            <span className="text-muted fw-semibold me-1">
                <span id="currentYear" />
                ©
            </span>
            </div>
            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
            <li className="menu-item">
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="menu-link px-2" />
            </li>
            </ul>
        </div>
        </div>

        </>
    )
}

export default Footer