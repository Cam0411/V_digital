
import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'Giới Thiệu' },
        { href: '#services', label: 'Dịch Vụ' },
        { href: '#strengths', label: 'Thế Mạnh' },
        { href: '#team', label: 'Nhân Sự' },
        { href: '#partners', label: 'Đối Tác' },
        { href: '#contact', label: 'Liên Hệ' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    const NavLinkItems = () => (
        <>
            {navLinks.map((link, index) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-medium text-2xl md:text-sm text-vdc-text hover:text-vdc-blue transition-colors duration-300 relative group py-2 md:px-4 md:py-2"
                    style={{ animation: menuOpen ? `fadeInUp 0.5s ease ${index * 0.1}s forwards` : '' }}
                >
                    {link.label}
                    <span className="md:absolute md:bottom-0 md:left-0 md:w-0 md:h-0.5 bg-vdc-blue md:group-hover:w-full transition-all duration-300"></span>
                </a>
            ))}
        </>
    );

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-vdc-bg/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <a href="#home" className="flex-shrink-0">
                        <LogoIcon />
                    </a>
                    <nav className="hidden md:flex md:items-center md:space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-medium px-4 py-2 text-sm text-vdc-text hover:text-vdc-blue transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-vdc-blue group-hover:w-1/2 transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden z-50">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-vdc-text hover:text-vdc-blue focus:outline-none">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!menuOpen ? "M4 6h16M4 12h16" : "M6 18L18 6M6 6l12 12"}></path>
                                {!menuOpen && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16"></path>}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={`md:hidden fixed inset-0 bg-vdc-bg/95 backdrop-blur-xl transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                 <nav className="flex flex-col items-center justify-center h-full space-y-8">
                    {menuOpen && <NavLinkItems />}
                </nav>
            </div>
        </header>
    );
};

const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

export default Header;
