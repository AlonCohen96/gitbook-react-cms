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

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            const height = document.documentElement.scrollHeight;
            window.parent.postMessage({ type: 'resize', height }, '*');
        });

        resizeObserver.observe(document.body); // Observe the body for any height changes

        return () => {
            resizeObserver.disconnect(); // Clean up observer on component unmount
        };
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
