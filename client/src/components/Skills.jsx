import '../styles/components/skills.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { useState, useEffect } from 'react';
import { fetchSkills } from '../services/api';

function SkillsCard({ skill }) {
    const [skillsRef, skillsVisible] = useFadeInOnScroll();

    return (
        <div ref={skillsRef} className={`skill-category ${skillsVisible ? 'visible' : ''}`}>
            <h3>{skill.category}</h3>
            <p>{skill.skills.join(', ')}</p>
        </div>
    );
}

function Skills() {
    const [ skills, setSkills ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const data = await fetchSkills();
                setSkills(data);

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);

            }
        };

        loadSkills();
    }, []);
    
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillsCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
