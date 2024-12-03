import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={18} key="general" category="general"/>}/>
            <Route path="/Entertainment" element={<News pageSize={18} key="entertainment" category="entertainment"/>}/>
            <Route path="/Business" element={<News pageSize={18} key="business" category="business"/>}/>
            <Route path="/Health" element={<News pageSize={18} key="health" category="health"/>}/>
            <Route path="/Science" element={<News pageSize={18} key="science" category="science"/>}/>
            <Route path="/Sports" element={<News pageSize={18} key="sports" category="sports"/>}/>
            <Route path="/Technology" element={<News pageSize={18} key="technology" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
