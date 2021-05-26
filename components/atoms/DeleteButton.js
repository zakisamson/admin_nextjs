import { Image, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function DeleteButton({...buttonProps}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <button style={{border:'none', backgroundColor:'transparent'}} onClick={handleShow}>
            <Image src="/delete2.png" style={{height:'25px'}}/>
        </button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton > 
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src="/delete_image.png"/>
                <p style={{fontSize:'20px', fontWeight:'400', textAlign:'center', marginTop:'20px'}}>Are you sure to delete this product?</p>
            </Modal.Body>
            <Modal.Footer style={{justifyContent:'center'}}>
                <Button style={{backgroundColor:'#DF0303', width:'150px'}} onClick={handleClose}>
                    Cancel
                </Button>
                <Button style={{width:'150px'}} {...buttonProps}>
                    Yes, Sure
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}