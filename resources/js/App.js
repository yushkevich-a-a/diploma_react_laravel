import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './admin/components/pages/AdminPage';
import Login from './admin/components/pages/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<AdminPage/>}/>
                <Route path='/login' element={<Login/>}/>

                {/* <Route path='/client' element={<ClientPage/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
