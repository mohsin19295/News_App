import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./App.css"
import { ProgressColor } from './utils';
import { Footer } from "./components/Footer";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar
          color={ProgressColor}
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
        <Switch>
          <Route exact path="/">
            <Redirect to="/general" />
          </Route>
          <Route exact path="/general">
            <News setProgress={setProgress} key="general" category="general" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} key="health" category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} key="science" category="science" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} key="technology" category="technology" />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
