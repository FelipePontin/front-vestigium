import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import SignIn from './pages/Access/SignIn/SignIn'
import SignUp from './pages/Access/SignUp/SignUp'
import Search from './pages/Search/Search';

import './Vestigium.css'

function Vestigium() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Vestigium;
