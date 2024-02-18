import Logo from '../../components/Logo/Logo'
import Header from '../../components/Navigation/Header/Header'
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <section className='home__apresentation'>
                <Logo />
                <div className='home__apresentation_buttons'>
                    <button className='home__apresentation_button home__apresentation_start'>Start Using</button>
                    <button className='home__apresentation_button home__apresentation_how'>How to use</button>
                </div>
            </section>
        </>
    )
}

export default Home
