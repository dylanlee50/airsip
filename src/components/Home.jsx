import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron className="center">
          <h1>Airsip</h1>
          <p>Making information accessible, digestible and personal</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;
