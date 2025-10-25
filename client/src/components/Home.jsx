import '../styles/components/home.css';
import { smoothScrollToSection } from '../utils/helpers';

const API_URL = process.env.REACT_APP_API_URL;

function Home() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Pushpak Jalan</h1>
                <p>Full-Stack Software Engineer</p>
                <div className="hero-buttons">
                    <a href="#contact" className="cta-button" onClick={(e) => smoothScrollToSection(e, 'contact')}>Get In Touch</a>
                    <a href={`${API_URL}/downloads/resume.docx`} className="cta-button resume-btn">Download Resume</a>
                </div>
            </div>
        </section>
    );
}

export default Home;
