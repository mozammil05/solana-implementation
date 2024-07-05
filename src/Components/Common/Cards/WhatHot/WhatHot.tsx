import React from 'react'
import CommonCard from '../CommonCard/CommonCard'
import './WhatHot.scss';
import Slider from "react-slick";
import sampleImg1 from '../../../../Assets/Images/news-sample3.png';
import ButtonCustom from '../../Button/ButtonCustom';
import { RightArrowCirlce, TickIcon } from '../../../../Assets/Images/Icons/SvgIcons';

const WhatHot = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    // arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    // arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    // arrows: true,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    // arrows: true,
                }
            },
        ]
    };
    return (
        <CommonCard className="WhatHot" cardTitle="What's Hot 24h" viewAllNavigate='/auth/dashboard/libfi'>
            <Slider nextArrow={<button className="SlideBtn"><RightArrowCirlce /></button>} prevArrow={<button className="SlideBtn"><RightArrowCirlce /></button>} className="WhatHotSlider" {...settings}>
                {
                    [1, 2, 3, 4, 5].map((i, index) => {
                        return (
                            (
                                <div key={index} className="WhatHotSlide">
                                    <img src={sampleImg1} alt="" />
                                    <span className="tickIcon"><TickIcon /></span>
                                    <div className="WhatHotSlideBody">
                                        <p className="TokenName">
                                            GTH/LIBX
                                        </p>
                                        <h3>$3,2m vol</h3>
                                        <h5>145%</h5>
                                        <h6>+ Analyst Buy</h6>
                                        <ButtonCustom
                                            title="Trade"
                                            onClick={() => { }}
                                            fluid
                                        />
                                    </div>
                                </div>
                            )
                        )
                    })
                }
            </Slider>
        </CommonCard>
    )
}

export default WhatHot
