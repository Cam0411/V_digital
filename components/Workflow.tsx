import React from 'react';
import { ArrowRight } from 'lucide-react';

const Workflow: React.FC = () => {
    const steps = [
        {
            name: 'Input',
            description: 'Khách hàng gửi ý tưởng, kịch bản, hoặc video cũ/lỗi cần được \'hồi sinh\'.'
        },
        {
            name: 'AI Processing',
            description: 'VDC sử dụng bộ công cụ AI độc quyền để sửa lỗi, tạo voice-over, làm đẹp hình ảnh, và tối ưu kịch bản chuyển đổi.'
        },
        {
            name: 'Output',
            description: 'Video thành phẩm đạt chất lượng cao, chuẩn SEO/TikTok, sẵn sàng cho mọi chiến dịch với chi phí giảm đến 60%.'
        }
    ];

    return (
        <section id="workflow" className="py-24 sm:py-32 bg-vdc-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-vdc-text mb-4 reveal">
                        The VDC Workflow
                    </h2>
                    <p className="text-lg text-vdc-text/70 mb-16 reveal" style={{ transitionDelay: '150ms' }}>
                        Quy trình 3 bước tinh gọn giúp biến ý tưởng của bạn thành những video hiệu suất cao.
                    </p>
                </div>
                <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex-1 flex flex-col items-center text-center p-6 reveal" style={{ transitionDelay: `${200 + index * 150}ms` }}>
                                <div className="w-16 h-16 bg-vdc-green text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 border-4 border-vdc-gray">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-vdc-text mb-2">{step.name}</h3>
                                <p className="text-vdc-text/80">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="flex-shrink-0 mx-8 my-4 md:my-0 reveal" style={{ transitionDelay: `${250 + index * 150}ms` }}>
                                    <ArrowRight className="w-10 h-10 text-vdc-green/50 transform md:rotate-0 rotate-90" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
