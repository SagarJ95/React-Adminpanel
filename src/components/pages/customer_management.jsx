import React, { useEffect } from 'react'
import { NavLink } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { customerlist } from '../../Producer/customerManagement'
import DataTable from "react-data-table-component";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'

function Customer_management() {
  const { list, customer_status } = useSelector((state) => state.customer_list)
  const dispatch = useDispatch();

  useEffect(() => {
    if (customer_status == 'idle') {
      dispatch(customerlist())
    }
  }, [dispatch, customer_status])


  const listingInfo = list?.data || [];


  //Update Change status
    const updateVisibility = async (e,row) => {

        const body = {
            customer_id : row.id,
            status : (e.target.checked) ? 1 : 0
        }

        try{
            const token = localStorage.getItem("admin_access_token")
            const changeStatus = await axios.post("https://keepinbasket.ortdemo.com/api/activationStatus",body,{
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

  const columns = [
    { name: "Name", selector: row => row.customer_name, sortable: true },
    { name: "Contact No.", selector: row => row.contact_no, sortable: true },
    { name: "Total Orders", selector: row => row.total_order, sortable: true },
    { name: "Last Order Date", selector: row => row.last_order_date, sortable: true },
    { name: "Total Revenue", selector: row => row.total_revenue, sortable: true },
    {
      name: "Visiblity", cell: row => (
        <>
          <input type="checkbox" className="form-check-input " checked={row.visibilty_status==1} onChange={(e)=>updateVisibility(e,row)}/>
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
          <button title="Update" className="btn btn-sm btn-outline-secondary">
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </>
      ),
    }
  ];

  return (
    <>
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
          <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              Customer Management</h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px" />
              </li>
              <li className="breadcrumb-item text-muted">Customer Management</li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            <NavLink to="/add_customer" className="btn btn-sm fw-bold btn-primary">Add Customer</NavLink>
          </div>

        </div>
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div id="kt_app_content_container" className="app-container container-fluid">

          <div className="card card-flush">
            <div className="card-body">
              <DataTable
                columns={columns}
                data={listingInfo}
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

export default Customer_management