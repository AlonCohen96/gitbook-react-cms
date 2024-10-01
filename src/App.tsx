import './App.css';
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
    const [projects, setProjects] = useState([
        {
            name: 'Annotation Web Interface',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            visible: false,
        },
        {
            name: 'Project 2',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            visible: false,
        },
        {
            name: 'Project 3',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            visible: false,
        }
    ]);

    const toggleGitbook = (projectId: string) => {
        const updatedProjects = projects.map(project => {
            if (projectId === project.id) {
                return { ...project, visible: !project.visible };
            }
            return project;
        });

        setProjects(updatedProjects);
    };


    return (
        <div id='all-projects'>
            <h1
                className='projects-header'
            >
                Projects
            </h1>
            {projects.map(project => (
                <div
                    key={project.id}
                    className='project-container'
                >
                    <div
                        className='name-and-button-container'
                    >
                        <p>
                            {project.name}
                        </p>
                        <button
                            className='project-btn'
                            onClick={() => toggleGitbook(project.id)}
                        >
                            {project.visible ? '▼' : '▶'}
                        </button>
                    </div>
                    {project.visible && (
                        <iframe
                            src={project.url}
                            width='100%'
                            height='500px'
                            allowFullScreen
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;
