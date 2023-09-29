import './App.css';
import './App.css';
import Layout from './Components/Layout';
import CulturalArtifacts from './Pages/CulturalArtifacts';
import IndexPage from './Pages/IndexPage';
import PublicBlogs from './Pages/PublicBlogs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import List from './Components/List';
import Loginsignup from './Components/Loginsignup';
import Calender from './Pages/Calender';
import CulturePage from './Pages/CulturePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
      <>
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage />}></Route>
            <Route exact path="/culturalartifacts" element={<CulturalArtifacts />}></Route>
            <Route exact path="/publicblog" element={<PublicBlogs />}></Route>
            <Route exact path="/cultureofindia" element={<List />}></Route>
            <Route exact path='/goanCulture' element={<CulturePage />} />
            <Route exact path='/eventsCalender' element={<Calender />} />
            <Route exact path="/login&signup" element={<Loginsignup />}></Route>
          </Route>
        </Routes>

      </Router>
    </div>
    </>
  );
}

export default App;
