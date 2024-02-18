import { Link } from 'react-router-dom'
import Logo from '../../../components/Logo/Logo'
import Header from '../../../components/Navigation/Header/Header'
import './SignUp.css'

const SignUp = () => {
    return (
        <main className='background__topographic'>
            <Header />
            <section className='signup'>
                <Logo />
                <div className='signup__inputs'>
                    <div className='signup_column'>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='firstname'>First Name</label>
                            <input className='signup__input' autoComplete="off" type='text' id='firstname' placeholder='Enter your First Name'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='job'>Job Title</label>
                            <input className='signup__input' autoComplete="off" type='text' id='job' placeholder='Enter your Job Title'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='phone'>Phone Number</label>
                            <input className='signup__input' autoComplete="off" type='text' id='phone' placeholder='Enter your Phone Number'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='country'>Country</label>
                            <input className='signup__input' autoComplete="off" type='text' id='country' placeholder='Enter your Country'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='username'>Username</label>
                            <input className='signup__input' autoComplete="off" type='text' id='username' placeholder='Enter your Username'></input>
                        </div>
                    </div>
                    <div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='lastname'>Last Name</label>
                            <input className='signup__input' autoComplete="off" type='text' id='lastname' placeholder='Enter your Last Name'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='email'>Email</label>
                            <input className='signup__input' autoComplete="off" type='text' id='email' placeholder='Enter your Email'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='company'>Company</label>
                            <input className='signup__input' autoComplete="off" type='text' id='company' placeholder='Enter your Company'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='postal'>Zip/Postal Code</label>
                            <input className='signup__input' autoComplete="off" type='text' id='postal' placeholder='Enter your Zip/Postal Code'></input>
                        </div>
                        <div className='signup__division'>
                            <label className='signup__label' htmlFor='password'>Password</label>
                            <input className='signup__input' autoComplete="off" type='password' id='password' placeholder='Enter your Password'></input>
                        </div>
                    </div>
                </div>
                <div className='signup__buttons'>
                    <button className='signup__button signup__create'>CREATE ACCOUNT</button>
                    <Link to='/SignIn'><button className='signup__button signup__signin'>Sign In</button></Link>
                </div>
            </section>
        </main>
    )
}

export default SignUp
