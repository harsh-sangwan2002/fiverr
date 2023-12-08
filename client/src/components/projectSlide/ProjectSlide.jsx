import React from 'react'
import './ProjectSlide.scss'
import { projects } from '../../data';
import ProjectCard from '../projectCard/ProjectCard';

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
                        projects.map(card => (
                            <SwiperSlide>
                                <ProjectCard item={card} key={card.id} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Slide
