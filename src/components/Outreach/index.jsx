import { Fragment } from 'react'

const Outreach = () => {
    return (
        <Fragment>
            <section className="outreach-container">
                <div className="outreach">
                    <div className="title-container">
                        <div className="title">
                            Outreach
                        </div>
                        <div className="sub">
                            My diverse focus beyond academics.
                        </div>
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="text">
                                <div className="title">Nepal Scouts </div>
                                <div className="sub">I joined Nepal Scouts with the dual purpose of aiding others and acquiring essential survival skills for personal growth. Through my involvement with Nepal Scouts, I gained invaluable knowledge in survival techniques crucial for navigating natural disasters.</div>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/outreach/scout.png" alt="outreach" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Outreach