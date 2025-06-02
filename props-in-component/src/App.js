
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <Main firstname="HOOR 2025" />
      <Sidebar />
      </div>
    </div>
  );
}

export default App;
