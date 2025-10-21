import '../styles/components/education.css';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';

function Education() {
    const [educationRef1, educationVisible1] = useFadeInOnScroll();
    const [educationRef2, educationVisible2] = useFadeInOnScroll();

    return (
        <section id="education" class="section">
            <div class="container">
                <h2 class="section-title">Education & Certifications</h2>
                <div class="education-grid">
                    <div ref={educationRef1} className={`education-card ${educationVisible1 ? 'visible' : ''}`}>
                        <h3>Bachelor of Science in Computer Science</h3>
                        <h4>University of Technology</h4>
                        <div class="education-date">2015 - 2019</div>
                        <p>Graduated Magna Cum Laude with a GPA of 3.8/4.0. Specialized in software engineering and algorithms. Active member of the Computer Science Society.</p>
                        <p><strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, Database Systems, Computer Networks, Operating Systems, Web Development</p>
                    </div>

                    <div ref={educationRef2} className={`education-card ${educationVisible2 ? 'visible' : ''}`}>
                        <h3>Professional Certifications</h3>
                        <div class="certifications">
                            <div class="cert-item">
                                <strong>AWS Certified Solutions Architect</strong><br />
                                <em>Amazon Web Services • 2023</em>
                            </div>
                            <div class="cert-item">
                                <strong>Google Cloud Professional Developer</strong><br />
                                <em>Google Cloud • 2022</em>
                            </div>
                            <div class="cert-item">
                                <strong>MongoDB Certified Developer</strong><br />
                                <em>MongoDB Inc. • 2021</em>
                            </div>
                            <div class="cert-item">
                                <strong>Scrum Master Certified (SMC)</strong><br />
                                <em>Scrum Alliance • 2020</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
