import './App.css'
import {useState} from "react";

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
          <div>
            {project.name}
            <iframe
                src={project.link}
                width='100%'
                height='1000px'
                allowFullScreen
            ></iframe>
          </div>
        )}
      </>
  )
}

export default App
