import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import Subscribe from './pages/Subscribe';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/event/lesson/:slug" element={<Event />}></Route>
        </Routes>
    );
};

export default Router;
