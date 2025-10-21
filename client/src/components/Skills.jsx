import '../styles/components/skills.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

function Skills() {
    const [skillsRef1, skillsVisible1] = useFadeInOnScroll();
    const [skillsRef2, skillsVisible2] = useFadeInOnScroll();
    const [skillsRef3, skillsVisible3] = useFadeInOnScroll();
    const [skillsRef4, skillsVisible4] = useFadeInOnScroll();
    const [skillsRef5, skillsVisible5] = useFadeInOnScroll();
    const [skillsRef6, skillsVisible6] = useFadeInOnScroll();

    return (
        <section id="skills" class="section">
            <div class="container">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-grid">
                    <div ref={skillsRef1} className={`skill-category ${skillsVisible1 ? 'visible' : ''}`}>
                        <h3>Frontend</h3>
                        <p>React, Vue.js, TypeScript, HTML5, CSS3, Sass, Tailwind CSS, Webpack, Next.js</p>
                    </div>
                    <div ref={skillsRef2} className={`skill-category ${skillsVisible2 ? 'visible' : ''}`}>
                        <h3>Backend</h3>
                        <p>Node.js, Python, Java, Express.js, Django, Spring Boot, REST APIs, GraphQL</p>
                    </div>
                    <div ref={skillsRef3} className={`skill-category ${skillsVisible3 ? 'visible' : ''}`}>
                        <h3>Databases</h3>
                        <p>PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch, Database Design</p>
                    </div>
                    <div ref={skillsRef4} className={`skill-category ${skillsVisible4 ? 'visible' : ''}`}>
                        <h3>Cloud & DevOps</h3>
                        <p>AWS, Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions, Terraform</p>
                    </div>
                    <div ref={skillsRef5} className={`skill-category ${skillsVisible5 ? 'visible' : ''}`}>
                        <h3>Tools & Practices</h3>
                        <p>Git, Agile/Scrum, TDD, Code Review, Performance Optimization, System Design</p>
                    </div>
                    <div ref={skillsRef6} className={`skill-category ${skillsVisible6 ? 'visible' : ''}`}>
                        <h3>Mobile</h3>
                        <p>React Native, Flutter, iOS Development (Swift), Android Development (Kotlin)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
