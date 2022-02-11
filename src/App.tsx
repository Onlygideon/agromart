import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import "./global.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Store from "./components/Store";
const Farm = require("./images/1.jpg");
const Veg = require("./images/4.jpg");
const About = require("./images/6.jpg");

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const HomeTheme = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ServicesTheme = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.img`
  background-repeat: no-repeat;
  object-fit: cover;
  width: 45%;

  @media screen and (min-width: 698px) and (max-width: 898px) {
    width: 30%;
    height: 100vh;
  }

  @media screen and (min-width: 400px) and (max-width: 698px) {
    width: 25%;
    height: 100vh;
  }

  @media screen and (min-width: 350px) and (max-width: 400px) {
    width: 23%;
    height: 100vh;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    width: 20%;
    height: 100vh;
  }
`;

const VegImage = styled.img`
  background-repeat: no-repeat;
  object-fit: cover;
  width: 55%;

  @media screen and (min-width: 350px) and (max-width: 898px) {
    width: 35%;
    height: 100vh;
  }

  @media screen and (min-width: 280px) and (max-width: 350px) {
    width: 34%;
    height: 100vh;
  }
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Container>
            <Navbar />
            <Home />
            <HomeTheme>
              <Image src={Farm} />
            </HomeTheme>
          </Container>

          <Container>
            <Services />
            <ServicesTheme>
              <VegImage src={Veg} />
            </ServicesTheme>
          </Container>

          <Container>
            <AboutUs />
            <HomeTheme>
              <Image src={About} />
            </HomeTheme>
          </Container>

          <Footer />
        </Route>

        <Route exact path="/agromart-store">
          <Store />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
