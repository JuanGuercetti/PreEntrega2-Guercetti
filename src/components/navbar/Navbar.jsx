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
                        <li ><Link to='/category/correas' className='nav-link link-light'>Correas</Link></li>
                        <li><Link to='/category/collares' className='nav-link link-light'>Collares</Link></li>
                        <li><Link to='/category/pretales' className='nav-link link-light'>Pretales</Link></li>
                    </ul>
                </div>
            </div>

            <CartWidget />
        </nav>
        </>
    )
}

export default NavBar;