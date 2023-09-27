import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import HomePage from './components/home/HomePage';
import AdminPage from './components/admin/AdminPage';
import ProductPage from './components/container/product/ProductPage';
import NotFound from './components/notfound/page404';
import DefaultHeader from './components/container/DefaultHeader';

function App() {
    return(
        <div className='container'>
           
        <Routes>
            <Route>
                {/* <Route path='/' element={<App/>}/> */}
                
                <Route path="/" element={<LoginPage/>}/>
                <Route path="home" element={<HomePage/>}/>
                <Route path="admin" element={<AdminPage/>}/>
                <Route path="category" element={<ProductPage/>}/>




                <Route path="*" element={<NotFound />} />
            </Route>
    
  </Routes>
  </div>
        
    )

}

export default App;