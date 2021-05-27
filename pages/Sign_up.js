import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { fetch_data } from '../components/variables/api'
import { useRouter } from 'next/router';

export default function Sign_up(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [brdrColor, setBrdrColor] = useState('');
    const router = useRouter();

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleConfPassword = e => {
        setConfPassword(e.target.value);
    }

    const handleRegister = () => {
        if(password == confPassword){
            let json = {
                "action" : "save",
                "table" : "tx_hdr_user",
                "data" : [
                    {
                        "user_name":username,
                        "user_password":password
                    }
                ]
              }
            fetch_data("POST", "http://localhost/samson/data", json).then(function (result) {
                console.log(result);
                router.push("/Sign_in");
              });
        } else{
            alert("Passwords doesn't match")
            setBrdrColor('red');
        }
    };

    return (
        <Container fluid style={{marginTop:'60px'}}>
            <Container className="sign-ctn" style={{padding:'40px'}}>
                <Row>
                    <Col style={{textAlign:'center'}} sm={12} lg={7}>
                        <Image src="/SignUp.png" fluid/>
                        <h3 style={{marginTop:'20px',  fontWeight:'700'}}>Start your new journey with us</h3>
                        <p style={{color:'#9D9D9D'}}>Build your own shop using peduli digital marketplace, you can sell all your favourite item and get easy money</p>
                    </Col>
                    <Col sm={12} lg={5}>
                        <h2 style={{textAlign:'center', fontWeight:'700', paddingBlock:'20px'}}>Sign Up</h2>
                        <Form style={{color:'#9D9D9D'}}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username / Email</Form.Label>
                                <Form.Control style={{height:'50px'}} type="text" placeholder="" onChange={handleUsername} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control style={{height:'50px'}} type="password" placeholder="" onChange={handlePassword} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control style={{height:'50px', borderColor:`${brdrColor}`}} type="password" placeholder="" onChange={handleConfPassword} />
                            </Form.Group>
                            <Button block style={{backgroundColor:'#0086CF', fontSize:'18px', fontWeight:'700'}} onClick={handleRegister}>
                                Register
                            </Button>
                        </Form>
                        <p style={{paddingBlock:'40px'}}>Already have an account? <span style={{color:'blue', cursor:'pointer'}}><a href="/Sign_in">Sign In</a></span></p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}