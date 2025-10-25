import '../styles/components/work_experience.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { useState, useEffect } from 'react';
import { fetchWorkExperience } from '../services/api';

function WorkExperienceCard({ workExperience }) {
    const [workExpRef, workExpVisible] = useFadeInOnScroll();
    
    return (
        <div ref={workExpRef} className={`timeline-item ${workExpVisible ? 'visible' : ''}`}>
            <div className="timeline-content">
                <h3>{workExperience.title}</h3>
                <h4>{workExperience.organization}</h4>
                <div className="timeline-date">{Date.parse(workExperience.startDate).toString("MMMM yyyy")} - {workExperience.endDate ? Date.parse(workExperience.endDate).toString("MMMM yyyy") : 'Present'}</div>
                <p>{workExperience.description}</p>
                <ul className="timeline-achievements">
                    {workExperience.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function WorkExperience() {
    const [workExperiences, setWorkExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadWorkExperiences = async () => {
            try {
                const data = await fetchWorkExperience();
                setWorkExperiences(data);
            
            } catch (err) {
                setError(err.message);
            
            } finally {
                setLoading(false);
        
            }
        };

        loadWorkExperiences();
    }, []);

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <div className="timeline">
                    {workExperiences.map((workExperience, index) => (
                        <WorkExperienceCard key={index} workExperience={workExperience} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
