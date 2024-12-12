import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

// Define the Project interface
interface Resource {
    label: string;
    url: string;
    id: string;
}

interface Project {
    name: string;
    url: string;
    id: string;
    category: number;
    resources?: Resource[];
}

function App() {
    const categories = [
        { id: 1, name: 'Speech Sciences' },
        { id: 2, name: 'EMA Technology' },
        { id: 3, name: 'LiRI Corpus Platform' },
        { id: 4, name: 'NCCR@LiRI' },
    ];

    const [projects] = useState<Project[]>([
        {
            name: 'Annotation Web Interface',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 4,
        },
        {
            name: 'Catchphrase',
            url: 'https://lcp.linguistik.uzh.ch/manual/catchphrase.html',
            id: nanoid(),
            category: 3,
        },
        {
            name: 'Soundscript',
            url: 'https://lcp.linguistik.uzh.ch/manual/soundscript.html',
            id: nanoid(),
            category: 3,
        },
        {
            name: 'Videoscope',
            url: 'https://lcp.linguistik.uzh.ch/manual/videoscope.html',
            id: nanoid(),
            category: 3,
        }
    ]);

    const [searchbarInput, setSearchbarInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchbarInput(event.target.value);
    };

    const filteredProjects = projects.filter(project =>
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
                        const allProjectsForCategory = projects.filter(
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
                                    <p>More coming soon.</p>
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
