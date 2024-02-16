import './Navbar.css'
import logoHappets from '../../assets/logo.jpg'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand bg-success">
            {/* Sacar los colores de boots, hacerlos en el css */}
            {/* <a className="navbar-brand" href="#">Happets</a> */}
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logoHappets} alt="Logo" className="logo-img d-inline-block align-text-top"/>
                    Happets
                </a>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav nav-underline">
                    <li>
                        <a href="" className='nav-link'>Correas</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Collares</a>
                        {/* Regulables y tradicionales
                        Hacer menú desplegable */}
                    </li>
                    <li>
                        <a href="" className='nav-link'>Pretales</a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>Chapas Identificatorias</a>
                    </li>
                    <li>
                        <a href="" className='nav-link disabled'>Bandanas</a>
                        {/* Proximamente */}
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;