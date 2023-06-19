
import './App.scss';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API);
 

  const setprogress = (progress) => {
    setProgress(progress)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #111827, #111827)";
      document.body.style.color = "white";
      setMode('dark');
    }
    else {
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #ecebde, #ebc2c2)";
      document.body.style.color = "black";
      setMode('light');
    }
  }
  let pageSize = 9;
    return (
      <>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
            color='#f11946'
            shadow={true}
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setprogress} apiKey={apiKey} key="home" pageSize={pageSize} category="general" mode={mode} />} />
            <Route path="/business" element={<News setProgress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" mode={mode} />} />
            <Route path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" mode={mode} />} />
            <Route path="/health" element={<News setProgress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" mode={mode} />} />
            <Route path="/science" element={<News setProgress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" mode={mode} />} />
            <Route path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" mode={mode} />} />
            <Route path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" mode={mode} />} />
          </Routes>
        </Router>

      </>
    )
}

export default App;