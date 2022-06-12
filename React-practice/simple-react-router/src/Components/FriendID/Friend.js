import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Friend = () => {
  const { friendId } = useParams();
  const [details, setDetails] = useState([]);
  const { id, name, phone, website, address, email } = details;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      
  <Card border="secondary" className="m-5">
    <Card.Header>Name: {name}</Card.Header>
    <Card.Body>
      <Card.Title>My ID is {id}</Card.Title>
      <Card.Text>
       My phone number is {phone}
      </Card.Text>
      <Card.Text>I live in {address?.street}, {address?.city}</Card.Text>
      <Card.Text>My email address is {email}</Card.Text>
      <Card.Text>Visit me at <Card.Link href={website}>{website}</Card.Link></Card.Text>
      
    </Card.Body>
  </Card>
    </div>
  );
};

export default Friend;
