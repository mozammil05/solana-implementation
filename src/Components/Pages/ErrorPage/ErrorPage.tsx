import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ErrorPage.scss';


const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="error_page">
            <h2>404</h2>
            <h3>The page you are looking for can’t be found</h3>
            <p>Check the web address and try again.</p>
            <Link to="" onClick={() => navigate(-1)}>
                Back
            </Link>
        </div>
    )
}

export default ErrorPage