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
    };


    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const newHeight = document.documentElement.scrollHeight;
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
