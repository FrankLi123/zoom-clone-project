import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css';

import IntroductionPage from './IntroductionPage/IntroductionPage';
import RoomPage from './RoomPage/RoomPage';
import JoinRoomPage from './JoinRoomPage/JoinRoomPage';

function App() {
  return (

        <Router>
            <Routes>
                <Route path = '/join-room' element={<JoinRoomPage/>}>

                  
                </Route>

                <Route path = '/room' element={ <RoomPage/> }>

                </Route>

                <Route path = '/' element={ <IntroductionPage/> }>

                </Route>

            </Routes>

        </Router>
  );
}

export default App;
