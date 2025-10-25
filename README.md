# Personal Portfolio Website

A full-stack personal portfolio website built with React.js for the frontend and Node.js/Express.js for the backend. This modern and responsive portfolio showcases professional experience, skills, projects, and educational background through a dynamic, database-driven architecture.

## Project Structure

```
 client/                  # Frontend React application
    public/             # Static files
    src/               # React source code
        components/    # Reusable React components
           About.jsx
           Contact.jsx
           Education.jsx
           Footer.jsx
           Header.jsx
           Home.jsx
           Projects.jsx
           Skills.jsx
           WorkExperience.jsx
        hooks/         # Custom React hooks
           useFadeInOnScroll.js
        styles/        # CSS modules and global styles
           globals.css
           components/
        utils/         # Utility functions
 server/                # Backend Express application
     bin/              # Server startup scripts
     config/           # Configuration files
        database.js   # Database configuration
     controllers/      # Route controllers for each feature
     models/          # MongoDB models
        About.js
        Education.js
        Link.js
        Project.js
        Skill.js
        WorkExperience.js
     routes/          # API route definitions
```

## Features

### 1. Modern UI/UX
- Responsive design that works on all devices
- Smooth scroll animations using custom hooks
- Clean and professional layout
- Modular CSS for maintainable styling

### 2. Dynamic Content Management
- MongoDB-backed content storage
- RESTful API for all content sections
- Easy-to-update portfolio sections
- Secure data management

### 3. Portfolio Sections
- **Home**: Engaging landing page with key information
- **About**: Professional summary and personal introduction
- **Skills**: Technical skills and competencies showcase
- **Work Experience**: Detailed professional history
- **Education**: Academic qualifications and achievements
- **Projects**: Portfolio of completed works
- **Contact**: Professional contact information and form

### 4. Technical Features
- Custom scroll animations
- Modular component architecture
- Responsive image handling
- Form validation and handling
- Error boundary implementation
- Loading state management
- SEO optimization

## Tech Stack

### Frontend
- **React.js**: Component-based UI development
- **CSS3 & CSS Modules**: Modular styling with component isolation
- **Custom Hooks**: Reusable logic for animations and data fetching
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for flexible data storage
- **Mongoose**: MongoDB object modeling
- **RESTful API**: Standard-compliant API architecture
- **JWT**: Authentication and authorization (if implemented)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB (v4.4 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install frontend dependencies and start the development server
```bash
cd client
npm install
npm start
```

3. Install backend dependencies and start the server
```bash
cd ../server
npm install
npm start
```

### Environment Variables

#### Frontend (.env in client folder)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NODE_ENV=development
```

#### Backend (.env in server folder)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### About
- GET `/api/about` - Fetch about information
- POST `/api/about` - Create/Update about information

#### Skills
- GET `/api/skills` - List all skills
- POST `/api/skills` - Add new skill
- PUT `/api/skills/:id` - Update skill
- DELETE `/api/skills/:id` - Delete skill

#### Work Experience
- GET `/api/work-experience` - List all experiences
- POST `/api/work-experience` - Add new experience
- PUT `/api/work-experience/:id` - Update experience
- DELETE `/api/work-experience/:id` - Delete experience

#### Projects
- GET `/api/projects` - List all projects
- POST `/api/projects` - Add new project
- PUT `/api/projects/:id` - Update project
- DELETE `/api/projects/:id` - Delete project

#### Education
- GET `/api/education` - List all education entries
- POST `/api/education` - Add new education entry
- PUT `/api/education/:id` - Update education entry
- DELETE `/api/education/:id` - Delete education entry

## Deployment

### Frontend Deployment
1. Build the React application
```bash
cd client
npm run build
```
2. Deploy the contents of the `build` folder to your hosting provider

### Backend Deployment
1. Set up environment variables for production
2. Deploy the server code to your hosting provider
3. Ensure MongoDB connection is properly configured

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [Your Email]
Project Link: [Repository URL]

## Acknowledgments
- React.js documentation and community
- Node.js and Express.js communities
- MongoDB documentation
- All open-source packages used in this project
