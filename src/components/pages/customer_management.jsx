import React from 'react'
import { NavLink } from 'react-router'

function Customer_management(){
    return(
        <>
  <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
    <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
      <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
          Customer Management</h1>
        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
          <li className="breadcrumb-item text-muted">
            <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
          </li>
          <li className="breadcrumb-item">
            <span className="bullet bg-gray-500 w-5px h-2px" />
          </li>
          <li className="breadcrumb-item text-muted">Customer Management</li>
        </ul>
      </div>
      <div className="d-flex align-items-center gap-2 gap-lg-3">
        <NavLink to="/add_customer" className="btn btn-sm fw-bold btn-primary">Add Customer</NavLink>
    </div>

    </div>
  </div>
  <div id="kt_app_content" className="app-content flex-column-fluid">
    <div id="kt_app_content_container" className="app-container container-fluid">

      <div className="card card-flush">
        <div className="card-body">
          <table className="table table-rounded border align-middle w-100" id="category_table">
            <thead className="bg-light-secondary text-uppercase">
              <tr className="fw-semibold fs-7 text-gray-700 border-bottom border-gray-200">
                <th hidden className>Id</th>
                <th className>Name</th>
                <th className>Contact No</th>
                <th className>Total Orders</th>
                <th className>Last Order date</th>
                <th className>Total Revenue</th>
                <th className>Visibility</th>
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

export default Customer_management