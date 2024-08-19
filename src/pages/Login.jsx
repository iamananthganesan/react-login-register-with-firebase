import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(login)
    }

    const handleInputChanges = (event) => {
        setLogin({
            ...login, [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleInputChanges} placeholder="Enter email" />
                            <Form.Text className="text-danger">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleInputChanges} placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <p>Dont you have an account? <Link to={`/register`}>Sign up</Link></p>
                </Col>
            </Row>
        </>
    );
}

export default Login;