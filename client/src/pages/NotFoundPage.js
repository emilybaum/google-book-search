// this will be the search facets

import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav"
import NotFound from "../components/NotFound"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Books extends Component {
  

    render() {
        return (
            <Container fluid>
                <Nav />
                <Row>
                    <Col size="md-12">
                        <NotFound>
                            
                            <h1>Oh Bummer, this page was not found...</h1>
                            <h3>Not sure where you were trying to go, but let's start over together on the home page</h3>

                        </NotFound>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Books;
