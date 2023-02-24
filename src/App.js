import './App.css';
import Welcome from './components/welcome';
import ConditionalRender from './components/conditionalRendering';
function App() {
  return (
    <div className="box">
      <Welcome/>
      <div className='box'>
       <ConditionalRender/>
      </div>
      
    </div>
    
  );
}

export default App;
