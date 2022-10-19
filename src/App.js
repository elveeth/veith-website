import './App.css';
import Header from './components/Header';
import HomeTilesList from './features/hometiles/HomeTilesList.js';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
        <HomeTilesList />
      <Footer/>
    </div>
  );
}

export default App;
