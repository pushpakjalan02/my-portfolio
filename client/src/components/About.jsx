import '../styles/components/about.css';
import { useState, useEffect } from 'react';
import { fetchAbout } from '../services/api';

function AboutText({ paragraph }) {
    return (
        <p>{paragraph}</p>
    );
}

function About() {
    const [paragraphs, setParagraphs] = useState({ content: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAbout = async () => {
            try {
                const data = await fetchAbout();
                setParagraphs(data);
            
            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        };

        loadAbout();
    }, []);

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-image">👨‍💻</div>
                    <div>
                        {paragraphs.content.map((paragraph, index) => (
                            [<AboutText key={2 * index} paragraph={paragraph} />, <br key={2 * index + 1} />]
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
