"use client"

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image'
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
            <SwiperSlide><Image fill={true} src='/images/sgojo.Webp' alt='boruto' sizes="30vw, 40vw" priority={true}/></SwiperSlide>
            <SwiperSlide><Image fill={true} src='/images/borutom.Webp' alt='boruto' sizes="30vw, 40vw" priority={true}/></SwiperSlide>
            <SwiperSlide><Image fill={true} src='/images/one.Webp' alt='op' sizes="30vw, 40vw" priority={true}/></SwiperSlide>
        </Swiper>
    )
}
