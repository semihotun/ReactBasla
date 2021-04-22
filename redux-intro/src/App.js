import './App.css';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseByTwoCounter  from './components/IncreaseByTwoCounter';


function App() {
  return (
    <div>
      <Counter></Counter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseCounter></IncreaseCounter>
      <IncreaseByTwoCounter></IncreaseByTwoCounter>
    </div>
  );
}

export default App;
