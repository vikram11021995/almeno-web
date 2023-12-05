import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import Dashboard from './Dashboard'
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/course/:id" element={<CourseDetails />}>
          </Route>
          <Route path="/" element={<CourseList />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;


