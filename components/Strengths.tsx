
import React from 'react';
import { Zap, GitBranch, Scaling } from 'lucide-react';

const Strengths: React.FC = () => {
    const strengthsData = [
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: 'Tốc Độ Vượt Trội',
            description: 'Sản xuất và chỉnh sửa video chỉ trong vài giờ, không phải vài tuần. Nhanh chóng triển khai các chiến dịch thử nghiệm để nắm bắt cơ hội thị trường.',
        },
        {
            icon: <GitBranch className="w-8 h-8 text-white" />,
            title: 'Linh Hoạt Tối Đa',
            description: 'Sửa lỗi nội dung, thay đổi ngôn ngữ (AI Dubbing), hay thậm chí là gương mặt trên video gốc mà không cần tốn chi phí và thời gian quay lại.',
        },
        {
            icon: <Scaling className="w-8 h-8 text-white" />,
            title: 'Tối Ưu Chi Phí',
            description: 'Chi phí chỉ bằng 1/3 so với các Production House truyền thống nhờ quy trình được AI hóa đến 80%, giúp bạn tối ưu ngân sách marketing hiệu quả.',
        },
    ];

    return (
        <section id="strengths" className="py-24 sm:py-32 bg-vdc-dark-bg text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
                       Tại Sao Chọn VDC?
                    </h2>
                    <p className="text-lg text-white/70 mb-12 reveal" style={{ transitionDelay: '150ms' }}>
                        Chúng tôi không chỉ là một agency, chúng tôi là đối tác tăng trưởng ứng dụng AI để mang lại lợi thế cạnh tranh tuyệt đối cho bạn.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {strengthsData.map((strength, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 p-8 rounded-2xl transition-all duration-300 reveal border border-white/10 hover:bg-white/10 hover:-translate-y-2"
                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                        >
                            <div className="bg-vdc-green p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                {strength.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{strength.title}</h3>
                            <p className="text-white/80 leading-relaxed">{strength.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Strengths;
