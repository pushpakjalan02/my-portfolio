import '../styles/components/work_experience.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

function WorkExperience() {
    const [workExpRef1, workExpVisible1] = useFadeInOnScroll();
    const [workExpRef2, workExpVisible2] = useFadeInOnScroll();

    return (
        <section id="experience" class="section">
            <div class="container">
                <h2 class="section-title">Work Experience</h2>
                <div class="timeline">
                    <div ref={workExpRef1} className={`timeline-item ${workExpVisible1 ? 'visible' : ''}`}>
                        <div class="timeline-content">
                            <h3>Senior Software Engineer</h3>
                            <h4>TechCorp Solutions</h4>
                            <div class="timeline-date">January 2022 - Present</div>
                            <p>Lead full-stack development for enterprise web applications serving 50,000+ users. Architect scalable microservices and mentor junior developers.</p>
                            <ul class="timeline-achievements">
                                <li>Reduced application load time by 40% through performance optimization</li>
                                <li>Led migration from monolith to microservices architecture</li>
                                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                                <li>Mentored 5 junior developers and conducted code reviews</li>
                            </ul>
                        </div>
                    </div>

                    <div ref={workExpRef2} className={`timeline-item ${workExpVisible2 ? 'visible' : ''}`}>
                        <div class="timeline-content">
                            <h3>Software Engineer</h3>
                            <h4>InnovateTech Inc.</h4>
                            <div class="timeline-date">June 2020 - December 2021</div>
                            <p>Developed and maintained React-based web applications and RESTful APIs. Collaborated with cross-functional teams in an Agile environment.</p>
                            <ul class="timeline-achievements">
                                <li>Built responsive web applications using React and Node.js</li>
                                <li>Designed and implemented RESTful APIs handling 1M+ requests/day</li>
                                <li>Improved test coverage from 65% to 90% using Jest and Cypress</li>
                                <li>Collaborated with UX/UI designers to implement pixel-perfect designs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
