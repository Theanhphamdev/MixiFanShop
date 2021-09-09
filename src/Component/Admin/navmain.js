import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <>
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column nav nav-pills flex-column mb-auto">
              <li className="nav-item ">
                <NavLink to="/admin/dashboars" className="nav-link text-white" activeClassName="active">
                <i class="fas fa-tachometer-alt"></i> DashBoars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/admin/products" activeClassName="active">
                  <span data-feather="shopping-cart" />
                  <i class="fas fa-th"></i> Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/admin/categories" activeClassName="active">
                  <span data-feather="shopping-cart" />
                  <i class="fas fa-align-left"></i> Categories
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/admin/order" activeClassName="active">
                  <span data-feather="shopping-cart" />
                  <i class="fas fa-table"></i> Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/admin/user" activeClassName="active">
                  <span data-feather="users" />
                  <i class="fas fa-user-circle"></i> User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/admin/setting" activeClassName="active">
                  <span data-feather="users" />
                  <i class="far fa-image"></i> Banner
                </NavLink>
              </li>
              
            </ul>
            
          </div>
        </nav>
    </>
  )
}

export default NavMain
