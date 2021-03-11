import { React } from 'react';
import "./Nav.css"
function Nav(){
  return(
          <div>
          <header className="header-area header-sticky" />
          <div className="container">
            <div className="row">
                  <div className="logo">
                    <a href="index.html" className="logo">
                      <img src="../images/klassy-logo.png" align="klassy cafe html template" />
                    </a>
                  </div>
                  <nav class="nav">
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Menu</a>
                    <a class="nav-link" href="#">Chef</a>
                    <a class="nav-link" href="#">Contact Us</a>                    
                  </nav>
              </div>
          </div>
        </div>

  )
}

export default Nav;