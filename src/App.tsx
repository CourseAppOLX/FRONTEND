import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';


function App() {
    return(
        <>
        <Routes>
            <Route>
                <Route path='/' element={<App/>}/>
                <Route path="login" element={<LoginPage/>}/>
        
            </Route>
    
  </Routes>
        </>
    )

}

export default App;