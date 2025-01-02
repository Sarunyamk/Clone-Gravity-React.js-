import React, { useState } from "react";
import { motion } from "motion/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentCompany = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam voluptas quos voluptates corporis dolores velit commodi, sed iusto fuga molestias laboriosam nostrum qui illum doloribus maiores ratione odit praesentium accusantium quo iure beatae explicabo, quibusdam facilis.",
            author: "Sarunya Vajapattana",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam voluptas quos voluptates corporis dolores velit commodi, sed iusto fuga molestias laboriosam nostrum qui illum doloribus maiores ratione odit praesentium accusantium quo iure beatae explicabo, quibusdam facilis.",
            author: "Frontend Developer",
        },
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam voluptas quos voluptates corporis dolores velit commodi, sed iusto fuga molestias laboriosam nostrum qui illum doloribus maiores ratione odit praesentium accusantium quo iure beatae explicabo, quibusdam facilis.",
            author: "Full stack Developer",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        afterChange: (current) => setCurrentSlide(current),
        customPaging: (i) => (
            <div
                style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: i === currentSlide ? "blue" : "white",
                    display: "inline-block",
                }}
            ></div>
        ),
        appendDots: (dots) => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px",
                }}
            >
                {dots}
            </div>
        ),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -60 }}  // เริ่มต้นที่ opacity 0 และ y 50
            whileInView={{ opacity: 1, y: 0 }}  // เมื่อข้อความเข้าสู่ viewport จะค่อยๆ ขึ้น
            transition={{ duration: 2 }}  // ระยะเวลาในการแอนิเมชั่น
            viewport={{ once: true, amount: 0.35 }}
            className="my-32">
            <section className="relative flex flex-col justify-center items-center gap-6 pt-20">
                <h1 className="text-4xl md:text-5xl font-semi-bold">I am a good Employee</h1>
                <div className="w-96 text-sm font-bold text-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam
                        voluptas quos voluptates corporis dolores velit commodi, sed iusto
                        fuga molestias laboriosam nostrum qui.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: [-800, -200],
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="absolute w-60 h-60 bg-custom-gradient rounded-full blur-2xl bottom-10 center right-10">
                </motion.div>
            </section>

            <div className="flex justify-center items-center w-full text-white">
                <Slider {...settings} className="w-full max-w-xl">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center text-center w-1/2 mx-auto rounded-lg shadow-md"
                        >
                            <div className="flex flex-col gap-5 px-10 py-4">
                                <p className="md:text-lg text-sm text-blue-300">{testimonial.text}</p>
                                <h3 className="font-bold">{testimonial.author}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default ContentCompany;
