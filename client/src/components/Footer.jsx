import '../styles/components/footer.css';
import { smoothScrollToSection } from '../utils/helpers';
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    Download
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchLinks } from '../services/api';

const API_URL = process.env.REACT_APP_API_URL;

function Footer() {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLinks = async () => {
            try {
                const data = await fetchLinks();
                setLinks(data);

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);

            }
        };

        loadLinks();
    }, []);

    const linksMap = {};
    for (const item of links) {
        linksMap[item["name"]] = item["url"];
    }

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
                            <a href={linksMap["LinkedIn"]} className="social-link" title="LinkedIn" target="_blank">
                                <Linkedin color="#0077B5" />
                            </a>
                            <a href={linksMap["GitHub"]} className="social-link" title="GitHub" target="_blank">
                                <Github color="#333" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <div className="quick-links">
                            <a href="#about" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'about')}>About</a>
                            <a href="#home" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'home')}>Portfolio</a>
                            <a href="#contact" className="quick-link" onClick={(e) => smoothScrollToSection(e, 'contact')}>Contact</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Let's Work Together</h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: 20 }}>
                            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
                        </p>
                        <div className="contact-item">
                            <Download />
                            <a href={`${API_URL}/downloads/resume.docx`} style={{ color: '#4ecdc4', textDecoration: 'none' }}>Download Resume</a>
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
