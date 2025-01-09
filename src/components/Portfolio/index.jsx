import React from 'react'
import { Fragment } from 'react'

const Portfolio = () => {
    return (
        <Fragment>
            <div className="portfolio-container">
                <div className="portfolio">
                    <div className="title-container">
                        <div className="title">
                            Portfolio
                        </div>
                        <div className="sub">
                            My Projects based on my interests.
                        </div>
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="text">
                                <div className="title">G-Five Technologies</div>
                                <div className="sub">Developed a comprehensive ecommerce platform for the sale of computer devices, encompassing both front-end and back-end functionality.</div>
                                <a href="https://online.gfive.com.np" className="link" target='_blank' rel='noreferrer'>https://online.gfive.com.np</a>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/portfolio/gfive.png" alt="outreach" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio