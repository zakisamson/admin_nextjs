import { Image } from 'react-bootstrap'

export default function CancelButton({link, ...buttonProps}){
    return(
        <button style={{backgroundColor:'transparent', border:'none', height:'30px'}} {...buttonProps}>
            <a href={link}>
                <Image src="/cancel.png" style={{height:'30px', width:'auto'}}/>
            </a>
        </button>
    );
}