import { Image } from 'react-bootstrap'

export default function DeleteButton({...buttonProps}){
    return(
        <button style={{border:'none', backgroundColor:'transparent'}} {...buttonProps}>
            <Image src="/delete2.png" style={{height:'25px'}}/>
        </button>
    );
}