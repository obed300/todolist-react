import './App.css';
import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  );
}

export default App;
