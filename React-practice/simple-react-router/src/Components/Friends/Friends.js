import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Friends = (props) => {
  const { id, name, mobile, website, address, email } = props;
  const history = useHistory()
  const url = `/friend/${id}`;
  const handleFriend = () => {
    history.push(url)
  }
  return (
    <div>
      <Row xs={1} md={2} className="g-4 m-5">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Hello I am {name}</Card.Title>
                <Card.Text>My mobile number is {mobile}</Card.Text>
                <Card.Text>I live in {address}</Card.Text>
                <Card.Text>My email address is {email}</Card.Text>
                <Card.Text>
                  My website: <a href={website}>{website}</a>
                </Card.Text>
                <Button onClick={handleFriend}>Visit me</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Friends;
