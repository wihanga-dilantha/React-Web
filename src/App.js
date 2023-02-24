import './App.css';
import Welcome from './components/welcome';
import ConditionalRender from './components/conditionalRendering';
function App() {
  return (
    <div>
      <Welcome/>
      <div className='box'>
       <ConditionalRender/>
      </div>
      
    </div>
    
  );
}

export default App;
