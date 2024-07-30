import { Link, NavLink } from 'react-router-dom'
import logo from "../asset/Pixellogo.png"
export const Header = () => {
  
    return (
        <header>
            <div>
                <Link to="/" className='logo' >
                    <img src={logo} alt='sau' />
                    <span> Pixel6</span>
                </Link>
            </div>
            <div className='List'>
                <ul>
                    <li>
                        <NavLink to="/" className="navlink">Customer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/custlist" className='navlink'>CustList</NavLink>
                    </li>
                </ul>

            </div>
        </header>
    )
}
