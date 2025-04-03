import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
    window.onscroll = () => {
        let { scrollX, scrollY } = window

        const { innerHeight, innerWidth } = window
        scrollX = Math.floor(scrollX)
        scrollY = Math.floor(scrollY)

        const perScrollX = Math.floor((scrollX / innerWidth) * 100);
        const perScrollY = Math.floor((scrollY / innerHeight) * 100);

        console.log(perScrollX, perScrollY);
    }

    const [opened, setOpened] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [])

    const toggleMenu = () => {
        setOpened(!opened);
        if (!opened) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when menu is opened
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when menu is closed
        }
    };

    return (
        <div className="navigation-container">
            <div className="logo-container">
                <Link className="logo" to={'/'}>
                    <div className="ico">

                    </div>
                    <div className="text">
                        Yujaw
                    </div>
                </Link>
            </div>
            <div className="navigation-wrapper">
                {
                    window.innerWidth > 768 || (window.innerWidth < 768 && opened)
                        ?
                        (
                            <div className="navigation">
                                {/* <Link to={'/portfolio'}>portfolio</Link> */}
                                <Link to={'/outreach'}>outreach</Link>
                                <Link to={'/resume'}>resume</Link>
                                <Link to={'/hobby'}>hobbies</Link>
                                <Link to={'/about'}>about</Link>
                            </div>
                        ) : null
                }
            </div>
            {
                !(window.innerWidth > 768)
                    ? (
                        <button
                            className={`menu ${opened ? 'opened' : ''}`}
                            onClick={toggleMenu}
                            aria-expanded={opened}
                            aria-label="Main Menu"
                        >
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <path
                                    className="line line1"
                                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                />
                                <path className="line line2" d="M 20,50 H 80" />
                                <path
                                    className="line line3"
                                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                />
                            </svg>
                        </button>
                    )
                    : null
            }
        </div>
    )
}

const Navigation = () => {
    return (
        MainNav()
    )
}

export default Navigation