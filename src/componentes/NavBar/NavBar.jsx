import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <h2>"Arrimos Morales"</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Productos
                        </li>
                        <li className="nav-item">
                            Galeria
                        </li>  
                        <li className="nav-item">
                            Nuestra Historia
                        </li>
                        <li className="nav-item">
                            Contacto
                        </li>
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>

    )
}

export default NavBar