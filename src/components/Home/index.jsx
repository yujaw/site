import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Footer from '../Footer';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Project from '../Project'
import Navigation from '../Navigation';

// TODO add a section below home that shows my works

const Home = () => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    //   const [opened, setOpened] = useState(false);

    useEffect(() => {
        const newColumns = Math.floor(window.innerWidth / 50);
        const newRows = Math.floor(window.innerHeight / 50);

        setColumns(newColumns);
        setRows(newRows);

        window.addEventListener('resize', updateGrid);
        return () => window.removeEventListener('resize', updateGrid);
    }, []);

    const updateGrid = () => {
        const newColumns = Math.floor(window.innerWidth / 50);
        const newRows = Math.floor(window.innerHeight / 50);

        setColumns(newColumns);
        setRows(newRows);
    };

    const createTile = (index) => {
        return <div key={index} className="tile"></div>;
    };

    const createTiles = (quantity) => {
        const tiles = Array.from(Array(quantity), (_, index) => createTile(index));
        return tiles;
    };

    const createGrid = () => {
        const tiles = createTiles(columns * rows);
        return tiles;
    };

    const tileAnim = (col, row) => {
        const tileIndex = col + (row - 1) * columns;
        const tile = document.querySelector(`.tile:nth-child(${tileIndex})`);

        const color = ['orange', 'red', 'blue', 'green', 'yellow']

        if (tile) {
            tile.style.animation = 'hover 1s ease';
            // tile.style.background = color.selec

            setTimeout(() => {
                tile.style.animation = '';
                tile.style.background = ''
            }, 800);
        }
    };

    const handleMouseMove = (e) => {
        let { clientX, clientY } = e;

        clientX += window.scrollX
        clientY += window.scrollY

        let col = Math.floor(clientX / 50) + 1;
        let row = Math.floor(clientY / 50) + 1;

        if (col > columns) {
            col = columns;
        }

        if (row > rows) {
            row = rows;
        }

        tileAnim(col, row);
    };

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [])

    //   const toggleMenu = () => {
    //     setOpened(!opened);
    //     if (!opened) {
    //       document.body.style.overflow = 'hidden'; // Disable scrolling when menu is opened
    //     } else {
    //       document.body.style.overflow = 'auto'; // Enable scrolling when menu is closed
    //     }
    //   };

    //   const Portfolio = () => {
    //     return (
    //       <Fragment>
    //         <div className="portfolio-container">
    //           <div className="portfolio">
    //             <div className="title-container">
    //               <div className="title">Portfolio</div>
    //             </div>
    //             <div className="content">
    //               <Swiper
    //                 spaceBetween={50}
    //                 slidesPerView={3}
    //               >
    //                 <SwiperSlide>
    //                   <div className="cont">
    //                     Hello World'ssss
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="cont">
    //                     Hello World'ssss
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="cont">
    //                     Hello World'ssss
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="cont">
    //                     Hello World'ssss
    //                   </div>
    //                 </SwiperSlide>
    //                 <SwiperSlide>
    //                   <div className="cont">
    //                     Hello World'ssss
    //                   </div>
    //                 </SwiperSlide>
    //               </Swiper>
    //             </div>
    //           </div>
    //         </div>
    //       </Fragment>
    //     )
    //   }

    return (
        <Fragment>
            <div className="home-wrapper">
                <div className="home-container" onMouseMove={handleMouseMove}>

                    {
                        window.innerWidth > 768
                            ? (
                                <div className="home-navigation">
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
                                        <div className="navigation">
                                            {/* <Link to={'/portfolio'}>portfolio</Link> */}
                                            <Link to={'/outreach'}>outreach</Link>
                                            <Link to={'/resume'}>resume</Link>
                                            <Link to={'/hobby'}>hobbies</Link>
                                            <Link to={'/about'}>about</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Navigation />
                            )
                    }
                    {
                        window.innerWidth > 768
                            ? (
                                <div className="wrapper" style={{ '--columns': columns, '--rows': rows }}>
                                    {
                                        createGrid()
                                    }
                                </div>
                            ) : null
                    }
                    <div className="content">
                        <div className="left">
                            <div className='text'>
                                Developer & Student based in Kathmandu, Nepal.
                            </div>
                        </div>
                        <div className="right">
                            <span>Hello<span>.</span></span>
                            <span>I am</span>
                            <span>Yujaw</span>
                        </div>
                    </div>
                </div>
                {/* <div className="home-content-wrapper">
                    <Project />
                </div> */}
            </div>
        </Fragment >
    );
};

export default Home;
