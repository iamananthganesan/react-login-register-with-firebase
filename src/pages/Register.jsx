import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { registerAPI } from '../services/api';

const Register = () => {
    const [register, setRegister] = useState({
        email: "",
        password: "",
        name: ""
    });
    let initialErrorstate = {
        email: {
            required: false
        },
        password: {
            required: false
        },
        name: {
            required: false
        }
    }
    //state for handling an error 
    const [error, setError] = useState(initialErrorstate);
    const [isLoading, setIsLoading] = useState(false);
    const handleRegister = (event) => {
        event.preventDefault();
        let validateFormState = initialErrorstate;
        // if (register.email == "") {
        //     setError({
        //         ...error, email: { required: true }
        //     })
        // } if (register.password == "") {
        //     setError({
        //         ...error, password: { required: true }
        //     })
        // }
        if (register.email == "") {
            validateFormState.email.required = true
        }

        if (register.password == "") {
            validateFormState.password.required = true
        }

        if (register.name == "") {
            validateFormState.name.required = true
        }

        setError(validateFormState);
        console.log(register)

        registerAPI(register)
    }

    const handleInputChanges = (event) => {
        setRegister({
            ...register, [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={handleInputChanges} placeholder="Enter email" />
                            {error.email.required &&
                                <Form.Text className="text-danger">
                                    Email field is required
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={handleInputChanges} placeholder="Password" />
                            {error.password.required &&
                                <Form.Text className="text-danger">
                                    Password field is required
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" onChange={handleInputChanges} placeholder="Name" />
                            {error.name.required &&
                                <Form.Text className="text-danger">
                                    Name field is required
                                </Form.Text>
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        {isLoading &&
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                        <Button variant="primary" type="submit" disabled={false}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <p>already having an account <Link to={`/`}>Login</Link></p>
                </Col>
            </Row>
        </>
    );
}

export default Register;