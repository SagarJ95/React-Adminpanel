import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { dashboardlist } from '../../Producer/dashboard'
import DataTable from "react-data-table-component";
function Dashboard() {
  const { list, status } = useSelector((state) => state.dashboardlist)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status == 'idle') {
      dispatch(dashboardlist())
    }
  }, [dispatch, status])

  const listingInfo = list?.data || [];

  const todayOrderTable = listingInfo?.order_list || [];

  const columns = [
    {Name:"Sr.No",selector:row=>row.order_id,sortble:true},
    {Name:"Order Id",selector:row=>row.order_id,sortble:true},
    {Name:"Customer Name",selector:row=>row.customer_name,sortble:true},
    {Name:"Date",selector:row=>row.created_at,sortble:true},
    {Name:"status",selector:row=>row.order_status,sortble:true},
    {Name:"Total",selector:row=>row.total_price,sortble:true},
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
  ]

  return (
    <>
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
          <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
              <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Multipurpose</h1>

              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                  <a href="index.html" className="text-muted text-hover-primary">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-500 w-5px h-2px" />
                </li>
                <li className="breadcrumb-item text-muted">Dashboards</li>
              </ul>
            </div>
            <div className="d-flex align-items-center gap-2 gap-lg-3">
              <a href="#" className="btn btn-sm fw-bold btn-secondary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Rollover</a>
              <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Add Target</a>
            </div>
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div id="kt_app_content_container" className="app-container container-fluid">
            <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-100 mb-5 mb-xl-10" style={{ backgroundColor: '#F1416C', backgroundImage: 'url("assets/media/patterns/vector-1.png")' }}>
                  <div className="card-header pt-5">
                    {/*begin::Title*/}
                    <div className="card-title d-flex flex-column">
                      {/*begin::Amount*/}
                      <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">{(listingInfo.length > 0) ? listingInfo[0].total_order : 0}</span>
                      {/*end::Amount*/}
                      {/*begin::Subtitle*/}
                      <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Total Orders Today</span>
                      {/*end::Subtitle*/}
                    </div>
                    {/*end::Title*/}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                <div className="card card-flush h-md-100 mb-5 mb-xl-10">
                  <div className="card-header pt-5">
                    <div className="card-title d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
                        <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">{(listingInfo.length > 0) ? listingInfo[0].total_price : 0}</span>
                      </div>
                      <span className="text-gray-500 pt-1 fw-semibold fs-6">Total Revenue Today</span>
                    </div>
                  </div>
                  <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                <div className="card card-flush h-md-100 mb-5 mb-xl-10">
                  <div className="card-header pt-5">
                    <div className="card-title d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">{(listingInfo.length > 0) ? listingInfo[0].pending_order_count : 0}</span>

                      </div>
                      <span className="text-gray-500 pt-1 fw-semibold fs-6">Pending Orders</span>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                <div className="card card-flush h-md-100 mb-5 mb-xl-10">
                  <div className="card-header pt-5">
                    <div className="card-title d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
                        <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">69,700</span>
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>2.2%</span>
                      </div>
                      <span className="text-gray-500 pt-1 fw-semibold fs-6">Projects Earnings in April</span>

                    </div>
                  </div>
                  <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                    <div className="d-flex flex-center me-5 pt-2">
                      <div id="kt_card_widget_17_chart" style={{ minWidth: 70, minHeight: 70 }} data-kt-size={70} data-kt-line={11} />
                    </div>
                    <div className="d-flex flex-column content-justify-center flex-row-fluid">
                      <div className="d-flex fw-semibold align-items-center">
                        <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                        <div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                        <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
                      </div>
                      <div className="d-flex fw-semibold align-items-center my-3">
                        <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                        <div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
                        <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                      </div>
                      <div className="d-flex fw-semibold align-items-center">
                        <div className="bullet w-8px h-3px rounded-2 me-3" style={{ backgroundColor: '#E4E6EF' }} />

                        <div className="text-gray-500 flex-grow-1 me-4">Others</div>
                        <div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
              <div className="col-xl-12">
                <div className="card card-flush h-md-100">
                  <div className="card-header pt-7">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold text-gray-800">Todays Orders</span>
                    </h3>
                  </div>
                  <div className="card-body pt-6">
                    <DataTable
                        columns={columns}
                        data={todayOrderTable}
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
      </div>

    </>
  )
}

export default Dashboard