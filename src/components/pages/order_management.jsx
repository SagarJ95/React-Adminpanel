import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useSelector, useDispatch } from 'react-redux'
import { orderlist } from '../../Producer/orderManagement'
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function Order_management() {
    const navigate = useNavigate();
    const { list, order_status } = useSelector((state) => state.order_list)
    const dispatch = useDispatch();
    const [tab, setTab] = useState(1)
    useEffect(() => {
        dispatch(orderlist({ order_status: tab }))
    }, [dispatch, tab])

    const getTabId = (e) => {
        e.preventDefault()
        setTab(Number(e.target.name))
    }
    console.log(list)
    const listingInfo = list?.data || [];

    const viewOrder = (row) => {
        navigate(`/order_management/view`, { state: row });
    }

    const editOrder = (row) => {
        navigate('/order_management/edit', { state: row })
    }

    const columns = [
        { name: "Order ID", selector: row => row.order_ref_id, sortable: true },
        { name: "Customer Name", selector: row => row.customer_name, sortable: true },
        { name: "Order Date", selector: row => row.order_date, sortable: true },
        { name: "Total", selector: row => row.total_price, sortable: true },
        { name: "Grand Total", selector: row => row.grand_total, sortable: true },
        {
            name: "Action",
            cell: row => (
                <>
                    <button title="View" className="btn btn-sm btn-outline-success me-2" onClick={(e) => viewOrder(row)}>
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    {row.order_status != 5 && (
                        <>
                            <button title="Edit" className="btn btn-sm btn-outline-secondary me-2" onClick={(e) => editOrder(row)}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button title="Update" className="btn btn-sm btn-outline-secondary">
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </button>
                        </>
                    )}

                </>
            ),
        }
    ];


    return (
        <>

            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                {/*begin::Toolbar container*/}
                <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                        {/*begin::Title*/}
                        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Order Table</h1>
                        {/*end::Title*/}
                        {/*begin::Breadcrumb*/}
                        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-muted">
                                <NavLink to="/" className="text-muted text-hover-primary">Home</NavLink>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item">
                                <span className="bullet bg-gray-500 w-5px h-2px" />
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-muted">Order Table</li>
                            {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                    </div>
                    {/*end::Page title*/}
                    {/*begin::Actions*/}
                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                        {/*begin::Filter menu*/}
                        <div className="m-0">
                            {/*begin::Menu toggle*/}
                            <a href="#" className="btn btn-sm btn-flex btn-secondary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <i className="ki-duotone ki-filter fs-6 text-muted me-1">
                                    <span className="path1" />
                                    <span className="path2" />
                                </i>Filter</a>
                            {/*end::Menu toggle*/}
                            {/*begin::Menu 1*/}
                            <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_66063850e5945">
                                {/*begin::Header*/}
                                <div className="px-7 py-5">
                                    <div className="fs-5 text-gray-900 fw-bold">Filter Options</div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Menu separator*/}
                                <div className="separator border-gray-200" />
                                {/*end::Menu separator*/}
                                {/*begin::Form*/}
                                <div className="px-7 py-5">
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        {/*begin::Label*/}
                                        <label className="form-label fw-semibold">Status:</label>
                                        {/*end::Label*/}
                                        {/*begin::Input*/}
                                        <div>
                                            <select className="form-select form-select-solid select2-hidden-accessible" multiple data-kt-select2="true" data-close-on-select="false" data-placeholder="Select option" data-dropdown-parent="#kt_menu_66063850e5945" data-allow-clear="true" data-select2-id="select2-data-7-t2bm" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                                <option />
                                                <option value={1}>Approved</option>
                                                <option value={2}>Pending</option>
                                                <option value={2}>In Process</option>
                                                <option value={2}>Rejected</option>
                                            </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-8-cu3t" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--multiple form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered" id="select2-uoh5-container" /><span className="select2-search select2-search--inline"><textarea className="select2-search__field" type="search" tabIndex={0} autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-uoh5-container" placeholder="Select option" style={{ width: '100%' }} defaultValue={""} /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                        </div>
                                        {/*end::Input*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        {/*begin::Label*/}
                                        <label className="form-label fw-semibold">Member Type:</label>
                                        {/*end::Label*/}
                                        {/*begin::Options*/}
                                        <div className="d-flex">
                                            {/*begin::Options*/}
                                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                <input className="form-check-input" type="checkbox" defaultValue={1} />
                                                <span className="form-check-label">Author</span>
                                            </label>
                                            {/*end::Options*/}
                                            {/*begin::Options*/}
                                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                                                <span className="form-check-label">Customer</span>
                                            </label>
                                            {/*end::Options*/}
                                        </div>
                                        {/*end::Options*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Input group*/}
                                    <div className="mb-10">
                                        {/*begin::Label*/}
                                        <label className="form-label fw-semibold">Notifications:</label>
                                        {/*end::Label*/}
                                        {/*begin::Switch*/}
                                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                            <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                                            <label className="form-check-label">Enabled</label>
                                        </div>
                                        {/*end::Switch*/}
                                    </div>
                                    {/*end::Input group*/}
                                    {/*begin::Actions*/}
                                    <div className="d-flex justify-content-end">
                                        <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                        <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                    </div>
                                    {/*end::Actions*/}
                                </div>
                                {/*end::Form*/}
                            </div>
                            {/*end::Menu 1*/}
                        </div>
                        {/*end::Filter menu*/}
                        {/*begin::Secondary button*/}
                        {/*end::Secondary button*/}
                        {/*begin::Primary button*/}
                        <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
                        {/*end::Primary button*/}
                    </div>
                    {/*end::Actions*/}
                </div>
                {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id="kt_app_content" className="app-content flex-column-fluid">
                {/*begin::Content container*/}
                <div id="kt_app_content_container" className="app-container">
                    {/*begin::Careers - List*/}
                    <div className="card">
                        {/*begin::Body*/}
                        <div className="card-body p-lg-17">
                            <div className="d-flex flex-column flex-column-fluid">
                                {/*begin::Toolbar*/}
                                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    <div className="mb-5 hover-scroll-x">
                                        <div className="d-grid">
                                            <ul className="nav nav-tabs flex-nowrap text-nowrap">
                                                {["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"].map((status, index) => (
                                                    <li className="nav-item" key={status}>
                                                        <a
                                                            className={`nav-link btn btn-active-light btn-color-gray-600 btn-active-color-primary rounded-bottom-0 ${tab === index + 1 ? "active" : ""}`}
                                                            href={`#${status}`}
                                                            name={index + 1}
                                                            onClick={getTabId}
                                                        >
                                                            {status}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Order_management;