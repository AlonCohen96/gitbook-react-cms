import './App.css';
import React, { useState } from "react";
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

    const [searchbarInput, setSearchbarInput] = useState('');

    const toggleGitbookVisibility = (projectId: string) => {
        const updatedProjects = projects.map(project => {
            if (projectId === project.id) {
                return { ...project, visible: !project.visible };
            }
            return { ...project, visible: false };
        });

        setProjects(updatedProjects);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchbarInput(inputValue);
    };

    return (
        <div id='app-container'>
            <h1 className='site-header'>LiRI Resources Hub</h1>
            <input
                id='searchbar'
                value={searchbarInput}
                onChange={handleInputChange}
                placeholder="Search projects"
            />
            {
                projects
                    .filter(project =>
                        searchbarInput === '' ||
                        project.name.toLowerCase().includes(searchbarInput.toLowerCase())
                    )
                    .map(project => (
                        <div key={project.id} className='project-container'>
                            <div className='name-and-button-container'>
                                <p>{project.name}</p>
                                <button
                                    className='project-btn'
                                    onClick={() => toggleGitbookVisibility(project.id)}
                                >
                                    {project.visible ? '▼' : '▶'}
                                </button>
                            </div>
                            {project.visible && (
                                <iframe
                                    src={project.url}
                                    allowFullScreen
                                />
                            )}
                        </div>
                    ))
            }
        </div>
    );
}

export default App;
