import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './admin/components/pages/AdminPage';
import Login from './admin/components/pages/Login';
import ClientPage from './client/components/pages/ClientPage';
import HallPage from './client/components/pages/HallPage';
import PaymentPage from './client/components/pages/PaymentPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/client/hall/seans/:seans_id' element={<HallPage/>}/>
                <Route path='/client' element={<ClientPage/>}/>
                <Route path='/payment' element={<PaymentPage/>}/>
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/login' element={<Login/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;