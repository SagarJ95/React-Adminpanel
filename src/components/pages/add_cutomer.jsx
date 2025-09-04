import axios from "axios";
import React ,{useState,useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, } from "react-router";
import { toast } from "react-toastify";
import { useLocation,useParams } from "react-router-dom";
function Add_customer() {
    const {id,page} = useParams();
    const [Text,setText] = useState('Add')

    useEffect(()=>{
        if(page == 'view'){
            setText('View')
        }else if(page == 'edit'){
            setText('Edit')
        }else{
            setText('Add')
        }
    },[])

    const [FormData,setFormData] = useState({
        customer_id:"",
        first_name:"",
        last_name:"",
        email_id:"",
        phone_number:"",
        whatsapp_number:"",
        password:"",
        confirm_password:"",
        zipcode:"",
        city:"",
        state:"",
        country:"",
        address:"",
        profile:""
    })

    const handlePageData = async(e) =>{
         const { name, type, files, value } = e.target;

        if (type === "file") {
            if (name === "product_thumbnail") {
                // multiple images
                setFormData({
                    ...FormData,
                    product_upload_image: files,
                });
            } else {
                // single file (thumbnail)
                setFormData({
                    ...FormData,
                    [name]: files[0],
                });
            }
        } else {
            setFormData({
                ...FormData,
                [name]: value,
            });
        }
    }

    const submitForm = async(e) => {
        e.preventDefault();

        const body = new FormData();
        body.append("first_name",FormData.first_name)
        body.append("last_name",FormData.last_name)
        body.append("contact_number",FormData.phone_number)
        body.append("whatsapp_number",FormData.whatsapp_number)
        body.append("whatsapp_number",FormData.email_id)
        body.append("password",FormData.confirm_password)
        body.append("zipcode",FormData.zipcode)
        body.append("state",FormData.state)
        body.append("city",FormData.city)
        body.append("address",FormData.address)
        body.append("phone_country_code",91)
        body.append("whatsapp_country_code",91)

        if (FormData.profile) {
            body.append("profile", FormData.profile);
        }

        try {
            const token = localStorage.getItem("token");

            const storeProduct = await axios.post(
                "https://keepinbasket.ortdemo.com/api/add_customer",
                body,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (storeProduct.data.status === true) {
                toast.success(storeProduct.data.message);
                setTimeout(() => {
                    window.location.href = "/product_master";
                }, 1000);
            } else {
                toast.error(storeProduct.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while uploading product");
        }
    }

    return(
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                {Text} Customer</h1>
                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                    <NavLink to="/customer_management" className="text-muted text-hover-primary">Home</NavLink>
                </li>
                <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">{Text} Customer</li>
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
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <input type="hidden" className="form-control" name="customer_id" id="customer_id" value={id || ''} onChange={handlePageData}/>
                        <label className="fw-semibold mb-2">First Name</label>
                        <input type="text" className="form-control" name="first_name" id="first_name" value="" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Last Name</label>
                        <input type="text" className="form-control" name="last_name" id="last_name" value="" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Email Address</label>
                        <input type="text" className="form-control" name="email_id" id="email_id" value="" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Phone Number</label>
                        <input type="text" className="form-control" name="phone_number" id="phone_number" value="" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Whatsapp Number</label>
                        <input type="text" className="form-control" name="whatsapp_number" id="whatsapp_number" value="" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Thumbnail</label>
                       <input type="file" className="form-control" name="product_thumbnail" id="product_thumbnail" onChange={handlePageData}/>

                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Password</label>
                        <input type="password" className="form-control" name="password" id="password" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Confirm Password</label>
                        <input type="password" className="form-control" name="confirm_password" id="confirm_password" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Zip Code</label>
                        <input type="text" className="form-control" name="zip_code" id="zip_code" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">city</label>
                        <input type="city" className="form-control" name="city" id="city" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">state</label>
                        <input type="text" className="form-control" name="state" id="state" onChange={handlePageData}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">country</label>
                        <input type="text" className="form-control" name="country" id="country" onChange={handlePageData}/>
                    </div>

                    <div className="col-md-12 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Address:</label>
                        <input type="text" className="form-control" name="address" id="address" value="" onChange={handlePageData}/>

                    </div>
                </div>
                <div className="col-md-12 text-end">
                    <NavLink to='/customer_management' className="btn btn-sm btn-primary" style={{marginRight:"10px"}}>Back</NavLink>
                    <button type="submit" className="btn btn-sm btn-primary" id="filter">Submit</button>
                </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </>
    )
}

export default Add_customer