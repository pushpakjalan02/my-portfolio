import '../styles/components/education.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { useState, useEffect } from 'react';
import { fetchEducation } from '../services/api';

function EducationCard({ type, education }) {
    const [educationRef, educationVisible] = useFadeInOnScroll();

    if (type == 'degree') {
        return (
            <div ref={educationRef} className={`education-card ${educationVisible ? 'visible' : ''}`}>
                <h3>{education[0].degree}</h3>
                <h4>{education[0].college}</h4>
                <div className="education-date">{education[0].startYear} - {education[0].endYear}</div>
                <p>{education[0].description}</p>
                <p><strong>Relevant Coursework:</strong> {education[0].relevantCoursework.join(', ')}</p>
            </div>
        );
    } else {
        return (
            <div ref={educationRef} className={`education-card ${educationVisible ? 'visible' : ''}`}>
                <h3>Professional Certifications</h3>
                <div className="certifications">
                    {education.map((cert, index) => (
                        <div key={index} className="cert-item">
                            <strong>{cert.certificateName}</strong><br />
                            <em>{cert.issuingOrganization} • {cert.year}</em>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function Education() {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEducation = async () => {
            try {
                const data = await fetchEducation();
                setEducation(data);

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);

            }
        };

        loadEducation();
    }, []);

    // Create dictionary
    const educationMap = {};
    for (const item of education) {
        if (!(item["type"] in educationMap)) {
            educationMap[item["type"]] = [];
        }

        educationMap[item["type"]].push(item);
    }

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-grid">
                    {Object.keys(educationMap).map((key, index) => (
                        <EducationCard key={index} type={key} education={educationMap[key]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
