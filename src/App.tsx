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
            const newHeight = document.documentElement.scrollHeight;
            console.log(newHeight)
            window.parent.postMessage({ type: 'resize', height: newHeight }, '*');
        });

        // Observe changes in the body of the document
        resizeObserver.observe(document.body);

        return () => {
            resizeObserver.disconnect(); // Clean up observer on component unmount
        };
    }, []);

    const setHeightTo280 = () => {
        document.body.style.height = '280px'; // Set body height to 280 pixels
    };

  return (
      <>
          <button onClick={setHeightTo280}>Set Height to 280px</button> {/* Testing Button */}
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
