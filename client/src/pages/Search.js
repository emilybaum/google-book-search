// this will be the search facets

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API"
import Nav from "../components/Nav"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Books extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: []
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount = () => {
    // code for initial page load
  }

  loadBooks = () => {
    // find all the books in the API
    API.getbooks();
    console.log(API.getbooks())

  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>

            </Jumbotron>
            <Col size="md-6">
              <form>
                <Input name="title" placeholder="Title (required)" />
                <Input name="author" placeholder="Author (required)" />
                <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                <FormBtn>Submit Book</FormBtn>
              </form>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
