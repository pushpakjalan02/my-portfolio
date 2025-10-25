import '../styles/components/projects.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';

function ProjectsCard({ project }) {

    const [projectsRef, projectsVisible] = useFadeInOnScroll();

    return (
        <div ref={projectsRef} className={`project-card ${projectsVisible ? 'visible' : ''}`}>
            <div className="project-image">🛒</div>
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.liveLink} className="project-link">Live Demo</a>
                    <a href={project.githubLink} className="project-link">GitHub</a>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);

            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);

            }
        };

        loadProjects();
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectsCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
