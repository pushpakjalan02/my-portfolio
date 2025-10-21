import '../styles/components/projects.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

function Projects() {
    const [projectsRef1, projectsVisible1] = useFadeInOnScroll();
    const [projectsRef2, projectsVisible2] = useFadeInOnScroll();
    const [projectsRef3, projectsVisible3] = useFadeInOnScroll();

    return (
        <section id="projects" class="section">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid">
                    <div ref={projectsRef1} className={`project-card ${projectsVisible1 ? 'visible' : ''}`}>
                        <div class="project-image">🛒</div>
                        <div class="project-content">
                            <h3>E-Commerce Platform</h3>
                            <p>A full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Handles 10k+ concurrent users.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">PostgreSQL</span>
                                <span class="tech-tag">Stripe API</span>
                                <span class="tech-tag">AWS</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">Live Demo</a>
                                <a href="#" class="project-link">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div ref={projectsRef2} className={`project-card ${projectsVisible2 ? 'visible' : ''}`}>
                        <div class="project-image">📊</div>
                        <div class="project-content">
                            <h3>Analytics Dashboard</h3>
                            <p>Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and customizable reports. Processes millions of data points.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Vue.js</span>
                                <span class="tech-tag">Python</span>
                                <span class="tech-tag">D3.js</span>
                                <span class="tech-tag">MongoDB</span>
                                <span class="tech-tag">Docker</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">Live Demo</a>
                                <a href="#" class="project-link">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div ref={projectsRef3} className={`project-card ${projectsVisible3 ? 'visible' : ''}`}>
                        <div class="project-image">🚀</div>
                        <div class="project-content">
                            <h3>Task Management App</h3>
                            <p>A collaborative project management tool with real-time updates, team collaboration features, file sharing, and progress tracking. Used by 5+ development teams.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React Native</span>
                                <span class="tech-tag">Express.js</span>
                                <span class="tech-tag">Socket.io</span>
                                <span class="tech-tag">MySQL</span>
                                <span class="tech-tag">JWT</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">Live Demo</a>
                                <a href="#" class="project-link">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
