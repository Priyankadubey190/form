import logo from './logo.svg';
import './App.css';
import { Employ } from './components/Employ';
import { Empdata } from './components/Empdata';

function App() {
  return (
    <div className="App">
     <h1>Employee Details</h1>
     <Employ/>
     <Empdata/>
    </div>
  );
}

export default App;
