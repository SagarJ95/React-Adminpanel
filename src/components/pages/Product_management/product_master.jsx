import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { getproductlist } from '../../../Producer/product'
import DataTable from "react-data-table-component";


function Product_master() {
    const { list, product_status } = useSelector((state) => state.product_list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (product_status == 'idle') {
            dispatch(getproductlist())
        }

    }, [dispatch, product_status])

    const getProductInfo = list?.data || [];

    const columns = [
        { name: "Product Name", selector: row => row.product_name, sortable: true },
        { name: "Current Price", selector: row => row.current_price, sortable: true },
        { name: "Category", selector: row => row.category_name, sortable: true },
        { name: "Last Price Updated", selector: row => row.last_updated_date, sortable: true },
        {
            name: "Visiblity", cell: row => (
                <>
                    <input type="checkbox" className="form-check-input " />
                </>
            )
        },
        {
            name: "Action",
            cell: row => (
                <>
                    <button title="View" className="btn btn-sm btn-outline-success me-2">
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    <button title="Edit" className="btn btn-sm btn-outline-secondary me-2">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button title="Update" className="btn btn-sm btn-outline-secondary">
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                </>
            )
        }
    ]
    return (
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
                                    <select className="form-control" style={{ marginRight: "10px" }}>
                                        <option value="">Choose Category</option>
                                    </select>
                                    <select className="form-control" >
                                        <option value="">Choose Country</option>
                                    </select>
                                </div>

                                <div className="col-md-6 d-flex justify-content-end">
                                    <button className="btn btn-sm fw-bold btn-success" style={{ marginRight: "10px" }}>Export File</button>
                                </div>
                            </div>


                            <DataTable
                                columns={columns}
                                data={getProductInfo}
                                pagination
                                highlightOnHover
                                striped
                                responsive
                                noDataComponent="No records found"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product_master