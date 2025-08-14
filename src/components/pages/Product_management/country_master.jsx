import React from "react";
import { NavLink } from "react-router";
function Country_master(){
    return(
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Country master</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                    <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Country master</li>
                </ul>
            </div>

            </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">
             <div className="card card-flush mb-3 filter_card">
            <div className="card-body">
                <form id="filterForm" className="form fv-plugins-bootstrap5 fv-plugins-framework">
                <div className="row">
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Country Name</label>
                        <input type="text" className="form-control" name="country_name" id="country_name" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Country Code</label>
                        <input type="text" className="form-control" name="country_code" id="country_code" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Country Flag</label>
                        <input type="file" className="form-control" name="uploadCategories" id="uploadCategories" />
                    </div>
                </div>
                <div className="col-md-12 text-end">
                    <button type="button" className="btn btn-sm btn-primary" id="filter">Submit</button>
                </div>
                </form>
            </div>
            </div>
            <div className="card card-flush">
                <div className="card-body">
                <table className="table table-rounded border align-middle w-100" id="category_table">
                    <thead className="bg-light-secondary text-uppercase">
                    <tr className="fw-semibold fs-7 text-gray-700 border-bottom border-gray-200">
                        <th hidden className="">Id</th>
                        <th className="">Sr.No</th>
                        <th className="">Country Name</th>
                        <th className="">Country Code</th>
                        <th className="">Visibility</th>
                        <th className="text-center">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}

export default Country_master