import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='header__logo'>
                    <img className='header__image' src={Logo} />
                    <div className='header__beta'>BETA</div>
                </div>
            </Link>
            <nav className='header__navigation'>
                <ul className='header__itens'>
                    <Link to='/'><li className='header__item'>Home</li></Link>
                    <Link to='/Search'><li className='header__item'>About</li></Link>
                    <li className='header__item'>Docs</li>
                    <li className='header__item'>Community</li>
                    <li className='header__item'>Tutorial</li>
                </ul>
            </nav>
            <div className='header__buttons'>
                <Link to='/SignIn'><button className='header__button header__signin'>Sign In</button></Link>
                <Link to='/SignUp'><button className='header__button header__signup'>Sign Up</button></Link>
            </div>
        </header>
    )
}

export default Header
