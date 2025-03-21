import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Header from './Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainRoutes from './Routing/MainRoutes';
import Home from './Pages/Home';
import About from './Pages/About';
import Match from './Pages/Match';
import League from './Pages/League';
import Branch from './Pages/Branch';
import Contacts from './Pages/Contacts';


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
  <Route path='/match' element={<Match/>}/>
  <Route path='/league' element={<League/>}/>
  <Route path='/branch' element={<Branch/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
