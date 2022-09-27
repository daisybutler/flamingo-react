import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Brands from './templates/brands';
import Home from './templates/home';
import Fragrance from './templates/fragrance';
import Skincare from './templates/skincare';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/brands" element={<Brands />} />
        <Route exact path="/fragrance" element={<Fragrance />} />
        <Route exact path="/skincare" element={<Skincare />} />
      </Routes>

    </>
  )
}

export default App;
