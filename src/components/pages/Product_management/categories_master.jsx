import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { categorylist } from '../../../Producer/category'
import DataTable from 'react-data-table-component'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Categories_master() {
    const { list, category_status } = useSelector((state) => state.category_list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (category_status == 'idle') {
            dispatch(categorylist())
        }
    }, [dispatch, category_status])

    const catgoryList = list.data;

    const columns = [
        { name: 'Category_name', selector: row => row.category_name, sortable: true },
        { name: 'Category_description', selector: row => row.description, sortable: true },
        { name: "No of Product", selector: row => row.no_of_products, sortable: true },
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

    const [fromData,setfromData] = useState({
        name:"",
        description:""
    })

    const handleOnchange = (e) => {
        setfromData({...fromData,[e.target.name]:e.target.value})
    }


    const addCategorysubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('admin_access_token');

        const body = {
            category_name : fromData.name,
            description: fromData.description
        }

        const storeCategory = await axios.post("https://keepinbasket.ortdemo.com/api/createCategory",body,{
            headers:{
                Accept:"application/json",
                Authorization:`Bearer ${token}`
            }
        })


        if(storeCategory.data.status == true){
             $("#kt_modal_add_customer").modal("hide");
            toast.success(`✅ ${storeCategory.data.message}`);
        }else{
            toast.error(`✅ ${storeCategory.data.message}!`)
        }
    }

    return (
        <>

            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                            Category master</h1>
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            <li className="breadcrumb-item text-muted">
                                <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                            </li>
                            <li className="breadcrumb-item">
                                <span className="bullet bg-gray-500 w-5px h-2px" />
                            </li>
                            <li className="breadcrumb-item text-muted">Category master</li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                        <NavLink to="/add_category" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Add Category</NavLink>
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
                                        <label className="fw-semibold mb-2">Upload Categories</label>
                                        <input type="file" className="form-control" name="uploadCategories" id="uploadCategories" />
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
                                <div className="col-md-6 d-flex">
                                </div>

                                <div className="col-md-6 d-flex justify-content-end">
                                    <button className="btn btn-sm fw-bold btn-success" style={{ marginRight: "10px" }}>Export File</button>
                                </div>
                            </div>
                            <DataTable
                                columns={columns}
                                data={catgoryList}
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

            {/* <div className="modal fade show" id="kt_modal_add_customer" tabIndex={-1} style={{display: 'block', paddingLeft: 0}} aria-modal="true" role="dialog"> */}
            <div className="modal fade" id="kt_modal_add_customer" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                        <form className="form fv-plugins-bootstrap5 fv-plugins-framework" action="#" id="kt_modal_add_customer_form" data-kt-redirect="/metronic8/demo1/apps/customers/list.html">
                            <div className="modal-header" id="kt_modal_add_customer_header">
                                <h2 className="fw-bold">Add a Category</h2>
                                <div id="kt_modal_add_customer_close" className="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">

                                    <i className="ki-duotone ki-cross fs-1"><span className="path1" /><span className="path2" /></i>                  </div>
                            </div>
                            <div className="modal-body py-10 px-lg-17">
                                <div className="fv-row mb-7 fv-plugins-icon-container">
                                    <label className="required fs-6 fw-semibold mb-2">Name</label>
                                    <input type="text" className="form-control form-control-solid" placeholder="" name="name"  onChange={(e)=>handleOnchange(e)}/>

                                    <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" /></div>

                                <div className="fv-row ">
                                    <label className="fs-6 fw-semibold mb-2">Description</label>
                                    <textarea className="form-control form-control-solid" placeholder="" name="description" onChange={(e)=>handleOnchange(e)}/>
                                </div>
                            </div>
                            <div className="modal-footer flex-center">
                                <button type="reset" id="kt_modal_add_customer_cancel" className="btn btn-light me-3" data-bs-dismiss="modal">
                                    Discard
                                </button>
                                <button type="submit" id="kt_modal_add_customer_submit" className="btn btn-primary" onClick={(e)=>addCategorysubmit(e)}>
                                    <span className="indicator-label">
                                        Submit
                                    </span>
                                    <span className="indicator-progress">
                                        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories_master