import './App.css';
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
    const [projects, setProjects] = useState([
        {
            name: 'Annotation Web Interface',
            link: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            visible: false,
        },
        {
            name: 'Project 2',
            link: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            visible: false,
        },
        {
            name: 'Project 3',
            link: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
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
        <div id='projects-container'>
            <h2>SOMETHING</h2>
            {projects.map(project => (
                <div key={project.id}>
                    <p>{project.name}</p>
                    {project.visible && (
                        <iframe
                            src={project.link}
                            width='100%'
                            height='500px'
                            allowFullScreen
                        >
                        </iframe>
                    )}
                    <button onClick={() => toggleGitbook(project.id)}>
                        Show/Hide Gitbook
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;
