import React from "react";
import { NavLink } from "react-router";
function Product_master(){
    return(
        <>
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Product master</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                    <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Product master</li>
                </ul>
            </div>
            <div className="d-flex align-items-center gap-2 gap-lg-3">
                <NavLink to="/add_product" className="btn btn-sm fw-bold btn-primary">Add Product</NavLink>
            </div>

            </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">

            <div className="card card-flush">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <select className="form-control" style={{marginRight:"10px"}}>
                            <option value="">Choose Category</option>
                            </select>
                            <select className="form-control" >
                            <option value="">Choose Country</option>
                            </select>
                        </div>

                        <div className="col-md-6 d-flex justify-content-end">
                            <button className="btn btn-sm fw-bold btn-success" style={{marginRight:"10px"}}>Export File</button>
                            </div>
                    </div>


                <table className="mt-5 table table-rounded border align-middle w-100" id="category_table">
                    <thead className="bg-light-secondary text-uppercase">
                    <tr className="fw-semibold fs-7 text-gray-700 border-bottom border-gray-200">
                        <th hidden className="">Id</th>
                        <th className="">Sr.No</th>
                        <th className="">Product Name</th>
                        <th className="">Category</th>
                        <th className="">Current Price</th>
                        <th className="">No of Product</th>
                        <th className="">Last Price Updated</th>
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

export default Product_master