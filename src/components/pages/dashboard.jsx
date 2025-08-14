import React from "react";

function Dashboard() {
    return (
        <>
        <div className="d-flex flex-column flex-column-fluid">
  {/*begin::Toolbar*/}
  <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
    {/*begin::Toolbar container*/}
    <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
      {/*begin::Page title*/}
      <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
        {/*begin::Title*/}
        <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Multipurpose</h1>
        {/*end::Title*/}
        {/*begin::Breadcrumb*/}
        <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
          {/*begin::Item*/}
          <li className="breadcrumb-item text-muted">
            <a href="index.html" className="text-muted text-hover-primary">Home</a>
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="breadcrumb-item">
            <span className="bullet bg-gray-500 w-5px h-2px" />
          </li>
          {/*end::Item*/}
          {/*begin::Item*/}
          <li className="breadcrumb-item text-muted">Dashboards</li>
          {/*end::Item*/}
        </ul>
        {/*end::Breadcrumb*/}
      </div>
      {/*end::Page title*/}
      {/*begin::Actions*/}
      <div className="d-flex align-items-center gap-2 gap-lg-3">
        {/*begin::Secondary button*/}
        <a href="#" className="btn btn-sm fw-bold btn-secondary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Rollover</a>
        {/*end::Secondary button*/}
        {/*begin::Primary button*/}
        <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">Add Target</a>
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
    <div id="kt_app_content_container" className="app-container container-fluid">
      {/*begin::Row*/}
      <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
        {/*begin::Col*/}
        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          {/*begin::Card widget 20*/}
          <div className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10" style={{backgroundColor: '#F1416C', backgroundImage: 'url("assets/media/patterns/vector-1.png")'}}>
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <div className="card-title d-flex flex-column">
                {/*begin::Amount*/}
                <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>
                {/*end::Amount*/}
                {/*begin::Subtitle*/}
                <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Active Projects</span>
                {/*end::Subtitle*/}
              </div>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Card body*/}
            <div className="card-body d-flex align-items-end pt-0">
              {/*begin::Progress*/}
              <div className="d-flex align-items-center flex-column mt-3 w-100">
                <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                  <span>43 Pending</span>
                  <span>72%</span>
                </div>
                <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                  <div className="bg-white rounded h-8px" role="progressbar" style={{width: '72%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              {/*end::Progress*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card widget 20*/}
          {/*begin::Card widget 7*/}
          <div className="card card-flush h-md-50 mb-5 mb-xl-10">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <div className="card-title d-flex flex-column">
                {/*begin::Amount*/}
                <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">357</span>
                {/*end::Amount*/}
                {/*begin::Subtitle*/}
                <span className="text-gray-500 pt-1 fw-semibold fs-6">Professionals</span>
                {/*end::Subtitle*/}
              </div>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Card body*/}
            <div className="card-body d-flex flex-column justify-content-end pe-0">
              {/*begin::Title*/}
              <span className="fs-6 fw-bolder text-gray-800 d-block mb-2">Today’s Heroes</span>
              {/*end::Title*/}
              {/*begin::Users group*/}
              <div className="symbol-group symbol-hover flex-nowrap">
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Alan Warden">
                  <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                  <img alt="Pic" src="assets/media/avatars/300-11.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                  <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                  <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Perry Matthew">
                  <span className="symbol-label bg-danger text-inverse-danger fw-bold">P</span>
                </div>
                <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Barry Walter">
                  <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                </div>
                <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">
                  <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                </a>
              </div>
              {/*end::Users group*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card widget 7*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
          {/*begin::Card widget 17*/}
          <div className="card card-flush h-md-50 mb-5 mb-xl-10">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <div className="card-title d-flex flex-column">
                {/*begin::Info*/}
                <div className="d-flex align-items-center">
                  {/*begin::Currency*/}
                  <span className="fs-4 fw-semibold text-gray-500 me-1 align-self-start">$</span>
                  {/*end::Currency*/}
                  {/*begin::Amount*/}
                  <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">69,700</span>
                  {/*end::Amount*/}
                  {/*begin::Badge*/}
                  <span className="badge badge-light-success fs-base">
                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>2.2%</span>
                  {/*end::Badge*/}
                </div>
                {/*end::Info*/}
                {/*begin::Subtitle*/}
                <span className="text-gray-500 pt-1 fw-semibold fs-6">Projects Earnings in April</span>
                {/*end::Subtitle*/}
              </div>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
              {/*begin::Chart*/}
              <div className="d-flex flex-center me-5 pt-2">
                <div id="kt_card_widget_17_chart" style={{minWidth: 70, minHeight: 70}} data-kt-size={70} data-kt-line={11} />
              </div>
              {/*end::Chart*/}
              {/*begin::Labels*/}
              <div className="d-flex flex-column content-justify-center flex-row-fluid">
                {/*begin::Label*/}
                <div className="d-flex fw-semibold align-items-center">
                  {/*begin::Bullet*/}
                  <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                  {/*end::Bullet*/}
                  {/*begin::Label*/}
                  <div className="text-gray-500 flex-grow-1 me-4">Leaf CRM</div>
                  {/*end::Label*/}
                  {/*begin::Stats*/}
                  <div className="fw-bolder text-gray-700 text-xxl-end">$7,660</div>
                  {/*end::Stats*/}
                </div>
                {/*end::Label*/}
                {/*begin::Label*/}
                <div className="d-flex fw-semibold align-items-center my-3">
                  {/*begin::Bullet*/}
                  <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                  {/*end::Bullet*/}
                  {/*begin::Label*/}
                  <div className="text-gray-500 flex-grow-1 me-4">Mivy App</div>
                  {/*end::Label*/}
                  {/*begin::Stats*/}
                  <div className="fw-bolder text-gray-700 text-xxl-end">$2,820</div>
                  {/*end::Stats*/}
                </div>
                {/*end::Label*/}
                {/*begin::Label*/}
                <div className="d-flex fw-semibold align-items-center">
                  {/*begin::Bullet*/}
                  <div className="bullet w-8px h-3px rounded-2 me-3" style={{backgroundColor: '#E4E6EF'}} />
                  {/*end::Bullet*/}
                  {/*begin::Label*/}
                  <div className="text-gray-500 flex-grow-1 me-4">Others</div>
                  {/*end::Label*/}
                  {/*begin::Stats*/}
                  <div className="fw-bolder text-gray-700 text-xxl-end">$45,257</div>
                  {/*end::Stats*/}
                </div>
                {/*end::Label*/}
              </div>
              {/*end::Labels*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card widget 17*/}
          {/*begin::List widget 26*/}
          <div className="card card-flush h-lg-50">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title text-gray-800 fw-bold">External Links</h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                  <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </button>
                {/*begin::Menu 2*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Admin Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Staff Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Member Group</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <a href="#" className="text-primary fw-semibold fs-6 me-2">Avg. Client Rating</a>
                {/*end::Section*/}
                {/*begin::Action*/}
                <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end">
                  <i className="ki-duotone ki-exit-right-corner fs-2">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <a href="#" className="text-primary fw-semibold fs-6 me-2">Instagram Followers</a>
                {/*end::Section*/}
                {/*begin::Action*/}
                <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end">
                  <i className="ki-duotone ki-exit-right-corner fs-2">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <a href="#" className="text-primary fw-semibold fs-6 me-2">Google Ads CPC</a>
                {/*end::Section*/}
                {/*begin::Action*/}
                <button type="button" className="btn btn-icon btn-sm h-auto btn-color-gray-500 btn-active-color-primary justify-content-end">
                  <i className="ki-duotone ki-exit-right-corner fs-2">
                    <span className="path1" />
                    <span className="path2" />
                  </i>
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::LIst widget 26*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xxl-6">
          {/*begin::Engage widget 10*/}
          <div className="card card-flush h-md-100">
            {/*begin::Body*/}
            <div className="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0" style={{backgroundPosition: '100% 50%', backgroundImage: 'url("assets/media/stock/900x600/42.png")'}}>
              {/*begin::Wrapper*/}
              <div className="mb-10">
                {/*begin::Title*/}
                <div className="fs-2hx fw-bold text-gray-800 text-center mb-13">
                  <span className="me-2">Try our all new Enviroment with
                    <br />
                    <span className="position-relative d-inline-block text-danger">
                      <a href="pages/user-profile/overview.html" className="text-danger opacity-75-hover">Pro Plan</a>
                      {/*begin::Separator*/}
                      <span className="position-absolute opacity-15 bottom-0 start-0 border-4 border-danger border-bottom w-100" />
                      {/*end::Separator*/}
                    </span></span>for Free</div>
                {/*end::Title*/}
                {/*begin::Action*/}
                <div className="text-center">
                  <a href="#" className="btn btn-sm btn-dark fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade Now</a>
                </div>
                {/*begin::Action*/}
              </div>
              {/*begin::Wrapper*/}
              {/*begin::Illustration*/}
              <img className="mx-auto h-150px h-lg-200px theme-light-show" src="assets/media/illustrations/misc/upgrade.svg" alt="" />
              <img className="mx-auto h-150px h-lg-200px theme-dark-show" src="assets/media/illustrations/misc/upgrade-dark.svg" alt="" />
              {/*end::Illustration*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Engage widget 10*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row gx-5 gx-xl-10">
        {/*begin::Col*/}
        <div className="col-xxl-6 mb-5 mb-xl-10">
          {/*begin::Chart widget 8*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Performance Overview</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">Users from all channels</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                <ul className="nav" id="kt_chart_widget_8_tabs">
                  <li className="nav-item">
                    <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_8_week_toggle" href="#kt_chart_widget_8_week_tab">Month</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active" data-bs-toggle="tab" id="kt_chart_widget_8_month_toggle" href="#kt_chart_widget_8_month_tab">Week</a>
                  </li>
                </ul>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-6">
              {/*begin::Tab content*/}
              <div className="tab-content">
                {/*begin::Tab pane*/}
                <div className="tab-pane fade" id="kt_chart_widget_8_week_tab" role="tabpanel">
                  {/*begin::Statistics*/}
                  <div className="mb-5">
                    {/*begin::Statistics*/}
                    <div className="d-flex align-items-center mb-2">
                      <span className="fs-1 fw-semibold text-gray-500 me-1 mt-n1">$</span>
                      <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">18,89</span>
                      <span className="badge badge-light-success fs-base">
                        <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>4,8%</span>
                    </div>
                    {/*end::Statistics*/}
                    {/*begin::Description*/}
                    <span className="fs-6 fw-semibold text-gray-500">Avarage cost per interaction</span>
                    {/*end::Description*/}
                  </div>
                  {/*end::Statistics*/}
                  {/*begin::Chart*/}
                  <div id="kt_chart_widget_8_week_chart" className="ms-n5 min-h-auto" style={{height: 275}} />
                  {/*end::Chart*/}
                  {/*begin::Items*/}
                  <div className="d-flex flex-wrap pt-5">
                    {/*begin::Item*/}
                    <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-<gray-600 fs-6">Google Ads</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Courses</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-column pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Radio</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                  </div>
                  {/*ed::Items*/}
                </div>
                {/*end::Tab pane*/}
                {/*begin::Tab pane*/}
                <div className="tab-pane fade active show" id="kt_chart_widget_8_month_tab" role="tabpanel">
                  {/*begin::Statistics*/}
                  <div className="mb-5">
                    {/*begin::Statistics*/}
                    <div className="d-flex align-items-center mb-2">
                      <span className="fs-1 fw-semibold text-gray-500 me-1 mt-n1">$</span>
                      <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">8,55</span>
                      <span className="badge badge-light-success fs-base">
                        <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>2.2%</span>
                    </div>
                    {/*end::Statistics*/}
                    {/*begin::Description*/}
                    <span className="fs-6 fw-semibold text-gray-500">Avarage cost per interaction</span>
                    {/*end::Description*/}
                  </div>
                  {/*end::Statistics*/}
                  {/*begin::Chart*/}
                  <div id="kt_chart_widget_8_month_chart" className="ms-n5 min-h-auto" style={{height: 275}} />
                  {/*end::Chart*/}
                  {/*begin::Items*/}
                  <div className="d-flex flex-wrap pt-5">
                    {/*begin::Item*/}
                    <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Social Campaigns</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Google Ads</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Email Newsletter</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Courses</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-column pt-sm-3 pt-6">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-3 mb-sm-6">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">TV Campaign</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        {/*begin::Bullet*/}
                        <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                        {/*end::Bullet*/}
                        {/*begin::Label*/}
                        <span className="fw-bold text-gray-600 fs-6">Radio</span>
                        {/*end::Label*/}
                      </div>
                      {/*ed::Item*/}
                    </div>
                    {/*ed::Item*/}
                  </div>
                  {/*ed::Items*/}
                </div>
                {/*end::Tab pane*/}
              </div>
              {/*end::Tab content*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Chart widget 8*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-6 mb-5 mb-xl-10">
          {/*begin::Tables widget 16*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-800">Authors Achievements</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">Avg. 69.34% Conv. Rate</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                  <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </button>
                {/*begin::Menu 2*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Admin Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Staff Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Member Group</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-6">
              {/*begin::Nav*/}
              <ul className="nav nav-pills nav-pills-custom mb-3">
                {/*begin::Item*/}
                <li className="nav-item mb-3 me-3 me-lg-6">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" id="kt_stats_widget_16_tab_link_1" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_1">
                    {/*begin::Icon*/}
                    <div className="nav-icon mb-3">
                      <i className="ki-duotone ki-car fs-1">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                        <span className="path4" />
                        <span className="path5" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">SaaS</span>
                    {/*end::Title*/}
                    {/*begin::Bullet*/}
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    {/*end::Bullet*/}
                  </a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3 me-3 me-lg-6">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_2" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_2">
                    {/*begin::Icon*/}
                    <div className="nav-icon mb-3">
                      <i className="ki-duotone ki-bitcoin fs-1">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Crypto</span>
                    {/*end::Title*/}
                    {/*begin::Bullet*/}
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    {/*end::Bullet*/}
                  </a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3 me-3 me-lg-6">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_3" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_3">
                    {/*begin::Icon*/}
                    <div className="nav-icon mb-3">
                      <i className="ki-duotone ki-like fs-1">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Social</span>
                    {/*end::Title*/}
                    {/*begin::Bullet*/}
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    {/*end::Bullet*/}
                  </a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3 me-3 me-lg-6">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_4" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_4">
                    {/*begin::Icon*/}
                    <div className="nav-icon mb-3">
                      <i className="ki-duotone ki-tablet fs-1">
                        <span className="path1" />
                        <span className="path2" />
                        <span className="path3" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Mobile</span>
                    {/*end::Title*/}
                    {/*begin::Bullet*/}
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    {/*end::Bullet*/}
                  </a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3 me-3 me-lg-6">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" id="kt_stats_widget_16_tab_link_5" data-bs-toggle="pill" href="#kt_stats_widget_16_tab_5">
                    {/*begin::Icon*/}
                    <div className="nav-icon mb-3">
                      <i className="ki-duotone ki-send fs-1">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Title*/}
                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Others</span>
                    {/*end::Title*/}
                    {/*begin::Bullet*/}
                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                    {/*end::Bullet*/}
                  </a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
              </ul>
              {/*end::Nav*/}
              {/*begin::Tab Content*/}
              <div className="tab-content">
                {/*begin::Tap pane*/}
                <div className="tab-pane fade show active" id="kt_stats_widget_16_tab_1">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                          <th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                          <th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                          <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                          <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-3.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Haiti</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">78.34%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_1_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-2.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Monaco</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">63.83%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_1_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-9.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Poland</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">92.56%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_1_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-7.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Cody Fishers</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Mexico</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">63.08%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_1_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_stats_widget_16_tab_2">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                          <th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                          <th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                          <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                          <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-25.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Poland</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">85.23%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_2_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-24.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Mexico</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">74.83%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_2_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-20.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Haiti</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">90.06%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_2_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-17.jpg" className="" alt=""/>
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Monaco</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">54.08%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_2_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_stats_widget_16_tab_3">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                          <th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                          <th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                          <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                          <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-11.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">New York</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">52.34%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_3_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-23.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ronald Richards</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Madrid</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">77.65%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_3_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-4.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Leslie Alexander</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Pune</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">82.47%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_3_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-1.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Courtney Henry</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Mexico</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">67.84%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_3_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_stats_widget_16_tab_4">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                          <th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                          <th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                          <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                          <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-12.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Arlene McCoy</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">London</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">53.44%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_4_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-21.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Marvin McKinneyr</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Monaco</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">74.64%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_4_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-30.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">PManila</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">88.56%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_4_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-14.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Iceland</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">63.16%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_4_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_stats_widget_16_tab_5">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                          <th className="p-0 pb-3 min-w-150px text-start">AUTHOR</th>
                          <th className="p-0 pb-3 min-w-100px text-end pe-13">CONV.</th>
                          <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                          <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-6.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jane Cooper</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Haiti</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">68.54%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_5_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-10.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Kiribati</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">55.83%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_5_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-9.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Jacob Jones</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Poland</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">93.46%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_5_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-50px me-3">
                                <img src="assets/media/avatars/300-3.jpg" className="" alt="" />
                              </div>
                              <div className="d-flex justify-content-start flex-column">
                                <a href="pages/user-profile/overview.html" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Ralph Edwards</a>
                                <span className="text-gray-500 fw-semibold d-block fs-7">Mexico</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end pe-13">
                            <span className="text-gray-600 fw-bold fs-6">64.48%</span>
                          </td>
                          <td className="text-end pe-0">
                            <div id="kt_table_widget_16_chart_5_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                              <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*end::Table container*/}
              </div>
              {/*end::Tab Content*/}
            </div>
            {/*end: Card Body*/}
          </div>
          {/*end::Tables widget 16*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/*begin::Col*/}
        <div className="col-xxl-6">
          {/*begin::Card widget 18*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Body*/}
            <div className="card-body py-9">
              {/*begin::Row*/}
              <div className="row gx-9 h-100">
                {/*begin::Col*/}
                <div className="col-sm-6 mb-10 mb-sm-0">
                  {/*begin::Image*/}
                  <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100" style={{backgroundSize: '100% 100%', backgroundImage: 'url("assets/media/stock/600x600/img-65.jpg")'}} />
                  {/*end::Image*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-sm-6">
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column h-100">
                    {/*begin::Header*/}
                    <div className="mb-7">
                      {/*begin::Headin*/}
                      <div className="d-flex flex-stack mb-6">
                        {/*begin::Title*/}
                        <div className="flex-shrink-0 me-5">
                          <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">Featured</span>
                          <span className="text-gray-800 fs-1 fw-bold">9 Degree</span>
                        </div>
                        {/*end::Title*/}
                        <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">In Process</span>
                      </div>
                      {/*end::Heading*/}
                      {/*begin::Items*/}
                      <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center me-5 me-xl-13">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-30px symbol-circle me-3">
                            <img src="assets/media/avatars/300-3.jpg" className="" alt="" />
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Info*/}
                          <div className="m-0">
                            <span className="fw-semibold text-gray-500 d-block fs-8">Manager</span>
                            <a href="pages/user-profile/overview.html" className="fw-bold text-gray-800 text-hover-primary fs-7">Robert Fox</a>
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Item*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Symbol*/}
                          <div className="symbol symbol-30px symbol-circle me-3">
                            <span className="symbol-label bg-success">
                              <i className="ki-duotone ki-abstract-41 fs-5 text-white">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </div>
                          {/*end::Symbol*/}
                          {/*begin::Info*/}
                          <div className="m-0">
                            <span className="fw-semibold text-gray-500 d-block fs-8">Budget</span>
                            <span className="fw-bold text-gray-800 fs-7">$64.800</span>
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Item*/}
                      </div>
                      {/*end::Items*/}
                    </div>
                    {/*end::Header*/}
                    {/*begin::Body*/}
                    <div className="mb-6">
                      {/*begin::Text*/}
                      <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">Flat cartoony illustrations with vivid unblended colors and asymmetrical beautiful purple hair lady</span>
                      {/*end::Text*/}
                      {/*begin::Stats*/}
                      <div className="d-flex">
                        {/*begin::Stat*/}
                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                          {/*begin::Date*/}
                          <span className="fs-6 text-gray-700 fw-bold">Feb 6, 2021</span>
                          {/*end::Date*/}
                          {/*begin::Label*/}
                          <div className="fw-semibold text-gray-500">Due Date</div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Stat*/}
                        {/*begin::Stat*/}
                        <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                          {/*begin::Number*/}
                          <span className="fs-6 text-gray-700 fw-bold">$
                            <span className="ms-n1" data-kt-countup="true" data-kt-countup-value="284,900.00">0</span></span>
                          {/*end::Number*/}
                          {/*begin::Label*/}
                          <div className="fw-semibold text-gray-500">Budget</div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Stat*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Body*/}
                    {/*begin::Footer*/}
                    <div className="d-flex flex-stack mt-auto bd-highlight">
                      {/*begin::Users group*/}
                      <div className="symbol-group symbol-hover flex-nowrap">
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Melody Macy">
                          <img alt="Pic" src="assets/media/avatars/300-2.jpg" />
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Michael Eberon">
                          <img alt="Pic" src="assets/media/avatars/300-3.jpg" />
                        </div>
                        <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="Susan Redwood">
                          <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                        </div>
                      </div>
                      {/*end::Users group*/}
                      {/*begin::Actions*/}
                      <a href="apps/projects/project.html" className="d-flex align-items-center text-primary opacity-75-hover fs-6 fw-semibold">View Project
                        <i className="ki-duotone ki-exit-right-corner fs-4 ms-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i></a>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Footer*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Card widget 18*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::Chart widget 36*/}
          <div className="card card-flush overflow-hidden h-lg-100">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Performance</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">1,046 Inbound Calls today</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" data-kt-daterangepicker-range="today" className="btn btn-sm btn-light d-flex align-items-center px-4">
                  {/*begin::Display range*/}
                  <div className="text-gray-600 fw-bold">Loading date range...</div>
                  {/*end::Display range*/}
                  <i className="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                  </i>
                </div>
                {/*end::Daterangepicker*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Card body*/}
            <div className="card-body d-flex align-items-end p-0">
              {/*begin::Chart*/}
              <div id="kt_charts_widget_36" className="min-h-auto w-100 ps-4 pe-6" style={{height: 300}} />
              {/*end::Chart*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Chart widget 36*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::Chart Widget 35*/}
          <div className="card card-flush h-md-100">
            {/*begin::Header*/}
            <div className="card-header pt-5 mb-6">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center mb-2">
                  {/*begin::Currency*/}
                  <span className="fs-3 fw-semibold text-gray-500 align-self-start me-1">$</span>
                  {/*end::Currency*/}
                  {/*begin::Value*/}
                  <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">3,274.94</span>
                  {/*end::Value*/}
                  {/*begin::Label*/}
                  <span className="badge badge-light-success fs-base">
                    <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>9.2%</span>
                  {/*end::Label*/}
                </div>
                {/*end::Statistics*/}
                {/*begin::Description*/}
                <span className="fs-6 fw-semibold text-gray-500">Avg. Agent Earnings</span>
                {/*end::Description*/}
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                  <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </button>
                {/*begin::Menu 2*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Admin Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Staff Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Member Group</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body py-0 px-0">
              {/*begin::Nav*/}
              <ul className="nav d-flex justify-content-between mb-3 mx-9">
                {/*begin::Item*/}
                <li className="nav-item mb-3">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active" data-bs-toggle="tab" id="kt_charts_widget_35_tab_1" href="#kt_charts_widget_35_tab_content_1">1d</a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_2" href="#kt_charts_widget_35_tab_content_2">5d</a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_3" href="#kt_charts_widget_35_tab_content_3">1m</a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_4" href="#kt_charts_widget_35_tab_content_4">6m</a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
                {/*begin::Item*/}
                <li className="nav-item mb-3">
                  {/*begin::Link*/}
                  <a className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px" data-bs-toggle="tab" id="kt_charts_widget_35_tab_5" href="#kt_charts_widget_35_tab_content_5">1y</a>
                  {/*end::Link*/}
                </li>
                {/*end::Item*/}
              </ul>
              {/*end::Nav*/}
              {/*begin::Tab Content*/}
              <div className="tab-content mt-n6">
                {/*begin::Tap pane*/}
                <div className="tab-pane fade active show" id="kt_charts_widget_35_tab_content_1">
                  {/*begin::Chart*/}
                  <div id="kt_charts_widget_35_chart_1" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                  {/*end::Chart*/}
                  {/*begin::Table container*/}
                  <div className="table-responsive mx-9 mt-n6">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-100px" />
                          <th className="min-w-100px text-end pe-0" />
                          <th className="text-end min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-danger">-139.34</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">3:10 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$3,207.03</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-success">+576.24</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">3:55 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$3,274.94</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-success">+124.03</span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_2">
                  {/*begin::Chart*/}
                  <div id="kt_charts_widget_35_chart_2" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                  {/*end::Chart*/}
                  {/*begin::Table container*/}
                  <div className="table-responsive mx-9 mt-n6">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-100px" />
                          <th className="min-w-100px text-end pe-0" />
                          <th className="text-end min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,345.45</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-success">+134.02</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">11:35 AM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-primary">-124.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">3:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-danger">+144.04</span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_3">
                  {/*begin::Chart*/}
                  <div id="kt_charts_widget_35_chart_3" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                  {/*end::Chart*/}
                  {/*begin::Table container*/}
                  <div className="table-responsive mx-9 mt-n6">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-100px" />
                          <th className="min-w-100px text-end pe-0" />
                          <th className="text-end min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">3:20 AM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$3,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-primary">+185.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">12:30 AM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-danger">+124.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-success">-154.03</span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_4">
                  {/*begin::Chart*/}
                  <div id="kt_charts_widget_35_chart_4" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                  {/*end::Chart*/}
                  {/*begin::Table container*/}
                  <div className="table-responsive mx-9 mt-n6">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-100px" />
                          <th className="min-w-100px text-end pe-0" />
                          <th className="text-end min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-warning">+124.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">5:30 AM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$1,756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-info">+144.65</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">4:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,085.25</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-primary">+154.06</span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_charts_widget_35_tab_content_5">
                  {/*begin::Chart*/}
                  <div id="kt_charts_widget_35_chart_5" data-kt-chart-color="primary" className="min-h-auto h-200px ps-3 pe-6" />
                  {/*end::Chart*/}
                  {/*begin::Table container*/}
                  <div className="table-responsive mx-9 mt-n6">
                    {/*begin::Table*/}
                    <table className="table align-middle gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr>
                          <th className="min-w-100px" />
                          <th className="min-w-100px text-end pe-0" />
                          <th className="text-end min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">2:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$2,045.04</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-warning">+114.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">3:30 AM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-primary">-124.03</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a href="#" className="text-gray-600 fw-bold fs-6">10:30 PM</a>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="text-gray-800 fw-bold fs-6 me-1">$1.756.26</span>
                          </td>
                          <td className="pe-0 text-end">
                            <span className="fw-bold fs-6 text-info">+165.86</span>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*end::Tap pane*/}
              </div>
              {/*end::Tab Content*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Chart Widget 35*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-8">
          {/*begin::Table widget 14*/}
          <div className="card card-flush h-md-100">
            {/*begin::Header*/}
            <div className="card-header pt-7">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-800">Projects Stats</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">Updated 37 minutes ago</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">History</a>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-6">
              {/*begin::Table container*/}
              <div className="table-responsive">
                {/*begin::Table*/}
                <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                  {/*begin::Table head*/}
                  <thead>
                    <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                      <th className="p-0 pb-3 min-w-175px text-start">ITEM</th>
                      <th className="p-0 pb-3 min-w-100px text-end">BUDGET</th>
                      <th className="p-0 pb-3 min-w-100px text-end">PROGRESS</th>
                      <th className="p-0 pb-3 min-w-175px text-end pe-12">STATUS</th>
                      <th className="p-0 pb-3 w-125px text-end pe-7">CHART</th>
                      <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-3">
                            <img src="assets/media/stock/600x600/img-49.jpg" className="" alt="" />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Mivy App</a>
                            <span className="text-gray-500 fw-semibold d-block fs-7">Jane Cooper</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <span className="text-gray-600 fw-bold fs-6">$32,400</span>
                      </td>
                      <td className="text-end pe-0">
                        {/*begin::Label*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>9.2%</span>
                        {/*end::Label*/}
                      </td>
                      <td className="text-end pe-12">
                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                      </td>
                      <td className="text-end pe-0">
                        <div id="kt_table_widget_14_chart_1" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                          <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-3">
                            <img src="assets/media/stock/600x600/img-40.jpg" className="" alt="" />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Avionica</a>
                            <span className="text-gray-500 fw-semibold d-block fs-7">Esther Howard</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <span className="text-gray-600 fw-bold fs-6">$256,910</span>
                      </td>
                      <td className="text-end pe-0">
                        {/*begin::Label*/}
                        <span className="badge badge-light-danger fs-base">
                          <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>0.4%</span>
                        {/*end::Label*/}
                      </td>
                      <td className="text-end pe-12">
                        <span className="badge py-3 px-4 fs-7 badge-light-warning">On Hold</span>
                      </td>
                      <td className="text-end pe-0">
                        <div id="kt_table_widget_14_chart_2" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                          <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-3">
                            <img src="assets/media/stock/600x600/img-39.jpg" className="" alt="" />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Charto CRM</a>
                            <span className="text-gray-500 fw-semibold d-block fs-7">Jenny Wilson</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <span className="text-gray-600 fw-bold fs-6">$8,220</span>
                      </td>
                      <td className="text-end pe-0">
                        {/*begin::Label*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>9.2%</span>
                        {/*end::Label*/}
                      </td>
                      <td className="text-end pe-12">
                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                      </td>
                      <td className="text-end pe-0">
                        <div id="kt_table_widget_14_chart_3" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                          <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-3">
                            <img src="assets/media/stock/600x600/img-47.jpg" className="" alt="" />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">Tower Hill</a>
                            <span className="text-gray-500 fw-semibold d-block fs-7">Cody Fisher</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <span className="text-gray-600 fw-bold fs-6">$74,000</span>
                      </td>
                      <td className="text-end pe-0">
                        {/*begin::Label*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>9.2%</span>
                        {/*end::Label*/}
                      </td>
                      <td className="text-end pe-12">
                        <span className="badge py-3 px-4 fs-7 badge-light-success">Complated</span>
                      </td>
                      <td className="text-end pe-0">
                        <div id="kt_table_widget_14_chart_4" className="h-50px mt-n8 pe-7" data-kt-chart-color="success" />
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                          <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-3">
                            <img src="assets/media/stock/600x600/img-48.jpg" className="" alt="" />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">9 Degree</a>
                            <span className="text-gray-500 fw-semibold d-block fs-7">Savannah Nguyen</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end pe-0">
                        <span className="text-gray-600 fw-bold fs-6">$183,300</span>
                      </td>
                      <td className="text-end pe-0">
                        {/*begin::Label*/}
                        <span className="badge badge-light-danger fs-base">
                          <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>0.4%</span>
                        {/*end::Label*/}
                      </td>
                      <td className="text-end pe-12">
                        <span className="badge py-3 px-4 fs-7 badge-light-primary">In Process</span>
                      </td>
                      <td className="text-end pe-0">
                        <div id="kt_table_widget_14_chart_5" className="h-50px mt-n8 pe-7" data-kt-chart-color="danger" />
                      </td>
                      <td className="text-end">
                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                          <i className="ki-duotone ki-black-right fs-2 text-gray-500" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
              </div>
              {/*end::Table*/}
            </div>
            {/*end: Card Body*/}
          </div>
          {/*end::Table widget 14*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row gx-5 gx-xl-10">
        {/*begin::Col*/}
        <div className="col-xl-4 mb-5 mb-xl-0">
          {/*begin::Chart widget 31*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Header*/}
            <div className="card-header pt-7 mb-7">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-800">Warephase stats</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">8k social visitors</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">PDF Report</a>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body d-flex align-items-end pt-0">
              {/*begin::Chart*/}
              <div id="kt_charts_widget_31_chart" className="w-100 h-300px" />
              {/*end::Chart*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Chart widget 31*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-8">
          {/*begin::Chart widget 24*/}
          <div className="card card-flush overflow-hidden h-xl-100">
            {/*begin::Header*/}
            <div className="card-header py-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">Human Resources</span>
                <span className="text-gray-500 mt-1 fw-semibold fs-6">Reports by states and ganders</span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                  <i className="ki-duotone ki-dots-square fs-1">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                  </i>
                </button>
                {/*begin::Menu 2*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Ticket</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Customer</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Admin Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Staff Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">Member Group</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">New Contact</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Chart*/}
              <div id="kt_charts_widget_24" className="min-h-auto" style={{height: 300}} />
              {/*end::Chart*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Chart widget 24*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
    </div>
    {/*end::Content container*/}
  </div>
  {/*end::Content*/}
</div>

        </>
    )
}

export default Dashboard