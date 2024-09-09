import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={'/'} class="nav-link " aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/about'} class="nav-link " aria-current="page" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/contact'} class="nav-link " aria-current="page" >Contct</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/service'} class="nav-link " aria-current="page" >Service</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header