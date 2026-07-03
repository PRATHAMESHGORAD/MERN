import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
    email: '',
    password: ''
})
    

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        axios.post('http://localhost:2000/user/login', user,{
            withCredentials:true
        })
            .then((res)=>{localStorage.setItem("token",res.data.token);
                navigate("/");})
            .catch((err) => {
                console.log(err)
                alert("Login Failed")
            })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card shadow">
                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Login
                            </h2>

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                email: e.target.value
                                            })
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                password: e.target.value
                                            })
                                        }
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                            <p className="mt-3 text-center">
                                Don't have an account?
                                <NavLink to="/register">
                                    {" "}Register
                                </NavLink>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

    
}

export default Login