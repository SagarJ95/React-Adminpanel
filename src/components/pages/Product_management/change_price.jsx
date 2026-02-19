import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changePriceList } from '../../../Producer/change_price'
import DataTable from "react-data-table-component";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

function Change_price() {
    const { list, changeprice_status } = useSelector((state) => state.change_price_list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (changeprice_status == 'idle') {
            dispatch(changePriceList())
        }
    }, [dispatch, changeprice_status])

    const [prices, setPrice] = useState({})
    const handlePrice = (e, row) => {
        setPrice({ ...prices, [row.id]: e.target.value })
    }

    const submitPrice = async (row) => {
        const current_price = prices[row.id] ?? row.current_price;

        const body = {
            product_id: row.id,
            price: current_price
        }

        try {
            const token = localStorage.getItem("admin_access_token");

            const ChangePrice = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/changeProductPrice`,
                body,
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (ChangePrice.data.status) {
                toast.success(ChangePrice.data.message);
            } else {
                toast.error(ChangePrice.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    }

    const getchangepricelist = list?.data || [];

    const columns = [
        { name: "Product Name", selector: row => row.product_name, sortable: true },
        { name: "Product Category", selector: row => row.category_name, sortable: true },
        { name: "Country", cell: row => (<><img src={row.country_flag} /> &nbsp;&nbsp;&nbsp;{row.country_name}</>) },
        { name: "Last Updated", selector: row => row.price_update_date, sortable: true },
        { name: "Previous Price", selector: row => row.previous_price, sortable: true },
        {
            name: "Current Price", cell: row => (
                <>
                    <input type="text" className="form-control" name="current_price" value={prices[row.id] ?? row.current_price} onChange={(e) => handlePrice(e, row)} />
                </>
            )
        },
        {
            name: "Action",
            cell: row => (
                <>
                    <button title="Update" className="btn btn-sm btn-outline-secondary" onClick={() => submitPrice(row)}>
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

                    <div className="card card-flush ">
                        <div className="card-body">
                            <div className="row mb-5">
                                <div className="col-lg-6">
                                    <select className="form-control" style={{ marginRight: "10px" }}>
                                        <option value="">choose Category</option>
                                    </select>
                                </div>
                                <div className="col-lg-6">
                                    <select className="form-control" >
                                        <option value="">choose country</option>
                                    </select>
                                </div>
                            </div>
                            <DataTable
                                columns={columns}
                                data={getchangepricelist}
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

export default Change_price