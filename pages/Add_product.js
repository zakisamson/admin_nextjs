import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/organisms/Sidebar'
import AddProductForm from '../components/organisms/AddProductForm'

export default function Add_product(){
    return (
        <Container fluid>
            <Container style={{maxHeight:'900px'}}>
                <Row>
                <Col lg={4} style={{padding:'10px'}}>
                    <Sidebar />
                </Col>
                <Col lg={8}> 
                    <AddProductForm />
                </Col>
                </Row>
            </Container>
        </Container>
    );
}