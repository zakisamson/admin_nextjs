import { Image } from 'react-bootstrap'

export default function ProfileButton({...buttonProps}){
    return(
        <button style={{backgroundColor:'transparent', border:'none'}} {...buttonProps}>
            <a href="/Sign_in">
                <Image src="/down.png" style={{height:'45px'}}></Image>
            </a>
        </button>
    );
}