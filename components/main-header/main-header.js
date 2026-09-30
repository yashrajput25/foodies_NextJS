"use client"
const { default: Link } = require("next/link")
import { usePathname } from 'next/navigation';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import '../../app/globals.css';


const MainHeader = () => {

    const path = usePathname();

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
                            <Link href='/meals' className={path.startsWith('/meals') ? classes.active : undefined}>
                                Browse Meals
                            </Link>
                        </li>

                        <li>
                            <Link href='/community' className={path.startsWith('/community') ? classes.active : undefined}>
                                Community
                            </Link>
                        </li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default MainHeader;