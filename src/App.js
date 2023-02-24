import './App.css';
import Welcome from './components/welcome';
import ConditionalRender from './components/conditionalRendering';
import RenderingLists from './components/renderingLists';
import RespondToEvent from './components/respondToEvent';
import UseState from './components/useState';
function App() {
  return (
    <div className='App'>
      <Welcome/>
       <ConditionalRender/>
        <RenderingLists/>
       <RespondToEvent/>
      <UseState/>
       
      
    </div>
    
  );
}

export default App;
