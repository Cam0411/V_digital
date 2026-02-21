
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 sm:py-32 bg-vdc-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold text-vdc-text mb-8 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-vdc-blue reveal">
                        Về Chúng Tôi
                    </h2>
                    <p className="text-lg text-vdc-text/80 leading-relaxed max-w-3xl reveal" style={{transitionDelay: '200ms'}}>
                        V Digital Concept, thành lập 21.06.2023, là agency tiên phong kết hợp Digital Marketing và Báo chí. Chúng tôi cung cấp giải pháp marketing tổng thể và chiến lược chuyển đổi hiệu quả, cam kết mang lại giá trị bền vững và giúp doanh nghiệp tăng trưởng.
                    </p>
                </div>
                
                <div className="mt-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">
                    <div className="reveal" style={{transitionDelay: '300ms'}}>
                        <h3 className="text-2xl font-bold text-vdc-blue mb-3 tracking-wide">Tầm Nhìn</h3>
                        <p className="text-vdc-text/80 leading-relaxed">
                            Trở thành đối tác Digital Marketing hàng đầu, đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số và phát triển kinh doanh.
                        </p>
                    </div>
                    <div className="reveal" style={{transitionDelay: '400ms'}}>
                        <h3 className="text-2xl font-bold text-vdc-blue mb-3 tracking-wide">Sứ Mệnh</h3>
                        <p className="text-vdc-text/80 leading-relaxed">
                            Cung cấp giải pháp Digital Marketing toàn diện, giúp doanh nghiệp tăng trưởng bền vững và tối ưu hóa hiệu quả kinh doanh.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
