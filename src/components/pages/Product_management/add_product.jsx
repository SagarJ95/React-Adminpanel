import React from "react";
import { NavLink } from "react-router";
function Add_product() {
    return(
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Add Product</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                    <NavLink to="/product_master" className="text-muted text-hover-primary">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Add Product</li>
                </ul>
            </div>

            </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
            <div id="kt_app_content_container" className="app-container container-fluid">

            <div className="card card-flush">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Name</label>
                        <input type="text" className="form-control" name="product_name" id="product_name" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Category</label>
                        <select className="form-control" >
                            <option value="">Choose Category</option>
                            </select>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Country</label>
                         <select className="form-control" >
                            <option value="">Choose Country</option>
                            </select>
                    </div>
                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Thumbnail</label>
                       <input type="file" className="form-control" name="product_name" id="product_name" />
                    </div>
                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Upload Product Images</label>
                        <input type="file" className="form-control" name="product_name" id="product_name" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Minimum Order Quantity:</label>
                        <input type="text" className="form-control" name="minimum_order_quantity" id="minimum_order_quantity" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Maximum Order Quantity:</label>
                        <input type="text" className="form-control" name="maximum_order_quantity" id="maximum_order_quantity" />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Price:</label>
                        <input type="text" className="form-control" name="product_price" id="product_price" />
                    </div>
                     <div className="col-md-12 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Description:</label>
                        <textarea className="form-control" name="product_desc" id="product_desc" />
                    </div>

                </div>
                <div className="col-md-12 text-end">
                    <NavLink to='/product_master' className="btn btn-sm btn-primary" style={{marginRight:"10px"}}>Back</NavLink>
                    <button type="button" className="btn btn-sm btn-primary" id="filter">Submit</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Add_product