import React from "react";
import logo from "./wildtrack-logo.png"
import "bootstrap-icons/font/bootstrap-icons.css";
const Navbar = () => {
    return ( <nav class="navbar navbar-expand-lg navbar-light" style={{"background-color":"#4E342E"}}>
    <div class="container-fluid">
      
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="100" height="30"  style={{"margin-right":10}} />
    </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <div class = "navbar-nav d-flex flex-row" style={{"margin-right": 10}}>
          <i class="bi bi-eye-fill" style={{"color": "#c9c1b6", "padding-top":10}}></i>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"  style={{"color": "#c9c1b6"}}>Observations</a>
          </li>
          </div>
          <div class = "navbar-nav d-flex flex-row">
          <i class="bi bi-camera-fill" style={{"color": "#c9c1b6", "padding-top":10}}></i>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{"color": "#c9c1b6"}}>Images</a>
          </li>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{"color": "#c9c1b6"}}>Species</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{"color": "#c9c1b6"}}>Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" style={{"color": "#c9c1b6"}}>Feedback</a>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
);
}
export default Navbar