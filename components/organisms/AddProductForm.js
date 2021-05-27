import { useState } from 'react'
import { Row, Col, Form, Button, Image } from 'react-bootstrap'
import CancelButton from '../atoms/CancelButton'
import { useRouter } from 'next/router';
import { fetch_data } from '../variables/api'

export default function AddProductForm(){
    const [prod_name, setProdName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCat] = useState('');
    const [description, setDesc] = useState('');
    const router = useRouter();

    const handleProductName = e => {
        setProdName(e.target.value);
    }

    const handleProductPrice = e => {
        setPrice(e.target.value);
    }

    const handleProductStock = e => {
        setStock(e.target.value);
    }

    const handleProductCat = e => {
        setCat(e.target.value);
    }

    const handleProductDesc = e => {
        setDesc(e.target.value);
    }

    const handleAddProduct = () => {
        let json = {
            "action" : "save",
            "table" : "tx_hdr_product",
            "data" : [
                {
                    "name_hdr_product":prod_name,
                    "price_hdr_product":price,
                    "qty_hdr_product":stock,
                    "category_hdr_product":category,
                    "desc_hdr_product":description
                }
            ]
        }
        fetch_data("POST", "http://localhost/samson/data", json).then(function (result) {
            console.log(result);
            router.push("/");
        });
    };

    return(
        <div style={{marginTop:'40px'}}>
            <p style={{textAlign:'left', color:'#9D9D9D', fontWeight:'700', fontsize:'18px'}}>Hello zakisamson,</p>
            <div className="product-ctn" style={{borderRadius:'25px', border:'0.5px solid lightgray'}}>
                <div className="header" style={{borderBottom:'0.5px solid lightgray', width:'inherit', padding:'10px', display:'flex', alignItems:'center'}}>
                    <h2 style={{padding:'10px', flex:'0.99'}}>Add New Product</h2>
                    <CancelButton onClick={ () => router.push("/")} />
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
                                    <Form.Control type="text" placeholder="" onChange={handleProductName} />
                                </Form.Group>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="formPrice">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={handleProductPrice} />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="formStock">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="text" placeholder="" onChange={handleProductStock} />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="" onChange={handleProductCat} />
                                </Form.Group>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} onChange={handleProductDesc} />
                                </Form.Group>
                                <Button block onClick={handleAddProduct}>
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