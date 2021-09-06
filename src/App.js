import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar user="Ryan Soto"/>
      <MainContent user="Ryan Soto" />
    </div>
  );
}

export default App;
