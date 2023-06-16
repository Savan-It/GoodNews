
import './App.scss';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 0
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #111827, #111827)";
      document.body.style.color = "white";
      this.setState({ mode: 'dark' });
    }
    else {
      document.body.style.backgroundImage = "linear-gradient(to bottom right, #ecebde, #ebc2c2)";
      document.body.style.color = "black";
      this.setState({ mode: 'light' });
    }
  }
  pageSize = 9;
  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            shadow={true}
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="home" pageSize={this.pageSize} category="general" mode={this.state.mode} />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" mode={this.state.mode} />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" mode={this.state.mode} />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" mode={this.state.mode} />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" mode={this.state.mode} />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" mode={this.state.mode} />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" mode={this.state.mode} />} />
          </Routes>
        </Router>

      </>
    )
  }
}

