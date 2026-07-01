import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light border-bottom">
   <div class="container p-2">
    <Link class="navbar-brand" to={"/"}><img src='media/images/logo.svg' style={{width: "25%"}}></img></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form class="d-flex" role="search">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" to={"/about"}>about</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to={"/product"}>product</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" to={"/pricing"}>pricing</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" to={"/support"}>support</Link>
        </li>
        
      </ul>
        
      </form>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar
