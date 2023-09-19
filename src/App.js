import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App1 from './App1';
import Chart from './components/Chart';
import Dashboard from './Dashboard';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Colors from './components/Colors';
import Borders from './components/Borders';
import Animations from './components/Animations';
import Others from './components/Others';
import Page404 from './components/Page404';
import Blank from './components/Blank';
import Tables from './components/Tables';
import Login from './components/Login';
import Register from './components/Register';
import Forgotpassword from './components/Forgotpassword';

export default function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App1/>} >
                <Route index element={<Dashboard />} />
                <Route path='charts' element={<Chart />} />
                <Route path='Buttons' element={<Buttons />} />
                <Route path='cards' element={<Cards />} />
                <Route path='Colors' element={<Colors />} />
                <Route path='Borders' element={<Borders />} />
                <Route path='Animations' element={<Animations />} />
                <Route path='Others' element={<Others />} />
                <Route path='404 Page' element={<Page404 />} />
                <Route path='blank' element={<Blank />} />
                <Route path='tables' element={<Tables />} />
            </Route>
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
            <Route path='forgot-password' element={<Forgotpassword/>} />
        </Routes>
        
    </div>
  )
}
