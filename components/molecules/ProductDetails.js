export default function ProductDetails({gambar, nama}){
    return(
        <div style={{display:'flex', width:'375px', alignItems:'center'}}>
            <img src={gambar} style={{width:'auto', height:'40px', paddingInline:'15px'}}></img>
            <div>
                <p style={{fontSize:'14px', margin:'0'}}>{nama}</p>
            </div>
        </div>
    );
}