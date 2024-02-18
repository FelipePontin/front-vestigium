import Bracket from '../../assets/images/Bracket.png'
import './Logo.css'

const Logo = () => {

    const arrow = '=>'

    return (
        <div className='home__apresentation_logo'>
            <img className='home__apresentation_image' src={Bracket} />
            <p className='home__apresentation_title'>vestigium</p>
            <p className='home__apresentation_subtitle'><span className='home__apresentation_arrow'>{arrow}</span> traces and logs</p>
            <div className='home__apresentation_shadow'></div>
        </div>
    )
}

export default Logo
