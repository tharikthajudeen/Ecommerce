import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/>}/>
        </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
