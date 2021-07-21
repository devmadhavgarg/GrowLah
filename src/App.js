import './App.css';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Grids from './components/Grids';
import Features from './components/Features';
import Partners from './components/Partners';
import Learn from './components/Learn';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Topbar />
      <Hero />
      <Grids />
      <Features />
      <Partners />
      <Learn />
      <Form />
    </div>
  );
}

export default App;
