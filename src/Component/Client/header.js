import React from 'react'
import NavClient from './nav'
import { Link } from 'react-router-dom'
const HeaderClient = () => {
    return (
        <header className="header-section d-none d-xl-block">
            <div className="header-wrapper">
                <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                {/* Start Header Logo */}
                                <div className="header-logo">
                                    <Link to="/home"><img src={process.env.PUBLIC_URL + '/logo192.png'} width="150" /> </Link>
                                </div>
                                {/* End Header Logo */}
                                {/* Start Header Main Menu */}
                                <div className="main-menu menu-color--black menu-hover-color--golden">
                                <NavClient/>    
                                </div>
                                {/* End Header Main Menu Start */}
                                {/* Start Header Action Link */}
                                <ul className="header-action-link action-color--black action-hover-color--golden">
                                    
                                    <li>
                                        <Link to="/admin/dashboars" >
                                        <i class="fas fa-user-lock"></i>
                                        </Link>
                                    </li>
                                </ul>
                                {/* End Header Action Link */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderClient
