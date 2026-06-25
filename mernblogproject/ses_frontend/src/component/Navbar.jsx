import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {

        axios.get('http://localhost:2000/user/logout')
            .then(() => {
                alert("Logged Out")
                navigate('/login')
            })
            .catch((err) => console.log(err))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <NavLink
                    className="navbar-brand"
                    to="/"
                >
                    Blog App
                </NavLink>
                <NavLink
                        className="btn btn-primary me-2"
                        to="/add"
                    >
                        addblog
                    </NavLink>

                <div>

                    <NavLink
                        className="btn btn-primary me-2"
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className="btn btn-success me-2"
                        to="/register"
                    >
                        Register
                    </NavLink>

                    <button
                        className="btn btn-danger"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar