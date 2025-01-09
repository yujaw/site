import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        msg: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setContact({
            ...contact,
            [name]: value
        })
    }

    return (
        <Fragment>
            <div className="contact-container">
                <div className="contact">
                    <div className="content">
                        <div className="left">
                            {
                                window.innerWidth > 768 ?
                                    (
                                        <div className="title_cont">
                                            <div className="utils">
                                                <div className="dot" />
                                                <div className="dot" />
                                            </div>
                                            <span className="title">contact me</span>
                                        </div>
                                    )
                                    : null
                            }
                            <div className="container">
                                <div className="cont">
                                    <Link to={'https://twitter.com/ManandharYujaw'} target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                        {window.innerWidth > 768 ? 'ManandharYujaw' : null}
                                    </Link>
                                </div>
                                <div className="cont">
                                    <Link to="https://www.linkedin.com/in/yujaw-manandhar-4bb40b285/" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                        </svg>
                                        {window.innerWidth > 768 ? 'Yujaw Manandhar' : null}
                                    </Link>
                                </div>
                                <div className="cont">
                                    <Link to="mailto:yujawmanandhar@gmail.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                        </svg>
                                        {window.innerWidth > 768 ? 'yujawmanandhar@gmail.com' : null}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title_cont">
                                <div className="utils">
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                                <span className="title">
                                    send your comments
                                </span>
                            </div>
                            <div className='form'>
                                <div className="input">
                                    <div className="cont">
                                        <label>
                                            {
                                                window.innerWidth > 768 ?
                                                    (
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15">
                                                            <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
                                                            <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
                                                        </svg>
                                                    )
                                                    : null
                                            }
                                        </label>
                                        <input name="name" placeholder="full name" value={contact.name} type="text" onChange={handleChange} />
                                    </div>
                                    <span className="req">
                                        This Field is Required*
                                    </span>
                                </div>
                                <div className="input">
                                    <div className="cont">
                                        <label>
                                            {
                                                window.innerWidth > 768 ?
                                                    (
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15">
                                                            <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
                                                        </svg>
                                                    )
                                                    : null
                                            }
                                        </label>
                                        <input name="email" placeholder="email" type="text" value={contact.email} onChange={handleChange} />
                                    </div>
                                    <span className="req">
                                        This Field is Required*
                                    </span>
                                </div>
                                <div className="input">
                                    <div className="cont">
                                        <label>
                                            {
                                                window.innerWidth > 768 ?
                                                    (
                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="15" height="15"                                            >
                                                            <path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" />
                                                        </svg>
                                                    )
                                                    : null
                                            }
                                        </label>
                                        <input type="tel" value={contact.phone} placeholder="phone" name="phone" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="txt_cont">
                                    <textarea name="msg" value={contact.msg} className="message" placeholder="write Link message" onChange={handleChange}></textarea>
                                    <span className="req">
                                        This Field is Required*
                                    </span>
                                </div>
                                <input type="button" value="Send Message" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact