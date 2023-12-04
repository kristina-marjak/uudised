import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact name="Kristina" />} />
                    <Route path="news/:id" element={<News />} />
                    <Route path="uudised" element={<Home />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
