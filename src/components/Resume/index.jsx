import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <Fragment>
            <section className="resume-container">
                <div className="resume">
                    <div className="download-container">
                        <div className="download">
                            <div className="title">Resume</div>
                            <div className="content">
                                Full CV can be downloaded <Link to={'/documents/resume.pdf'} target='_blank' rel='noreferrer'>here</Link>.
                            </div>
                        </div>
                    </div>
                    <div className="education-container">
                        <div className="education">
                            <div className="title">
                                Education
                            </div>
                            <div className="content">
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2021-2023
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Senior High School
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                Department of Science Uniglobe Higher Secondary School.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2019-2020
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Junior High School
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                Occidental Public School
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="education-container">
                        <div className="education">
                            <div className="title">
                                Projects
                            </div>
                            <div className="content">
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2023
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Yujaw Manandhar Portfolio
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://www.yujawmanandhar.com.np">https://www.yujawmanandhar.com.np</a>
                                                <div className="sub">
                                                    Build a personal portfolio using ReactJS
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2024
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Gfive Sample Website
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://gfive.yujawmanandhar.com.np" target="_blank" rel='noreferrer'>https://gfive.yujawmanandhar.com.np</a>
                                                <div className="sub">
                                                    Build a working e-commerce web application using MERN stack and deployed it using Github Pages.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Resume