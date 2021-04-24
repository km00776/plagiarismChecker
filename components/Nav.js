import Link from 'next/link' 
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return(
        <nav className = {navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="https://github.com/km00776">My GitHub</Link>
                </li>
            </ul>
        </nav>
    ) 
}

export default Nav