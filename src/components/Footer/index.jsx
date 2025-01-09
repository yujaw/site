import { Link } from "react-router-dom"
import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="cont links">
                        <div className="title">Email</div>
                        <div className="content">
                            <Link to={'mailto:yujawmanandhar@gmail.com'}>yujawmanandhar@gmail.com</Link>
                        </div>
                    </div>
                    <div className="cont links">
                        <div className="title">GitHub</div>
                        <div className="content">
                            <Link to={'https://github.com/yujaw'} target='_blank'>https://github.com/yujaw</Link>
                        </div>
                    </div>
                    <div className="cont links">
                        <div className="title">Instagram</div>
                        <div className="content">
                            <Link to={'https://www.instagram.com/sayami__yujaw/'} target={'_blank'}>https://www.instagram.com/sayami__yujaw/</Link>
                        </div>
                    </div>
                    <div className="cont links">
                        <div className="title">Facebook</div>
                        <div className="content">
                            <Link to={'https://www.facebook.com/yujaw.manandhar/'} target={'_blank'}>https://www.facebook.com/yujaw.manandhar/</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Footer