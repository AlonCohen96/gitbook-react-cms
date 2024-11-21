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
    visible: boolean;
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
            visible: false,
            resources: [
                {
                    label: 'GitHub Repo',
                    url: 'https://github.com/AlonCohen96/react-annotation-interface',
                    id: nanoid()
                },
                {
                    label: 'Live Demo',
                    url: 'https://annotation.evolvinglanguage.ch/',
                    id: nanoid()
                }
            ]
        },
        {
            name: 'Project A',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 1,
            visible: false,
        },
        {
            name: 'Project B',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 1,
            visible: false,
        },
        {
            name: 'Project C',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 2,
            visible: false,
        },
        {
            name: 'Project D',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 2,
            visible: false,
        },
        {
            name: 'Catchphrase',
            url: 'https://lcp.linguistik.uzh.ch/manual/catchphrase.html',
            id: nanoid(),
            category: 3,
            visible: false,
        },
        {
            name: 'Soundscript',
            url: 'https://lcp.linguistik.uzh.ch/manual/soundscript.html',
            id: nanoid(),
            category: 3,
            visible: false,
        },
        {
            name: 'Videoscope',
            url: 'https://lcp.linguistik.uzh.ch/manual/videoscope.html',
            id: nanoid(),
            category: 3,
            visible: false,
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
            <h1 className='site-header'>LiRI Resources Hub</h1>
            <div>
                <input
                    id='searchbar'
                    value={searchbarInput}
                    onChange={handleInputChange}
                    placeholder="Search projects"
                />

                <div id='all-categories'>
                    {categories.map(category => (
                        <div key={category.id} className='category'>
                            <h2>{category.name}</h2>
                            {filteredProjects
                                .filter(project => project.category === category.id)
                                .map(project => (
                                    <div key={project.id} className='project-container'>
                                        <p
                                            className='project-title'
                                            onClick={() => window.open(project.url, '_blank')}
                                            style={{ cursor: 'pointer'}}
                                        >
                                            {project.name} 🗗
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
