import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>

        <Navbar />
        {/* <News pageSize={5} country="in" category="general" /> */}

        <Routes>

          <Route exact path="/" element={<News key="general" pageSize={11} country="in" category="general" />} />


          <Route exact path="/business" element={<News key="business" pageSize={11} country="in" category="business" />} />


          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={11} country="in" category="entertainment" />} />


          <Route exact path="/general" element={<News key="general" pageSize={11} country="in" category="general" />} />

          <Route exact path="/health" element={<News key="helath" pageSize={11} country="in" category="health" />} />


          <Route exact path="/science" element={<News key="science" pageSize={11} country="in" category="science" />} />


          <Route exact path="/sports" element={<News key="sports" pageSize={11} country="in" category="sports" />} />

        </Routes>
      </div>
    );
  }
}
