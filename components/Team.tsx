
import React, { useState, useEffect, useRef } from 'react';

const Team: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Start effect when section is in view, stop when it's out of view
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Calculate scroll progress within the component
                const progress = -rect.top / rect.height;
                setOffsetY(progress * 100); // Adjust multiplier for desired parallax speed
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="team" ref={sectionRef} className="py-24 sm:py-32 bg-vdc-gray overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-vdc-text mb-4 reveal">
                        Gặp Gỡ Đội Ngũ
                    </h2>
                    <p className="text-vdc-text/80 max-w-2xl mx-auto mt-4 text-lg reveal" style={{transitionDelay: '200ms'}}>
                        Những bộ óc sáng tạo và tâm huyết đứng sau thành công của bạn.
                    </p>
                </div>

                <div className="mt-12 h-[600px] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl reveal" style={{transitionDelay: '400ms'}}>
                    <img 
                        src="https://ik.imagekit.io/39wvgoqre/%E1%BA%A2nh%20ch%E1%BB%A5p%20m%C3%A0n%20h%C3%ACnh%202026-02-13%20170935.png" 
                        alt="Đội ngũ V Digital Concept" 
                        className="w-full h-full object-cover"
                        style={{ transform: `scale(1.2) translateY(${offsetY * 0.3}px)` }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
