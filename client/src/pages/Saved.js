import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";
import Nav from "../components/Nav";

function Saved(props) {


// THIS PAGE IS A WORK IN PROGRESS


    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {/* {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <a href={"/books/" + book._id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </a>
                                    <DeleteBtn />
                                </ListItem>
                            ))}
                        </List>
                        ) : (
                            <h3>No Results to Display</h3>
                        )} */}
                </Col>
            </Row >
        </Container >
    )

}

export default Saved;
