import React from "react";
import {NavLink} from 'react-router-dom'
function Change_price(){
    return(
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Change Price</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                    <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Change Price</li>
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
                    <div className="col-md-12 mb-3 fv-row fv-plugins-icon-container">
                    <label className="fw-semibold mb-2">Upload PriceSheet</label>
                    <input type="file" className="form-control" name="uploadFile" id="uploadFile" />
                    <a className="mt-5" href="#">Download Sample sheet</a>
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
                    <div className="row">
                        <div className="col-lg-6">
                            <select className="form-control" style={{marginRight:"10px"}}>
                                <option value="">choose Category</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <select className="form-control" >
                                <option value="">choose country</option>
                            </select>
                        </div>
                    </div>
                    <table className="mt-5 table table-rounded border align-middle w-100" id="category_table">
                        <thead className="bg-light-secondary text-uppercase">
                        <tr className="fw-semibold fs-7 text-gray-700 border-bottom border-gray-200">
                            <th hidden className="">Id</th>
                            <th className="">Sr.No</th>
                            <th className="">Product Name</th>
                            <th className="">Product Category</th>
                            <th className="">Country</th>
                            <th className="">Last updated</th>
                            <th className="">Pervious Price</th>
                            <th className="">Current Price</th>
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

export default Change_price