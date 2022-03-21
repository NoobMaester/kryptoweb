import './App.css';
import Chatbot from './components/Chatbot';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Partner from './components/Partner';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Information/>
      <Chatbot/>
      <Features/>
      <Portfolio/>
      <Partner />
      <Footer/>
    </div>
  );
}

export default App;
