import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { fetch_data } from '../components/variables/api'
import { useRouter } from 'next/router';

export default function Sign_in(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleUsername = e => {
        setUsername(e.target.value);
    };
    
    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        let json = {
            "action" : "login",
            "table" : "tx_hdr_user",
            "username" : username,
            "password" : password
        }
        fetch_data("POST", "http://localhost/samson/auth", json).then(function (result) {
            if (result.success) {
                alert(result.message);
                router.push("/");
                localStorage.setItem("user_id", JSON.stringify(result.data));
            } else {
                alert(result.message);
            }
              });
    };

    return (
        <Container fluid style={{marginTop:'60px'}}>
            <Container className="sign-ctn" style={{padding:'40px'}}>
                <Row>
                    <Col style={{textAlign:'center'}} sm={12} lg={7}>
                        <Image src="/Login.png" fluid/>
                        <h3 style={{marginTop:'20px',  fontWeight:'700'}}>Start your new journey with us</h3>
                        <p style={{color:'#9D9D9D'}}>Build your own shop using peduli digital marketplace, you can sell all your favourite item and get easy money</p>
                    </Col>
                    <Col sm={12} lg={5}>
                        <h2 style={{textAlign:'center', fontWeight:'700', paddingBlock:'20px'}}>Sign In</h2>
                        <Form style={{color:'#9D9D9D'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username / Email</Form.Label>
                                <Form.Control style={{height:'50px'}} type="text" placeholder="" onChange={handleUsername} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control style={{height:'50px'}} type="password" placeholder="" onChange={handlePassword} />
                            </Form.Group>
                            <Button block style={{backgroundColor:'#0086CF', fontSize:'18px', fontWeight:'700'}} onClick={handleLogin}>
                                Login
                            </Button>
                        </Form>
                        <p style={{paddingBlock:'40px'}}>Don't have account? <span style={{color:'blue', cursor:'pointer'}}><a href="/Sign_up">Sign Up</a></span></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}