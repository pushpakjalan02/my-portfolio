import '../styles/components/home.css';
import { smoothScrollToSection, downloadResume } from '../utils/helpers';

function Home() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Pushpak Jalan</h1>
                <p>Full-Stack Software Engineer</p>
                <div className="hero-buttons">
                    <a href="#contact" className="cta-button" onClick={(e) => smoothScrollToSection(e, 'contact')}>Get In Touch</a>
                    <a href="#" className="cta-button resume-btn" onClick={downloadResume}>Download Resume</a>
                </div>
            </div>
        </section>
    );
}

export default Home;
