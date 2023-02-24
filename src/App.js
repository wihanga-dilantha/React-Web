import './App.css';
import Welcome from './components/welcome';
import ConditionalRender from './components/conditionalRendering';
import RenderingLists from './components/renderingLists';
function App() {
  return (
    <div>
      <Welcome/>
       <div>
        <ConditionalRender/>
       </div>
       <div>
        <RenderingLists/>
       </div>
      
    </div>
    
  );
}

export default App;
