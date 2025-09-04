import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { getcountrylist } from '../../../Producer/country_master'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import axios from "axios";
import Swal from 'sweetalert2'

function Country_master() {
    const { list, country_status } = useSelector((state) => state.country_master_list)
    const [formData,setFormData] = useState({
        country_id:"",
        country_name:"",
        country_code:"",
        country_flag:""
    })

    const handleKeyChange = (e) => {

        const { name, type, files, value } = e.target;
         if (type === "file") {
            if (name === "country_flag") {

                setFormData((prev)=>({
                    ...prev,
                    [name]: files[0],
                }));
            }
        } else {
            setFormData((prev)=>({
                ...prev,
                [name]: value,
            }));
        }
    }

    //Add country data
    const submitCountry = async (e)=>{
         e.preventDefault();

        const body = new FormData();
        body.append("country_name", formData.country_name);
        body.append("country_code", formData.country_code);

        if (formData.country_flag) {
            body.append("country_flag", formData.country_flag);
        }

        try {
            const token = localStorage.getItem("admin_access_token");

            const storeCountry = await axios.post(
                "https://keepinbasket.ortdemo.com/api/createCountry",
                body,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (storeCountry.data.status === true) {
                toast.success(storeCountry.data.message);
                dispatch(getcountrylist());
                setFormData({
                    country_id:"",
                    country_name:"",
                    country_code:"",
                    country_flag:""
                })
            } else {
                toast.error(storeCountry.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while uploading Country");
        }
    }

    //update status
    const updateVisibility = async (e,row) => {

        const body = {
            country_id : row.id,
            status : (e.target.checked) ? 1 : 0
        }

        try{
            const token = localStorage.getItem("admin_access_token")
            const changeStatus = await axios.post("https://keepinbasket.ortdemo.com/api/updateCountryStatusById",body,{
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

    //delete country
    const deleteCountry = async (row) => {
        const body = {
            country_id:row.id
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
            const delete_country = await axios.post("https://keepinbasket.ortdemo.com/api/deleteCountryById",body,{
                headers:{
                    Accept:"application/json",
                    Authorization:`Bearer ${token}`
                }
            })

            if(delete_country.data.status){
                toast.success(delete_country.data.message)
            }else{
                toast.error(delete_country.data.message)
            }
        }catch(e){
            console.log("erroe",e)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (country_status == 'idle') {
            dispatch(getcountrylist())
        }
    }, [dispatch, country_status])

    const getcountryInfo = list?.data || [];

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

      // cls
      // filter countries when search changes
    useEffect(() => {
        const result = getcountryInfo.filter((item) =>
                item.country_name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(result);
    }, [search, getcountryInfo])

    //fetch country (fetchCountry)
    const fetchCountry = (row) => {
        console.log("row",row)
        setFormData({
            country_id:row.id,
            country_name:row.country_name,
            country_code:row.code,
            country_flag:row.country_flag
        })
    }

    const UpdateCountry = async(e) => {
        e.preventDefault()

        const body = new FormData();
        body.append("country_name", formData.country_name);
        body.append("country_code", formData.country_code);
        body.append("country_id", formData.country_id);


        if (formData.country_flag) {
            body.append("country_flag", formData.country_flag);
        }


        try {
            const token = localStorage.getItem("admin_access_token");

            const updateCountry = await axios.post(
                "https://keepinbasket.ortdemo.com/api/updateCountryById",
                body,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (updateCountry.data.status === true) {
                toast.success(updateCountry.data.message);
                dispatch(getcountrylist());
                setFormData({
                    country_id:"",
                    country_name:"",
                    country_code:"",
                    country_flag:""
                })
            } else {
                toast.error(updateCountry.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong while uploading Country");
        }
    }


    const columns = [
        { name: "Country", cell: row => (<><img src={row.country_flag} /> &nbsp;&nbsp;&nbsp;{row.country_name}</>) },
        { name: "Country Code", selector: row => row.code, sortable: true },
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
                    <button title="Edit" className="btn btn-sm btn-outline-secondary me-2" onClick={(e)=>fetchCountry(row)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button title="Delete" className="btn btn-sm btn-outline-secondary" onClick={(e)=>deleteCountry(row)}>
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
                            Country master</h1>
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            <li className="breadcrumb-item text-muted">
                                <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                            </li>
                            <li className="breadcrumb-item">
                                <span className="bullet bg-gray-500 w-5px h-2px" />
                            </li>
                            <li className="breadcrumb-item text-muted">Country master</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div id="kt_app_content" className="app-content flex-column-fluid">
                <div id="kt_app_content_container" className="app-container container-fluid">
                    <div className="card card-flush mb-3 filter_card">
                        <div className="card-body">
                            <form id="filterForm" className="form fv-plugins-bootstrap5 fv-plugins-framework" onSubmit={formData.country_id ? UpdateCountry : submitCountry}>
                                <div className="row">
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <input type="hidden" className="form-control" name="id" id="id" value={formData.country_id || ''}/>
                                        <label className="fw-semibold mb-2">Country Name</label>
                                        <input type="text" className="form-control" name="country_name" id="country_name" value={formData.country_name || ''} onChange={(e)=>handleKeyChange(e)}/>
                                    </div>
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2">Country Code</label>
                                        <input type="text" className="form-control" name="country_code" id="country_code"  value={formData.country_code || ''} onChange={(e)=>handleKeyChange(e)}/>
                                    </div>
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2">Country Flag</label>
                                        <input type="file" className="form-control" name="country_flag" id="country_flag"  onChange={(e)=>handleKeyChange(e)}/>
                                        {formData.country_flag && typeof formData.country_flag === "string" && (
                                            <img
                                                src={formData.country_flag}
                                                alt="Country Flag"
                                                style={{ width: "30px", marginTop: "3px" }}
                                            />
                                            )}

                                    </div>
                                </div>
                                <div className="col-md-12 text-end">
                                    <button type="submit" className="btn btn-sm btn-primary" id="filter" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card card-flush">
                        <div className="card-body">
                            <input
                                type="text"
                                placeholder="Search by country name..."
                                className="form-control mb-3"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <DataTable
                                columns={columns}
                                data={filteredData}
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

export default Country_master