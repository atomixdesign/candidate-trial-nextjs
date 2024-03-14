import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { promises as fs, link } from 'fs';

const Carousel = async() => {
    const slideDataFile = await fs.readFile(process.cwd() + '/dataFiles/carousel.json', 'utf-8');
    const slides = JSON.parse(slideDataFile);

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel} data-flickity='{ "wrapAround": true }'>
                {slides.map(slide => (
                    <div className={styles.carouselCell} key={slide.id}>
                        <div className={styles.slideImg}>
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                width={slide.imgWidth}
                                height={slide.imgHeight}
                            />
                        </div>
                        <div className={styles.slideText}>
                            <div className={styles.slideTitle}>{slide.title}</div>
                            <div className={styles.slidePara}>{slide.text}</div>
                            <button className={styles.slideBtn}>{slide.btnTxt}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel