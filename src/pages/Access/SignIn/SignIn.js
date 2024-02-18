import { Link } from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'
import Header from '../../../components/Navigation/Header/Header'
import './SignIn.css'

const SignIn = () => {
    return (
        <main className='background__topographic'>
            <Header />
            <section className='signin'>
                <Logo />
                <div className='signin__inputs'>
                    <div className='signin__division'>
                        <label className='signin__label' htmlFor='username'>Username</label>
                        <input className='signin__input' autoComplete="off" type='text' id='username' placeholder='Enter your Username'></input>
                    </div>
                    <div className='signin__division'>
                        <label className='signin__label' htmlFor='password'>Password</label>
                        <input className='signin__input' type='password' id='password' placeholder='Enter your Password'></input>
                    </div>
                </div>
                <p className='signin__forget'>Forgot password?</p>
                <div className='signin__buttons'>
                    <button className='signin__button signin__signin'>Sign In</button>
                    <Link to='/SignUp'><button className='signin__button signin__signup'>Sign Up</button></Link>
                </div>
            </section>
        </main>
    )
}

export default SignIn
