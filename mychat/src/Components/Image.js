import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { saveAs } from 'file-saver';

import './Image.css';

const API_KEY = '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';
const API_ENDPOINT = 'https://api.openai.com/v1/images/generations';

function Image() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const generateImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: 'image-alpha-001',
          prompt: description,
          num_images: 1,
          size: '512x512'
        })
      });

      const data = await response.json();
      const imageData = data.data[0].url;
      setImage(imageData);
      setLoading(false);
    } catch (error) {
      console.error('Error generating image:', error);
      setLoading(false);
    }
  };

  const downloadImage = async () => {
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      saveAs(blob, 'generated-image.jpg');
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="bg-light text-dark" style={{ borderRadius: 30, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="text-center">
                <h1 style={{ marginBottom: 30 }}>Image Generator</h1>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Enter a textual description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={generateImage} disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" />
                      Generating...
                    </>
                  ) : (
                    'Generate Image'
                  )}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            {image && (
              <Card style={{ borderRadius: 30, boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)' }}>
                <Card.Img variant="top" src={image} style={{ borderRadius: 30 }} />
                <Card.Body className="text-center">
                  <Button variant="primary" onClick={downloadImage} style={{ borderRadius: 30 }}>
                    Download Image
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Image
