import { Row, Col, Image } from 'react-bootstrap'
import ProfileButton from '../atoms/ProfileButton'

export default function Profile({username_profile, profile_photo}){
    return(
        <div style={{width:'270px', height:'75px', marginTop:'20px', display:'flex'}}>
            <Row style={{alignItems:'center'}}>
                <Col>
                    <Image src={profile_photo ? profile_photo : '/profile2.jpg'} roundedCircle style={{height:'60px', width:'auto'}} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p style={{margin:'0', fontSize:'16px', color:'white', textAlign:'center', fontWeight:'500'}}>{username_profile ? username_profile : 'unknown'}</p>
                            <p style={{margin:'0', fontSize:'12px', fontWeight:'600', color:'white', textAlign:'center'}}>Seller Administrator</p>
                        </Col>
                    </Row>
                </Col>
                <Col style={{cursor:'pointer'}}>
                    <ProfileButton />
                </Col>
            </Row>
        </div>
    );
}