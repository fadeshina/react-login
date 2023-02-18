/* eslint-disable import/no-anonymous-default-export */

import React, { useState } from "react"
import logos from "./background.png"
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Navbarlogin";

export default function (props) {
    
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <div>
        <Navbar />
      <div id="animate-area" className="Auth-form-container" style={{backgroundImage: `url(${logos})`, "background-repeat":"no-repeat", "background-size": "cover", }}>
        <form className="Auth-form">
          <div className="Auth-form-content" style={{"height": "420px",  "justifyContent":"center"}}>
            <h1 className="Auth-form-title" style={{color: "#348e47", "padding-bottom": "30px"}}>Sign In to WildTrack!</h1>
            <div className="text-center" >
            </div>
            <div className="form-group mt-3" style={{"margin-top":"20px"  }}>
              <label style={{"color":"#4E342E"  }}><b>Email address</b></label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label style={{"color":"#4E342E"  }}>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <p className="text-center mt-2" style={{"padding-bottom": "15px", "padding-top": "5px", "color":"#4E342E" }}>
            <a href="#" style={{"color":"#4E342E"  }}> Forgot your password?</a>
            </p>
            <div className="d-grid gap-2 mt-3" style={{"text-align": "center", "margin-bottom": "20px"}}>
              <button  style={{"border-radius": "45px", "background-color":"#348e47","border":"2px solid white", "padding-top":"15px","padding-bottom":"15px", "padding-left": "30px",  "padding-right": "30px"}} type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>

          </div>
        </form>
        <div className="signup-container" style={{"text-align":"center","background-color": "#348e47", "color": "white",  "width":"420px" , "height":"490px", "border-radius":"8px", "padding-top":"115px","display": "inline-block","padding-bottom":"20px", "justify-content": "center", "vertical-align":"middle"}}>
        <h1 style={{ "font-size" :"24px", "padding-bottom": "20px"}}><b>Hello, Friend!</b></h1>
        <h4 style={{"padding-bottom": "30px"}}>Enter your personal details and start your journey with us</h4>
        
        <button className="link-primary" onClick={changeAuthMode} style={{"border-radius": "45px", "background-color": "#348e47", "color": "white", "padding-top": "15px","padding-bottom": "15px", "padding-left": "35px", "padding-right": "35px", "border":"2px solid white"}}>
                <b>Create Account</b>
              </button>
              </div>
      </div>
      
      </div>
    )
  }

  return (
    <div>
          <Navbar />
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

        </div>
      </form>
      
    </div>
    </div>
  )
}