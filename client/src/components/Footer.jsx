import '../styles/components/footer.css';
import { smoothScrollToSection, downloadResume } from '../utils/helpers';
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    Download
} from 'lucide-react';

function Footer() {
    return (
        <div className="footer-outer-container">
            <div className="footer-inner-container">
                <footer className="footer">
                    <div className="footer-section">
                        <h3>Get In Touch</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <Mail />
                                <span>pushpak_jalan@outlook.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin />
                                <span>Bangalore, IN</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Follow Me</h3>
                        <div className="social-links">
                            <a href="#" className="social-link" title="LinkedIn">
                                <Linkedin color="#0077B5" />
                            </a>
                            <a href="#" className="social-link" title="GitHub">
                                <Github color="#333" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <div className="quick-links">
                            <a href="#about" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'about')}>About</a>
                            <a href="#portfolio" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'portfolio')}>Portfolio</a>
                            <a href="#services" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'services')}>Services</a>
                            <a href="#blog" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'blog')}>Blog</a>
                            <a href="#contact" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'contact')}>Contact</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Let's Work Together</h3>
                        <p style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: 20}}>
                            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
                        </p>
                        <div className="contact-item">
                            <Download />
                            <a href="#" style={{color: '#4ecdc4', textDecoration: 'none'}} onClick={downloadResume}>Download Resume</a>
                        </div>
                    </div>
                </footer>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2025 Pushpak Jalan. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
