import './NavBar.css';
import logoBlack from './assets/logoBlack.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand sticky-top">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <img src={ logoBlack } alt="Logo de Happets" className="logo-img"/>
                </Link>

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