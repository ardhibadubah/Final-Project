import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
} from '../../redux/auth/action';

const AuthModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLoginEmail = () => {
    dispatch(loginWithEmail({ email, password })).then(() => handleClose());
  };

  const handleLoginGoogle = () => {
    dispatch(loginWithGoogle()).then(() => handleClose());
  };

  const handleLoginFacebook = () => {
    dispatch(loginWithFacebook()).then(() => handleClose());
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <Form
              onSubmit={(e) => handleLoginEmail(e)}
              style={{ width: '400px' }}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className='w-100'
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className='w-100'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                style={{ width: '400px' }}
                className='w-100 mb-3'
                variant='primary'
                type='submit'>
                Submit
              </Button>
            </Form>
            <Button
              style={{ width: '400px' }}
              className='mb-3'
              onClick={handleLoginGoogle}>
              login with google
            </Button>
            <Button
              style={{ width: '400px' }}
              className='mb-3'
              onClick={handleLoginFacebook}>
              login with Facebook
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
