import './App.css'

function App() {

  return (
      <div id='site-container'>
        <h2>Projects</h2>
        <ul>
          <li data-id='web-annotation-interface'>
            <div>
              <p>Annotation Web Interface</p>
              <button>
                ➤
              </button>
            </div>
            <iframe
                id='web-annotation-interface'
                src='https://nccr-liri.gitbook.io/annotation-web-interface-docs/'
                width='100%'
                height='1000px'
                frameBorder='0'
                allowFullScreen
            ></iframe>
          </li>

          <li data-id='another-project'>
            <div>
              <p>Another Project</p>
              <button>
                ➤
              </button>
            </div>
            <iframe
                id='another-project'
                src='https://nccr-liri.gitbook.io/annotation-web-interface-docs/'
                width='100%'
                height='1000px'
                frameBorder='0'
                allowFullScreen
            ></iframe>
          </li>
        </ul>
      </div>
  )
}

export default App
