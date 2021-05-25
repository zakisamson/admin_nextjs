import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Sidebar from '../components/organisms/Sidebar'
import List from '../components/organisms/List'

export default function Home() {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col lg={4} style={{padding:'10px'}}>
            <Sidebar />
          </Col>
          <Col lg={8}> 
            <List />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
