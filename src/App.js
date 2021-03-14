
import React from 'react'
import './App.css';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialoge from './component/Dialoge/Dialoge';




const App = () => {
  return (
    <div className='app-wraper'>

      <Header />
      <Navbar />

      {/*<Profile/>;*/}

      <div className='app-wraper-content'>
        <Dialoge />
      </div>


    </div>
  );

}

export default App;
