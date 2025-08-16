import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { getcountrylist } from '../../../Producer/country_master'
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function Country_master() {
    const { list, country_status } = useSelector((state) => state.country_master_list)
    const dispatch = useDispatch()

    useEffect(() => {
        if (country_status == 'idle') {
            dispatch(getcountrylist())
        }
    }, [dispatch, country_status])

    const getcountryInfo = list?.data || []

    const columns = [
        { name: "Country", cell: row => (<><img src={row.country_flag} /> &nbsp;&nbsp;&nbsp;{row.country_name}</>) },
        { name: "Country Code", selector: row => row.country_name, sortable: true },
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
                            <form id="filterForm" className="form fv-plugins-bootstrap5 fv-plugins-framework">
                                <div className="row">
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2">Country Name</label>
                                        <input type="text" className="form-control" name="country_name" id="country_name" />
                                    </div>
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2">Country Code</label>
                                        <input type="text" className="form-control" name="country_code" id="country_code" />
                                    </div>
                                    <div className="col-md-4 mb-3 fv-row fv-plugins-icon-container">
                                        <label className="fw-semibold mb-2">Country Flag</label>
                                        <input type="file" className="form-control" name="uploadCategories" id="uploadCategories" />
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
                            <DataTable
                                columns={columns}
                                data={getcountryInfo}
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