import axios from "axios";
import React ,{useState}from "react";
import { NavLink, } from "react-router";
import { toast } from "react-toastify";
function Add_product() {

    const [formData,setFormData] = useState({
        product_name:"",
        category:"",
        country:"",
        product_thumbnail:"",
        product_upload_image:"",
        minimum_order_quantity:"",
        maximum_order_quantity:"",
        product_price:"",
        product_desc:""
    })


    const handleAddProduct = (e) => {
        const { name, type, files, value } = e.target;

        if (type === "file") {
            if (name === "product_upload_image") {
                // multiple images
                setFormData({
                    ...formData,
                    product_upload_image: files,
                });
            } else {
                // single file (thumbnail)
                setFormData({
                    ...formData,
                    [name]: files[0],
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };


    const submitForm = async (e) => {
        e.preventDefault();

        const body = new FormData();
        body.append("name", formData.product_name);
        body.append("description", formData.product_desc);
        body.append("category", formData.category);
        body.append("countryId", formData.country);

        if (formData.product_thumbnail) {
            body.append("thumbnail_product_image", formData.product_thumbnail);
        }

        if (formData.product_upload_image && formData.product_upload_image.length > 0) {
            for (let i = 0; i < formData.product_upload_image.length; i++) {
                body.append("product_images[]", formData.product_upload_image[i]);
            }
        }

        body.append("minimum_order_place", formData.minimum_order_quantity);
        body.append("maximum_order_place", formData.maximum_order_quantity);
        body.append("price", formData.product_price);

        try {
            const token = localStorage.getItem("token");

            const storeProduct = await axios.post(
                "https://keepinbasket.ortdemo.com/api/createProduct",
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
    };

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
                        <input type="text" className="form-control" name="product_name" id="product_name" onChange={(e)=>handleAddProduct(e)} />
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Category</label>
                        <select className="form-control" name="category" onChange={(e)=>handleAddProduct(e)}>
                            <option value="">Choose Category</option>
                            </select>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Country</label>
                         <select className="form-control" name="country" onChange={(e)=>handleAddProduct(e)}>
                            <option value="">Choose Country</option>
                            </select>
                    </div>
                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Thumbnail</label>
                       <input type="file" className="form-control" name="product_thumbnail" id="product_thumbnail" onChange={(e)=>handleAddProduct(e)}/>
                    </div>
                    <div className="col-md-6 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Upload Product Images</label>
                        <input type="file" className="form-control" name="product_upload_image" id="product_upload_image" onChange={(e)=>handleAddProduct(e)}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Minimum Order Quantity:</label>
                        <input type="text" className="form-control" name="minimum_order_quantity" id="minimum_order_quantity" onChange={(e)=>handleAddProduct(e)}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Maximum Order Quantity:</label>
                        <input type="text" className="form-control" name="maximum_order_quantity" id="maximum_order_quantity" onChange={(e)=>handleAddProduct(e)}/>
                    </div>
                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Price:</label>
                        <input type="text" className="form-control" name="product_price" id="product_price" onChange={(e)=>handleAddProduct(e)}/>
                    </div>
                     <div className="col-md-12 mb-3 fv-row fv-plugins-icon-container">
                        <label className="fw-semibold mb-2">Product Description:</label>
                        <textarea className="form-control" name="product_desc" id="product_desc" onChange={(e)=>handleAddProduct(e)}/>
                    </div>

                </div>
                <div className="col-md-12 text-end">
                    <NavLink to='/product_master' className="btn btn-sm btn-primary" style={{marginRight:"10px"}}>Back</NavLink>
                    <button type="button" className="btn btn-sm btn-primary" id="filter" onClick={(e)=>submitForm(e)}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Add_product