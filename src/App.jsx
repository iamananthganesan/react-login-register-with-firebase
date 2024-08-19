import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './pages/Register';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col offset={4} md={4}>
          <Login />
        </Col>
      </Row>
    </Container>
  )
}

export default App
