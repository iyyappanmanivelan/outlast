import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainRoutes from './Routing/MainRoutes';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import League from './Pages/League';
import PPage from './Pages/PPage';


const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, [pathname]);
}

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (


<BrowserRouter>
<ScrollToTop/>
<Routes>
  <Route element={<MainRoutes/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    <Route path='/programm' element={<PPage/>}/>
    <Route path='/league' element={<League/>}/>

  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
