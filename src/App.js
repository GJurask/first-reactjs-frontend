import React, {useState} from 'react';
import Header from './components/Header.js'
import './App.css';
import backgroundImage from './assets/boss.png';
import img from './assets/boss.png';
function App(){
  const [projects, SetProjects] = useState(['Back-end', 'Front-end'])

  function handleAddProject(){
    //projects.push();
    SetProjects([...projects,`Novo projeto ${Date.now()}` ]);
  }

  return (
    <>
      <Header title="Home"/>  
      <img  scr={img}/>
      <ul>
          {projects.map(project => <li key={project}>{ project }</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Add</button>
    </>
  );
}     
export default App;
//width={30} height="30"