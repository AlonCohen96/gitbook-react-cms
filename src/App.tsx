import './App.css'
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";

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
  ])

    const toggleGitbook = (projectId: string) => {
          const updatedProjects = projects.map(project => {
              if (projectId === project.id){
                  return {...project, visible: !project.visible}
              }
              return project
          })
        setProjects(updatedProjects)
    }

    // Function to send the height of the document to the parent window
    const updateParentWithHeight = () => {
        const height = document.documentElement.scrollHeight; // Get the full height of the document
        window.parent.postMessage({ type: 'resize', height }, '*'); // Send height to the parent window
    };

    useEffect(() => {
        // Update the height when the component mounts
        updateParentWithHeight();

        // Optional: You can add listeners if your content height changes dynamically
        window.addEventListener('resize', updateParentWithHeight);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', updateParentWithHeight);
    }, []);

  return (
      <>
        {projects.map(project =>
          <div key={project.id}>
            {project.name}
              {project.visible &&
                  <iframe
                      src={project.link}
                      width='100%'
                      height='500px'
                      allowFullScreen
                  >
                  </iframe>
              }
            <button onClick={() => toggleGitbook(project.id)}>
              Show/Hide Gitbook
            </button>
          </div>
        )}
      </>
  )
}

export default App
