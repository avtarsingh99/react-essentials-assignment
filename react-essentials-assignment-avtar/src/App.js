import './App.css';
import { useState } from 'react';
import Portfolio from './Portfolio/Portfolio';
import MovieApp from './MovieCards/MovieApp';


function App() {

  const [activeProject, setActiveProject] = useState(1);

  return (
      <div className="App">
      <div className='btns'>
      <button className='portfolio-project-btn' onClick={() => setActiveProject(1)}>Portfolio Project</button>
      <button className='movie-project-btn' onClick={() => setActiveProject(2)}>Movie Project</button>
      </div>
      {activeProject === 1 && <Portfolio />}
      {activeProject === 2 && <MovieApp />}
    </div>
  );
}

export default App;
