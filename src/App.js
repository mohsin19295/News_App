import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// more css needed for navbar (responsive)
// add infinity scroll

function App() {
  const apiKey = "pub_55809c71a2deb248f6aaf701ce8e2f3fda6";
  // const apiKey = "pub_5809c71a2deb248f6aaf701caee8e2f3fda6";

  const [progress, setProgress] = useState(0);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
        <Switch>
          <Route exact path="/top">
            <News setProgress={setProgress} apiKey={apiKey} key="top" category="top" />
          </Route>
          <Route exact path="/business">
            <News setProgress={setProgress} apiKey={apiKey} key="business" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News setProgress={setProgress} apiKey={apiKey} key="health" category="health" />
          </Route>
          <Route exact path="/science">
            <News setProgress={setProgress} apiKey={apiKey} key="science" category="science" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
