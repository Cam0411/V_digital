
import React from 'react';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-vdc-dark-bg text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="reveal">
                        <a href="#home" className="inline-block mb-6">
                            <LogoIcon />
                        </a>
                        <p className="text-4xl font-bold text-white max-w-lg leading-tight">
                           Sẵn sàng để <span className="text-vdc-blue">bắt đầu?</span>
                        </p>
                    </div>
                     <div className="grid sm:grid-cols-2 gap-8">
                        <div className="reveal" style={{transitionDelay: '200ms'}}>
                             <h3 className="font-bold text-vdc-blue mb-4 uppercase tracking-widest text-sm">Liên Lạc</h3>
                             <ul className="space-y-2">
                                 <li><a href="mailto:vdigitalconcept@gmail.com" className="text-gray-300 hover:text-vdc-blue transition-colors">vdigitalconcept@gmail.com</a></li>
                                 <li><a href="tel:0834576336" className="text-gray-300 hover:text-vdc-blue transition-colors">0834576336</a></li>
                             </ul>
                        </div>
                         <div className="reveal" style={{transitionDelay: '300ms'}}>
                             <h3 className="font-bold text-vdc-blue mb-4 uppercase tracking-widest text-sm">Địa chỉ</h3>
                             <p className="text-gray-300">
                                 47-49 Vĩnh Hội, P4, Q4<br/>
                                 TP Hồ Chí Minh, Việt Nam
                             </p>
                        </div>
                     </div>
                </div>
                <div className="mt-16 border-t border-gray-700 pt-8 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} V Digital Concept. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
