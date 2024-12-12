import './App.css';
import React, { useState } from 'react';
import { categories, projects, Project } from './assets/metadata';

function App() {

    const [projectsList] = useState<Project[]>(projects);

    const [searchbarInput, setSearchbarInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchbarInput(event.target.value);
    };

    const filteredProjects = projectsList.filter(project =>
        searchbarInput === '' ||
        project.name.toLowerCase().includes(searchbarInput.toLowerCase())
    );

    return (
        <div id='app-container'>
            <div>
                {false &&
                <input
                    id='searchbar'
                    value={searchbarInput}
                    onChange={handleInputChange}
                    placeholder="Search projects"
                />
                }
                <div id='all-categories'>
                    {categories.map(category => {
                        // Check if the category has any projects in the full list
                        const allProjectsForCategory = projectsList.filter(
                            project => project.category === category.id
                        );

                        // Filter projects for the current search query
                        const projectsForCategory = filteredProjects.filter(
                            project => project.category === category.id
                        );

                        return (
                            <div key={category.id} className='category'>
                                <h2>{category.name}</h2>
                                {allProjectsForCategory.length === 0 ? (
                                    <p className='placeholder-message'>More coming soon.</p>
                                ) : (
                                    projectsForCategory.length > 0 ? (
                                        projectsForCategory.map(project => (
                                            <p key={project.id} className='project-container'>
                                                <p
                                                    className='project-title'
                                                    onClick={() => window.open(project.url, '_blank')}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    {project.name} ➤
                                                </p>
                                            </p>
                                        ))
                                    ) : (
                                        <p>No matching projects found.</p>
                                    )
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
