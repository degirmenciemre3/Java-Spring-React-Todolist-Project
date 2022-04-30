import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component{
    render(){
        return(
          <nav className="navbar navbar-expand navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={'/'}>Ana Sayfa</Link>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={'/login'} className="nav-link">Giriş Yap</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/register'} className="nav-link">Kayıt Ol</Link>
                    </li>
                  </ul>
                </div>
              </div>      
            </nav>
        )
    }
}