import './Navbar.css'
import logoBlack from './assets/logoBlack.png'
import CartWidget from '../CartWidget/CartWidget.jsx'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand bg-success">
            {/* Sacar los colores de boots, hacerlos en el css */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoBlack} alt="Logo" className="logo-img d-inline-block align-text-top"/>
                    Happets
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav nav-underline">
                        <li><a href="" className='nav-link'>Correas</a></li>
                        <li><a href="" className='nav-link'>Collares</a></li>
                            {/* Regulables y tradicionales
                            Hacer menú desplegable */}
                        <li><a href="" className='nav-link'>Pretales</a></li>
                        <li><a href="" className='nav-link'>Chapas Identificatorias</a></li>
                        <li><a href="" className='nav-link disabled'>Bandanas</a></li>
                            {/* Proximamente */}               
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
        </>
    )
}

export default Navbar;