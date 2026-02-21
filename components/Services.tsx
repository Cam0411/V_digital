
import React from 'react';
import { BrainCircuit, Zap, Target, Clapperboard } from 'lucide-react';

const services = [
    {
        title: 'AI Video Solutions',
        subtitle: 'Sản xuất & Sửa lỗi video bằng AI',
        description: 'Tạo video quảng cáo, giới thiệu sản phẩm chất lượng cinematic chỉ trong 24-48h. Đặc biệt, sử dụng AI để can thiệp, chỉnh sửa gương mặt, giọng nói, bối cảnh trên video gốc mà không cần quay lại.',
        icon: <Clapperboard className="w-10 h-10" />,
    },
    {
        title: 'Growth Marketing',
        subtitle: 'Chuyển đổi số & Tối ưu ROI',
        description: 'Sử dụng AI sản xuất hàng loạt video ngắn để A/B testing, tìm ra nội dung chuyển đổi cao nhất với chi phí rẻ nhất, tập trung vào doanh số và ROI.',
        icon: <Target className="w-10 h-10" />,
    },
    {
        title: 'Branding Agency',
        subtitle: 'Xây dựng thương hiệu Cá nhân & Doanh nghiệp',
        description: 'Tạo \'Đại diện số\' (AI Spokesperson) cho chủ doanh nghiệp, và dùng AI xử lý hình ảnh, âm thanh để các video thương hiệu đạt chất lượng điện ảnh.',
        icon: <BrainCircuit className="w-10 h-10" />,
    },
    {
        title: 'Social Management',
        subtitle: 'Trọng tâm TikTok & Reels với AI Content',
        description: 'Duy trì lịch đăng 1-2 video/ngày chất lượng cao nhờ AI, giúp kênh nhanh lên xu hướng. \'Hồi sinh\' video cũ thành nội dung mới cho TikTok.',
        icon: <Zap className="w-10 h-10" />,
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 sm:py-32 bg-vdc-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-vdc-text mb-4 reveal">
                        AI Marketing Hub
                    </h2>
                    <p className="text-lg text-vdc-text/70 mb-12 reveal" style={{ transitionDelay: '150ms' }}>
                        Hệ sinh thái dịch vụ được tăng cường bởi AI, mang lại tốc độ, sự linh hoạt và hiệu quả vượt trội.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 reveal border border-transparent hover:border-vdc-green/50"
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-vdc-green/10 text-vdc-green p-3 rounded-full">
                                    {service.icon}
                                
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-vdc-text">{service.title}</h3>
                                    <p className="text-sm font-semibold text-vdc-green">{service.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-vdc-text/80 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
