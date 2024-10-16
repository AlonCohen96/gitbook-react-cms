import './App.css';
import React, {useState} from "react";
import { nanoid } from "nanoid";

function App() {
    const [projects, setProjects] = useState([
        {
            name: 'Annotation Web Interface',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 4,
            visible: false,
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
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 3,
            visible: false,
        },
        {
            name: 'Soundscript',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 3,
            visible: false,
        },
        {
            name: 'Videoscope',
            url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
            id: nanoid(),
            category: 3,
            visible: false,
        }
    ]);

    const visibleProject = projects.find(project => project.visible);
    const [searchbarInput, setSearchbarInput] = useState('');

    const toggleGitbookVisibility = (projectId: string) => {
        setProjects(projects.map(project =>
            project.id === projectId
                ? { ...project, visible: !project.visible }
                : { ...project, visible: false }
        ));
    };

    const closeGitbook = () => {
        // Hide all Gitbooks and re-render project lists
        setProjects(projects.map(project => ({ ...project, visible: false })));
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
            <div>
                {/* When no project is visible, show the search bar and full projects list*/}
                {!visibleProject && (
                    <>
                        <input
                            id='searchbar'
                            value={searchbarInput}
                            onChange={handleInputChange}
                            placeholder="Search projects"
                        />

                        {/* Category 1 */}
                        <div id='all-categories'>
                            <div className='category'>
                                <h2>Speech Sciences</h2>
                                {filteredProjects
                                    .filter(project => project.category === 1)
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
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Category 2 */}
                            <div className='category'>
                                <h2>EMA Technology</h2>
                                {filteredProjects
                                    .filter(project => project.category === 2)
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
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Category 3 */}
                            <div className='category'>
                                <h2>LiRI Corpus Platform</h2>
                                {filteredProjects
                                    .filter(project => project.category === 3)
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
                                        </div>
                                    ))
                                }
                            </div>

                            {/* Category 4 */}
                            <div className='category'>
                                <h2>NCCR@LiRI</h2>
                                {filteredProjects
                                    .filter(project => project.category === 4)
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
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )}

                {/* When a project is visible, show only the visible project */}
                {visibleProject && (
                    <div id='visible-project'>
                        <div className='name-and-close-button-container'>
                            <button
                                id='return-btn'
                                onClick={closeGitbook}
                                className='close-btn'
                            >
                                ⮐ Return
                            </button>
                        </div>
                        <iframe
                            src={visibleProject.url}
                            allowFullScreen
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
