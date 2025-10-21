const smoothScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const downloadResume = () => {
    // In a real implementation, you would link to your actual resume file
    // For now, this shows an alert with instructions
    alert('Resume download feature ready! Replace this with a link to your actual PDF resume file.');

    // Example of how you would implement this with a real resume file:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/resume.pdf';
    // link.download = 'Alex_Chen_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
};

export { smoothScrollToSection, downloadResume };
export default handleSubmit;
