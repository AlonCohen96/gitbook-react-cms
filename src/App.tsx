import './App.css';
import React, { useState } from "react";
import { nanoid } from "nanoid";

/*
* Goal: When clicking on project, the project list should disappear and instead only display the gitbook, and a button to return to the list
* */

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

    const visibleProjectId = projects.find(project => project.visible)?.id || null;

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

    // Filter projects based on search input
    const filteredProjects = projects.filter(project =>
        searchbarInput === '' ||
        project.name.toLowerCase().includes(searchbarInput.toLowerCase())
    );

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
                filteredProjects.length > 0 ? (
                    filteredProjects.map(project => {
                        // If no project is visible, render all projects without the iframe
                        if (!visibleProjectId) {
                            return (
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
                                </div>
                            );
                        }
                        // If a specific project is visible, render only that project with the iframe
                        if (visibleProjectId === project.id) {
                            return (
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
                            );
                        }
                        return null; // Skip rendering other projects when a specific project is visible
                    })
                ) : (
                    <p className='project-not-found-message'>No projects found.</p>
                )
            }

        </div>
    );
}

export default App;
