import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';
import About from './component/About/About';
import Menu from './component/Menu/Menu';
import Chef from './component/Chef/Chef';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Menu />
      <Chef />
    </div>
  );
}

export default App;
