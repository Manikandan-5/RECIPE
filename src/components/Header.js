import React from 'react'
// import {banner1,banner2,banner3,banner4,banner6 } from '../Banner'

// const images=[banner1,banner2,banner3,banner4,banner6]
const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-white" id='navbar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src={require('../Banner/name.png')} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Home Cook</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Home">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Foods</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header