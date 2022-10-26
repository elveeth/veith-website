import './App.css';
import Header from './components/Header';
import HometilesDirectoryPage from './pages/HometilesDirectoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <HometilesDirectoryPage />
      <Footer/>
    </div>
  );
}

export default App;
