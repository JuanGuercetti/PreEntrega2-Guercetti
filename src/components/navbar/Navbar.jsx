import './NavBar.css'
import logoBlack from './assets/logoBlack.png'
import CartWidget from '../CartWidget/CartWidget.jsx'

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand">
            {/* Sacar los colores de boots, hacerlos en el css */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoBlack} alt="Logo" className="logo-img"/>
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav nav-underline">
                        <li><a href="" className='nav-link link-light'>Correas</a></li>
                        <li><a href="" className='nav-link link-light'>Collares</a></li>
                            {/* Regulables y tradicionales
                            Hacer menú desplegable */}
                        <li><a href="" className='nav-link link-light'>Pretales</a></li>
                        <li><a href="" className='nav-link link-light'>Chapas Identificatorias</a></li>
                        <li><a href="" className='nav-link link-light disabled'>Bandanas</a></li>
                            {/* Proximamente */}               
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
        </>
    )
}

export default NavBar;