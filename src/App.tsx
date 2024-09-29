import './App.css';
import { useEffect, useState } from "react";
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
/*
        // Trigger height adjustment after state update
        setTimeout(() => {
            // Adjusted to check for the body height
            const projectsContainer = document.getElementById('projects-container')
            const newHeight = projectsContainer?.scrollHeight; // Change to body height
            console.log('New height after toggle: ' + newHeight);
            window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
        }, 0);

 */
    };


    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            //const newHeight = document.documentElement.scrollHeight;
            const projectsContainer = document.getElementById('projects-container')
            const newHeight = projectsContainer?.scrollHeight + 200; // Change to body height
            window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
        });

        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);


    return (
        <div id='projects-container'>
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
