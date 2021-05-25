import { useState } from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import CancelButton from '../atoms/CancelButton'

export default function AddProductForm(){
    const [inputs, setInputs] = useState({prod_name:'', price:'', stock:'', category:'', description:''});

    return(
        <div style={{marginTop:'40px'}}>
            <p style={{textAlign:'left', color:'#9D9D9D', fontWeight:'700', fontsize:'18px'}}>Hello zakisamson,</p>
            <div className="product-ctn" style={{borderRadius:'25px', border:'0.5px solid lightgray'}}>
                <div className="header" style={{borderBottom:'0.5px solid lightgray', width:'inherit', padding:'10px', display:'flex', alignItems:'center'}}>
                    <h2 style={{padding:'10px', flex:'0.99'}}>Add New Product</h2>
                    <CancelButton link="/" />
                </div>
                <div className="body" >
                    <Row>
                        <Col >
                            <Image style={{height:'auto', width:'300px', margin:'25px'}} src='/upload.png' fluid/>
                        </Col>
                        <Col style={{paddingRight:'40px', textAlign:'left', paddingBlock:'40px', color:'#9D9D9D'}}>
                            <Form>
                                <Form.Group controlId="formProdName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={e => setInputs({...inputs, prod_name: e.target.value})} value={inputs.prod_name}/>
                                </Form.Group>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="formPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={e => setInputs({...inputs, price: e.target.value})} value={inputs.price} />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="formStock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={e => setInputs({...inputs, stock: e.target.value})} value={inputs.stock} />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={e => setInputs({...inputs, category: e.target.value})} value={inputs.category} />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} onChange={e => setInputs({...inputs, description: e.target.value})} value={inputs.description} />
                                </Form.Group>
                                <Button block type="submit">
                                    Save
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}