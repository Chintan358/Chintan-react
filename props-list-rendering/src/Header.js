import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to={'/'} class="nav-link" aria-current="page" >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to={'/contact/34/bbb'} class="nav-link" >Contact</NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink to={'/service'} class="nav-link" >Service</NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    My Page
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to={'/page/page1'} class="dropdown-item" >Page 1</NavLink>
                                    <NavLink to={'/page/page2'} class="dropdown-item" >Page 2</NavLink>
                                    <div class="dropdown-divider"></div>
                                    <NavLink to={'/page/page3'} class="dropdown-item" >Page 3</NavLink>
                                </div>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header