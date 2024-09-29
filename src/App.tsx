import './App.css'
import {useState} from "react";
import {nanoid} from "nanoid";

function App() {

  const [projects, setProjects] = useState([
      {
        name: 'Annotation Web Interface',
        link: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/'
      }
  ])

  return (
      <>
        {projects.map(project =>
          <div key={nanoid()}>
            {project.name}
            <iframe
                src={project.link}
                width='100%'
                height='1000px'
                allowFullScreen
            >
            </iframe>
            <button onClick={() => setProjects([])}>
              don't click me yet
            </button>
          </div>
        )}
      </>
  )
}

export default App
