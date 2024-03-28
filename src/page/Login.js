import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    //console.log('login user function issue');
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Form onSubmit={(event) => loginUser(event)}>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control type="id" placeholder="Enter ID" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
