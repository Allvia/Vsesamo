
import React from 'react'
import './App.css';

import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialoge from './component/Dialoge/Dialoge';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';





const App = (props) => {


  return (
    <BrowserRouter>

      <div className='app-wraper'>

        <Header />
        <Navbar />
        <div className='app-wraper-content'>



          <Route path='/dialoge'
           render={ ( ) => <Dialoge 
           state = {props.state.dialogsState} 
             />} />

          <Route path='/profile' 
          render = {() => <Profile 
          state = {props.state.profilePage} />} />
          


        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
