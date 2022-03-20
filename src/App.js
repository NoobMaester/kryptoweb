import './App.css';
import Chatbot from './components/Chatbot';
import Features from './components/Features';
import Header from './components/Header';
import Information from './components/Information';

function App() {
  return (
    <div className="App">
      <Header/>
      <Information/>
      <Chatbot/>
      <Features/>
    </div>
  );
}

export default App;
