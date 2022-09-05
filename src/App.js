import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Logo from './assets/logo.png';
import mLogo from './assets/mobile_logo.png';
import WhiteLogo from './assets/white_logo.png';
import Navigation from './components/navigation';
import Homepage from './components/homepage';
import About from './components/about_us';
import Menu from './components/menu';
import Footer from './components/footer';
import Franchise from './components/franchise';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation logo = {Logo} mLogo={mLogo} />
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='menu' element={<Menu />} />
          <Route path='franchise' element={<Franchise />} />
        </Routes>

        <Footer f_logo = {WhiteLogo} />
      </header>
    </div>
  );
}

export default App;
