
import React from 'react';

const Partners: React.FC = () => {
    return (
        <section id="partners" className="py-24 sm:py-32 bg-vdc-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="max-w-4xl mx-auto text-center">
                     <h2 className="text-3xl md:text-4xl font-bold text-vdc-text mb-4 reveal">
                        Đối Tác Tin Cậy
                    </h2>
                    <p className="text-vdc-text/80 max-w-2xl mx-auto mt-4 text-lg reveal" style={{transitionDelay: '200ms'}}>
                        Chúng tôi tự hào được đồng hành và kiến tạo thành công cùng các thương hiệu hàng đầu.
                    </p>
                </div>
                <div className="flex justify-center mt-12 reveal" style={{transitionDelay: '400ms'}}>
                    <img 
                        src="https://ik.imagekit.io/39wvgoqre/%E1%BA%A2nh%20ch%E1%BB%A5p%20m%C3%A0n%20h%C3%ACnh%202026-02-13%20170732.png" 
                        alt="Đối tác của V Digital Concept" 
                        className="w-full max-w-6xl h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Partners;
