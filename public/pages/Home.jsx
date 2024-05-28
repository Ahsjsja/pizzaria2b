import {link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../App.css'

const Home = () => {

    return (
        <div>
            <link to='/inicio'>
                <img className='img-fluid' src={logo}
                    alt='logo' />
            </link>
        </div>
    )
}
export default Home