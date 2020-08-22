import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import About from "./components/About";
import CustomNavbar from "./components/CustomNavbar";
import PrivacyPolicy from "./components/PrivacyPolicy";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactpage" component={ContactPage} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
        </div>
      </Router>
    );
  }
}

export default App;
