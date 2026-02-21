
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-vdc-text text-center px-4 overflow-hidden bg-vdc-bg">
            <div 
                className="absolute inset-0 parallax-bg opacity-50"
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
             ></div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-gradient reveal">
                    V Digital Concept
                </h1>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-normal text-vdc-text/80 max-w-sm sm:max-w-md md:max-w-3xl reveal" style={{transitionDelay: '200ms'}}>
                    Giải pháp marketing toàn diện & chiến lược chuyển đổi khách hàng
                </h3>
                <a href="#services" className="mt-12 text-vdc-blue font-bold py-3 px-1 text-lg uppercase tracking-wider relative group transition-colors duration-300 reveal" style={{transitionDelay: '400ms'}}>
                    <span>Khám Phá Dịch Vụ</span>
                    <span className="absolute bottom-2 left-0 w-full h-0.5 bg-vdc-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
            </div>
        </section>
    );
};

export default Hero;
