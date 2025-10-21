import '../styles/components/header.css';
import { useState, useEffect } from 'react';
import { smoothScrollToSection } from '../utils/helpers';

function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)' }}>
            <nav>
                <div className="logo">PJ</div>
                <ul className="nav-links">
                    <li><a href="#home" onClick={(e) => smoothScrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => smoothScrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#experience" onClick={(e) => smoothScrollToSection(e, 'experience')}>Experience</a></li>
                    <li><a href="#skills" onClick={(e) => smoothScrollToSection(e, 'skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => smoothScrollToSection(e, 'projects')}>Projects</a></li>
                    <li><a href="#education" onClick={(e) => smoothScrollToSection(e, 'education')}>Education</a></li>
                    <li><a href="#contact" onClick={(e) => smoothScrollToSection(e, 'contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
