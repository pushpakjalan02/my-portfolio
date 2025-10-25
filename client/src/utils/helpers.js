import { sendMessage } from "../services/api";

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

const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    sendMessage({ messageData: data })
        .then(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            e.target.reset();
        })
        .catch((err) => {
            console.error('Error sending message:', err);
            alert('Failed to send message. Please try again later.');
        });
};

export { smoothScrollToSection };
export default handleSubmit;
