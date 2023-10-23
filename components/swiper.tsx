"use client"

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay } from 'swiper/modules';
import styles from '../styles/styles.module.css';

export default function SwiperComponent() {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            className={styles.swiper}
        >
            <SwiperSlide><img src='/images/sgojo.Webp' alt='boruto'/></SwiperSlide>
            <SwiperSlide><img src='/images/borutom.Webp' alt='boruto'/></SwiperSlide>
            <SwiperSlide><img src='/images/one.Webp' alt='op'/></SwiperSlide>
        </Swiper>
    )
}
