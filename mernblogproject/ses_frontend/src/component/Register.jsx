import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        axios.post(
            'http://localhost:2000/user/register',
            user
        )
            .then((res) => {
                alert("Registration Successful")
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
                alert("Registration Failed")
            })
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">

                    <div className="card shadow">
                        <div className="card-body">

                            <h2 className="text-center mb-4">
                                Register
                            </h2>

                            <form onSubmit={handleRegister}>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                name: e.target.value
                                            })
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
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
                                    className="btn btn-success w-100"
                                >
                                    Register
                                </button>

                            </form>

                            <p className="mt-3 text-center">
                                Already have an account?
                                <NavLink to="/login">
                                    {" "}Login
                                </NavLink>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register