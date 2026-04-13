import './App.css';
import { useState } from 'react';
import Portfolio from './Portfolio/Portfolio';
import MovieCards from './MovieCards/MovieCards';


function App() {

  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="App">
      <button className='portfolio-project-btn' onClick={() => setActiveProject(1)}>Portfolio Project</button>
      <button className='movie-project-btn' onClick={() => setActiveProject(2)}>Movie Project</button>
      {activeProject === 1 && <Portfolio />}
      {activeProject === 2 && <MovieCards />}
    </div>
  );
}

export default App;
