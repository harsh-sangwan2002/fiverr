import React from 'react'
import './Slide.scss'
import { cards } from '../../data';
import CatCard from '../catCard/CatCard';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
    return (
        <div className='slide'>

            <div className="container">
                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {
                        cards.map(card => (
                            <SwiperSlide>
                                <CatCard item={card} key={card.id} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Slide
