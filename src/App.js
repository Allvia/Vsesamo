
import React from 'react'
import './App.css';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialoge from './component/Dialoge/Dialoge';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';




const App = () => {
  return (
    <BrowserRouter>

      <div className='app-wraper'>

        <Header />
        <Navbar />
        <div className='app-wraper-content'>
          <Route path='/dialoge' component={Dialoge} />
          <Route path='/profile' component={Profile} />


        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
