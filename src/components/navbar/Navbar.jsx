import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand bg-success">
            {/* Sacar los colores de boots, hacerlos en el css */}
            <a className="navbar-brand" href="#">Happets</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li>
                        <a href="">Collares</a>
                    </li>
                    <li>
                        <a href="">Pretales</a>
                    </li>
                    <li>
                        <a href="">Chapas Identificatorias</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;