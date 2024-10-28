import React, { useState, useEffect, useRef } from 'react';
import TimelineCard from '../timelineCards';
import { timeline } from '@/lib/timeline.utils';
import { motion } from 'framer-motion';

export default function Timeline() {
    const containerRef = useRef(null);
    const progressBarRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slides = document.querySelectorAll('.timeline-slide');

        // Intersection Observer setup
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'), 10);
                        setCurrentSlide(index);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.5, // Trigger when 50% of the slide is in view
            }
        );

        slides.forEach((slide) => observer.observe(slide));

        return () => {
            slides.forEach((slide) => observer.unobserve(slide));
        };
    }, []);

    useEffect(() => {
        // Reset the progress bar animation each time `currentSlide` changes
        if (progressBarRef.current) {
            progressBarRef.current.style.transition = 'none';
            progressBarRef.current.style.transform = 'scaleX(0) translateX(0)';
            requestAnimationFrame(() => {
                progressBarRef.current.style.transition = 'transform 1s ease-out';
                progressBarRef.current.style.transform = 'scaleX(1) translateX(100px)';
            });
        }
    }, [currentSlide]);

    return (
        <>
            <div className="w-dvw flex md:hidden mb-10 justify-center items-center snap-center relative">
                <div className="md:w-1/2 w-full h-full flex justify-center mb-10 items-center flex-col gap-4">
                    <p className="md:text-4xl text-2xl text-white text-center">
                        Our timeline for building & shipping{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300">
                            unicorns.
                        </span>
                    </p>
                    <p className="md:text-lg text-base text-white text-center">
                        Paradigm shifting platforms shipped monthly for the foreseeable future.
                    </p>
                </div>
                <div className="absolute w-4/5 bg-slate-800 h-1 bottom-0 left-0 right-0 mx-auto">
                    <div className="relative w-full">
                        <div className='absolute w-1/2 border-2'></div>
                        <div
                            className="absolute rounded-full bg-[#15171c] w-6 h-6 -top-[8.8px] flex justify-center items-center left-1/2 "
                        >
                            <div className="relative rounded-full bg-slate-600 w-3 h-3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="relative w-full h-fit grid grid-flow-col place-items-center overflow-x-scroll snap-x snap-mandatory scroll-container"
                ref={containerRef}
            >
                <div className="w-screen md:flex hidden justify-center items-center snap-center relative">
                    <div className="md:w-1/2 w-full h-full p-32 flex justify-center items-center flex-col gap-4">
                        <p className="md:text-4xl text-2xl text-white text-center">
                            Our timeline for building & shipping{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300">
                                unicorns.
                            </span>
                        </p>
                        <p className="md:text-sm text-base w-3/4 text-white text-center">
                            Paradigm shifting platforms shipped monthly for the foreseeable future.
                        </p>
                    </div>
                </div>

                {/* Timeline slides */}
                {timeline.map((item, index) => (
                    <div
                        key={index}
                        className="timeline-slide relative"
                        data-index={index}
                    >
                        <TimelineCard {...item} id={index} progressBarRef={progressBarRef} />
                    </div>
                ))}
                <div className="absolute w-4/5 bg-slate-800 h-1 bottom-10 left-0 right-0 mx-auto">
                    <div className="relative w-full">
                        <div className='absolute w-1/2 border-2'></div>
                        <div
                            className="absolute rounded-full bg-[#15171c] w-6 h-6 -top-[8.8px] flex justify-center items-center left-1/2 "
                        >
                            <div className="relative rounded-full bg-slate-600 w-3 h-3"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
