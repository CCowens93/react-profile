import React from 'react';
import Gmail from './gmail-logo.png'
import HPTrivia from'./HPTrivia.png'

import './App.css';

function App() {
  return (
    <div className="App">


      <h1>Casey Cowens</h1>
      <h2>Full Stack Software Developer</h2>

      <div className="contacts"> <a href="https://www.linkedin.com/in/cassandra-cowens-3284a2189" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width={40} height={35} alt="linkedinlogo"></img></a></div>
      <div className="contacts"> <a href="https://github.com/CCowens93" target='blank'><img src="http://pngimg.com/uploads/github/github_PNG20.png" width={40} height={35} alt="githublog"></img></a></div>
      <div className="contacts"> <a href="mailto: cassandracowens93@gmail.com" target='blank'><img src={Gmail} width={40} height={35} alt="gmail-logo"></img></a></div>

      <a href="https://heuristic-leakey-615fe1.netlify.com/#" target='blank'>
                    <div className="project_imgs" ><img src={HPTrivia} width={800} height={460} alt="hptrivia" >
                        </img>
                        </div>
                        </a>
    </div>
  );
}

export default App;
