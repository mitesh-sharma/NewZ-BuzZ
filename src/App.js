import './App.css';
import React, { useState } from 'react'
import NavBar from './components/navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_USE_API
  const pageSize = 16;
  const [progress, setProgress] = useState(10);
  const [mode, setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#333333';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar mode = {mode} toggleMode = {toggleMode}/>
        <LoadingBar
          color='#00ffff'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = "in" category="general" />}></Route>
          <Route exact path="/general" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = "in" category="general" />}></Route>
          <Route exact path="/business" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country = "in" category="business" />}></Route>
          <Route exact path="/entertainment" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country = "in" category="entertainment" />}></Route>
          <Route exact path="/health" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country = "in" category="health" />}></Route>
          <Route exact path="/science" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country = "in" category="science" />}></Route>
          <Route exact path="/sports" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country = "in" category="sports" />}></Route>
          <Route exact path="/technology" element={<News mode = {mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country = "in" category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
