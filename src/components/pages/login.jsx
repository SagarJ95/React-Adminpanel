import React, { useState } from "react";


function Login() {
    const [formData, setfromData] = useState({
        email: "",
        password: ""
    })
    const { email, password } = formData;

    const getOnChange = (e) => {
        setfromData({ ...formData, [e.target.name]: e.target.value })
    }

    const HandleFormData = async (e) => {
        e.preventDefault()

        const body = {
            email: formData.email,
            password: formData.password
        }

        const storeInfo = await axios.post("https://keepinbasket.ortdemo.com/api/sign-in", body, {
            headers: {
                Accept: "application/json"
            }
        })

        if (storeInfo.status === 200) {
            const token = storeInfo.data.data[0].token
            localStorage.setItem("admin_access_token", token)
            setTimeout(() => {
                location.href = "/"
            }, 1000)
        }
    }

    return (
        <>
            <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
                <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-15">
                    <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10">
                        <form className="form w-100" onSubmit={(e) => HandleFormData(e)}>
                            <div className="text-center mb-11">
                                <h1 className="text-gray-900 fw-bolder mb-3">Welcome</h1>
                                <div className="text-gray-500 fw-semibold fs-6">Please sign in to your account below</div>
                            </div>
                            <div className="fv-row mb-8">
                                <label htmlFor="email" className="required form-label">Email</label>
                                <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" value={email} onChange={(e) => getOnChange(e)} />
                                <span className="errors text-danger email-error" />
                            </div>
                            <div className="fv-row mb-8" data-kt-password-meter="true">
                                <div className="mb-1">
                                    <label className="form-label fw-semibold fs-6 mb-2 required">Password</label>
                                    <div className="position-relative mb-3">
                                        <input className="form-control form-control-lg form-control-solid" type="password" placeholder="Password" name="password" autoComplete="off" value={password} onChange={(e) => getOnChange(e)} />
                                        <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                            <i className="ki-duotone ki-eye-slash fs-1"><span className="path1" /><span className="path2" /><span className="path3" /><span className="path4" /></i>
                                            <i className="ki-duotone ki-eye d-none fs-1"><span className="path1" /><span className="path2" /><span className="path3" /></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid mb-10">
                                <button type="submit" className="btn btn-dark">
                                    <span className="indicator-label">Sign In</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login