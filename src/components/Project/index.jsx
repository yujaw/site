import { Fragment } from "react"

const Project = () => {
    return (
        <Fragment>
            <div className="project-container">
                <div className="project">
                    <div className="title-container">
                        <div className="title">
                            My Projects
                        </div>
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/project/gfive.png" alt="Gfive" />
                                </div>
                            </div>
                            <div className="text-container">
                                <div className="title">Sample Gfive Technology's Ecommerce Website</div>
                                <div className="sub">Built an ecommerce website using Mern Stack and hosted it using Github Pages</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Project