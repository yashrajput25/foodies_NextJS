const { default: Link } = require("next/link")
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import '../../app/globals.css';
import NavLink from './nav-link';


const MainHeader = () => {

    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg}
                        alt='A plate with food on it'
                        priority
                    />
                    NextLevelFood
                </Link>

                <nav className={classes.nav}>

                    <ul>
                        
                        <li>
                            <NavLink href='/meals'>
                                Browse meals
                            </NavLink>
                        </li>

                        <li>
                            <NavLink href='/community'>
                                Food Community
                            </NavLink>
                        </li>
                        
                    </ul>

                </nav>

            </header>
        </>
    )
}

export default MainHeader;