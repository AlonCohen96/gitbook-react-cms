import './App.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

// Interfaces for Categories and Projects
interface Category {
    id: number;
    name: string;
}

interface Project {
    name: string;
    url: string;
    id: string;
    category: number;
}

function App() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    const [searchbarInput, setSearchbarInput] = useState('');

    // Fetch data from the JSON script tag
    useEffect(() => {
        const scriptTag = document.getElementById('projects-data');
        if (scriptTag) {
            try {
                const data = JSON.parse(scriptTag.textContent || '{}');

                // Update categories
                setCategories(data.categories || []);

                // Assign unique IDs to projects (if they don't already have them)
                const updatedProjects = data.projects.map((project: Omit<Project, 'id'>) => ({
                    ...project,
                    id: nanoid(),
                }));

                setProjectsList(updatedProjects);
            } catch (error) {
                console.error('Error parsing JSON data from script tag:', error);
            }
        }
    }, []);

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
                {false && (
                    <input
                        id='searchbar'
                        value={searchbarInput}
                        onChange={handleInputChange}
                        placeholder="Search projects"
                    />
                )}
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
                                                    ➤ {project.name}
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
