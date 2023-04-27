import {NavBarItem} from "./NavBarItem";
import logo from '../images/LOGO_APP_SIN_FONDO.png';
import './NavBar.css'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavBarItem
                  text='Home'
                  url='/'
                />

                <NavBarItem
                    text='Informacion sobre el maltrato'
                    url='/maltrato'
                />

                <NavBarItem
                    text='Informacion para el profesional'
                    url='/profesional'
                />

                <NavBarItem
                    text='Denuncias'
                    url='/denuncias'
                />

              </div>
            </div>
          </div>
        </nav>
    )
}