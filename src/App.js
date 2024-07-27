
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import News from './News';
import './App.css';
// import Home from './Component/Home.jsx';
// import About from './Component/About.jsx';
// import Contect from './Component/Contect.jsx';



const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/:category" element={<News />} />
                    <Route path="/" element={<h1>Welcome to the News</h1>} />

                    {/* <Route path='/'  Component={Home}/>
                    <Route path='/Home'  Component={Home}/>
                    <Route path='/About'  Component={About}/>
                    <Route path='/Contect'  Component={Contect}/> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
