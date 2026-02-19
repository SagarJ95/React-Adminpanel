
import { NavLink } from "react-router";
import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from '../../Producer/orderView'
import axios from "axios";
import { toast } from "react-toastify";
function Order_view() {
    const location = useLocation()
    const order_info = location.state

    const { page } = useParams();
    const [Text, setText] = useState('Edit')

    useEffect(() => {
        if (page == 'view') {
            setText('View')
        } else if (page == 'edit') {
            setText('Edit')
        }
    }, [])

    const dispatch = useDispatch()
    useEffect(() => {
        if (order_info.order_id) {
            dispatch(getOrderById(order_info.order_id));
        }
    }, [order_info.order_id, dispatch]);


    const { single, single_status } = useSelector((state) => state.OrderView);

    const [formData, setFormData] = useState({
        order_id: "",
        payment_mode: "",
        payment_status: "",
        order_status: ""
    })

    useEffect(() => {
        if (single?.id) {
            setFormData((prev) => ({
                ...prev,
                order_id: single.id,
                payment_mode: single.payment_mode,
                payment_status: single.payment_status,
                order_status: single.order_status,
            }));
        }
    }, [single]);


    const handlePageData = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const submitForm = async (e) => {
        e.preventDefault()

        const body = new FormData()
        body.append("order_id", formData.order_id)
        body.append("payment_mode", formData.payment_mode)
        body.append("payment_status", formData.payment_status)
        body.append("order_status", formData.order_status)

        try {
            const token = localStorage.getItem('admin_access_token')

            const updateInfo = await axios.post(`${import.meta.env.VITE_API_URL}/api/orderEditDetails`, body, {
                headers: {
                    "Accpte": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })


            if (updateInfo.data.status == true) {
                toast.success("Update Information successfully")
            } else {
                toast.error("update information unsuccessfully")
            }
        } catch (err) {
            toast.error("Something went wrong while updating details");
        }
    }
    return (
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
                    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                            {page} Product</h1>
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            <li className="breadcrumb-item text-muted">
                                <NavLink to="/order_management" className="text-muted text-hover-primary">Home</NavLink>
                            </li>
                            <li className="breadcrumb-item">
                                <span className="bullet bg-gray-500 w-5px h-2px" />
                            </li>
                            <li className="breadcrumb-item text-muted">View Order</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div id="kt_app_content" className="app-content flex-column-fluid">
                <div id="kt_app_content_container" className="app-container container-fluid">

                    <div className="card card-flush">
                        <form onSubmit={submitForm}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">

                                        <label className="fw-semibold mb-2"><b>Order Id : </b></label> {single.order_ref_id}
                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Preferred Delivery Date :</b></label> {single.perferred_delivery_date}


                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">

                                        <label className="fw-semibold mb-2"><b>Name :</b></label> {single.customer_name}

                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Email Id :</b></label> {single.email}

                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Payment mode :</b></label> &nbsp;
                                        <input type="text" name="payment_mode" className="form-control" value={formData.payment_mode} onChange={handlePageData} readOnly={Text === "View"} />
                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Payment Status :</b></label> &nbsp;
                                        <select name="payment_status" value={formData.payment_status}
                                            onChange={handlePageData} className="form-control" readOnly={Text === "View"}>
                                            <option>Select payment status</option>
                                            <option value="1">Paid</option>
                                            <option value="2">Pending</option>
                                            <option value="3">Partially Paid</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Order Item </b></label><br />
                                        {single?.order_items?.map((item, index) => (
                                            <div className="row mb-2" key={index}>

                                                <div className="col-md-8 d-flex align-items-center gap-2">
                                                    <img
                                                        src={item.thumbnail_product_image}
                                                        alt="img1"
                                                        style={{ height: "64px", width: "112px" }}
                                                    />
                                                    <img src={item.country_flag} alt="img2" />
                                                    <label>{item.product_name}</label>
                                                </div>

                                                <div className="col-md-4 text-end">
                                                    <label>${item.total_price}</label>
                                                </div>

                                            </div>
                                        ))}

                                    </div>
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Shipping Address :</b></label> <br />{single.address} <br />{single.city} <br />{single.country}

                                    </div>
                                    <hr />
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <div className="row">
                                            <div className="col-md-8 d-flex align-items-center gap-2">
                                                <label className="fw-semibold mb-2"><b>Total Items :</b></label> {single?.order_items?.length}
                                            </div>
                                            <div className="col-md-4 text-end">
                                                <label>$10</label>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2"><b>Special Instruction:</b></label>

                                    </div>
                                </div>
                                <div className="col-md-12 text-end">
                                    <NavLink to='/order_management' className="btn btn-sm btn-primary" style={{ marginRight: "10px" }}>Back</NavLink>
                                    {Text !== "View" && (
                                        <button
                                            type="submit"
                                            className="btn btn-sm btn-primary"
                                            id="update_details"
                                        >
                                            Update Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Order_view;