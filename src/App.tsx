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

        // Trigger height adjustment after state update
        setTimeout(() => {
            // Adjusted to check for the body height
            const newHeight = document.getElementById('projects-container').scrollHeight; // Change to body height
            console.log('New height after toggle: ' + newHeight);
            window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
        }, 200);
    };


    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const newHeight = document.documentElement.scrollHeight;
            console.log('New Height:', newHeight);
            window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
        });

        resizeObserver.observe(document.body); // Observe changes in the body of the document

        return () => {
            resizeObserver.disconnect(); // Clean up observer on component unmount
        };
    }, []); // Empty dependency array to run once on mount

    const setHeightTo280 = () => {
        document.body.style.height = '280px'; // Set body height to 280 pixels for testing
        const newHeight = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
    };

    return (
        <div id='projects-container'>
            <button onClick={setHeightTo280}>Set Height to 280px</button> {/* Testing Button */}
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
