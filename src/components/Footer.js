import React from 'react'
import logo from '../assets/Logo2.png'
export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-5 mb-0 text-muted">© 2024 Shadow Clan Company, Inc</p>
                <a href="/" className="col-md-3 align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img className='text-center my-4' src={logo} width={200} height={100} alt="" />
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Features</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Pricing</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">About</a></li>
                </ul>
            </footer>
        </>
    )
}
