import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { getproductlist } from '../../../Producer/product'
import DataTable from "react-data-table-component";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function Product_master() {
    const { list, product_status } = useSelector((state) => state.product_list)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if (product_status == 'idle') {
            dispatch(getproductlist())
        }

    }, [dispatch, product_status])

    const getProductInfo = list?.data || [];

    //Update Change status
    const updateVisibility = async (e,row) => {

        const body = {
            id : row.product_id,
            status : (e.target.checked) ? 1 : 0
        }

        try{
            const token = localStorage.getItem("admin_access_token")
            const changeStatus = await axios.post("https://keepinbasket.ortdemo.com/api/updateProductStatusById",body,{
                headers:{
                    Accept:"application/json",
                    Authorization:`Bearer ${token}`
                }
            });

            if(changeStatus.data.status){
                toast.success(changeStatus.data.message);
            }else{
                toast.error(changeStatus.data.message)
            }
        }catch(e){
            console.log("error>",e.message)
        }

    }

    //delete product
    const deleteProduct = async (row) => {

        const body = {
            id:row.product_id
        }

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        })

        if (!result.isConfirmed) return;

        try{
            const token = localStorage.getItem('admin_access_token')
            const delete_product = await axios.post("https://keepinbasket.ortdemo.com/api/deleteProductById",body,{
                headers:{
                    Accept:"application/json",
                    Authorization:`Bearer ${token}`
                }
            })

            if(delete_product.data.status){
                toast.success(delete_product.data.message)
            }else{
                toast.error(delete_product.data.message)
            }
        }catch(e){
            console.log("erroe",e)
        }
    }

    const viewProduct = (row) => {
       navigate(`/add_product/${row.product_id}/view`,{ state: row });
    }
    const editProduct = (row) => {
        navigate(`/add_product/${row.product_id}/edit`,{ state: row });
    }

    const columns = [
        { name: "Product Name", selector: row => row.product_name, sortable: true },
        { name: "Current Price", selector: row => row.current_price, sortable: true },
        { name: "Category", selector: row => row.category_name, sortable: true },
        { name: "Last Price Updated", selector: row => row.last_updated_date, sortable: true },
        {
            name: "Visiblity", cell: row => (
                <>
                    <input type="checkbox" className="form-check-input " checked={row.status===1} onChange={(e)=>updateVisibility(e,row)}/>
                </>
            )
        },
        {
            name: "Action",
            cell: row => (
                <>
                    <button title="View" className="btn btn-sm btn-outline-success me-2" onClick={(e)=>viewProduct(row)}>
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    <button title="Edit" className="btn btn-sm btn-outline-secondary me-2" onClick={(e)=>deleteProduct(row)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button title="Update" className="btn btn-sm btn-outline-secondary" onClick={(e)=>editProduct(row)}>
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