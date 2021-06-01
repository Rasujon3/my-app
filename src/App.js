import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'

function App() {
  return (
    <div className="App">
      
      <Hello age="28" name="Sujon"></Hello>
      <Hello age="22" name="Rifat"></Hello>
      <Hello age="23" name="Salif"></Hello>
      <Hello age="24" name="Liya"></Hello>

      <Welcome></Welcome>

    </div>
  );
}

export default App;
