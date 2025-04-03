import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

const About = () => {
    return (
        <Fragment>
            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="left">
                            <div className="title">
                                Yujaw <span>Manandhar</span>
                            </div>

                            <div className="content">
                                I'm Yujaw, a computer engineering student with a deep passion for technology, especially in the realm of penetration testing. As a student, I'm eager to delve deeper into this field and explore its intricacies further.

                                <div className="technologies">
                                    <div className="title">Technologies</div>
                                    <div className="container">
                                        <Swiper
                                            spaceBetween={50}
                                            slidesPerView={window.innerWidth < 768 ? 3 : 5}
                                            loop={true}
                                            modules={[EffectCoverflow, Autoplay]}
                                            className='swiper-container'
                                            effect='coverflow'
                                            coverflowEffect={{
                                                rotate: 20,
                                                stretch: 0,
                                                depth: 100,
                                                modifier: 1,
                                                slideShadows: true,
                                            }}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false
                                            }}
                                        >
                                            <SwiperSlide>
                                                <img src="./images/technology/js.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/html.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/node.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/php.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/python.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/mongodb.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/mysql.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/c.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/sass.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/react.png" alt="technology" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="./images/technology/css.png" alt="technology" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/profile.jpg" alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About