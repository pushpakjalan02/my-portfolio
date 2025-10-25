import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAbout = () => api.get('/api/about').then(res => res.data);
export const fetchEducation = () => api.get('/api/education').then(res => res.data);
export const fetchLinks = () => api.get('/api/links').then(res => res.data);
export const fetchProjects = () => api.get('/api/projects').then(res => res.data);
export const fetchSkills = () => api.get('/api/skills').then(res => res.data);
export const fetchWorkExperience = () => api.get('/api/work-experience').then(res => res.data);
export const sendMessage = ({ messageData }) => api.post('/api/contact', messageData).then(res => res.data);
