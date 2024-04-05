import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/reducer/authenticateSlice';
//import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    //console.log('login user function issue');
    //dispatch(authenticateAction.login(id, pw));
    //setAuthenticate(true);
    dispatch(loginSuccess(id, pw));
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
      <Form onSubmit={(event) => loginUser(event)}>
        <h3 className="login-title">LOGIN</h3>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="id"
                placeholder="Enter ID"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPw(event.target.value); // event.target.value로 수정
                }}
              />
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
