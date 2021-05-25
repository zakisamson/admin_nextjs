export default function SidebarButton({imgsource, text, link}){
    return(
        <div style={{cursor:'pointer', marginBlock:'40px'}} className="CustomButton">
            <button style={{display:'flex', border:'none', backgroundColor:'transparent', color:'white', alignItems:'center', width:"250px"}}>
                <div style={{flex:'0.1'}}>
                    <img src={imgsource} style={{height:'20px', width:'auto', flex:'0.1'}}></img>
                </div>
                <div style={{flex:'0.8', textAlign:'left', paddingLeft:'20px'}}>
                    <a style={{fontSize:'18px'}} href={link}>{text}</a>
                </div>
                <div style={{flex:'0.1'}}>
                    <img src="/next.png" style={{float:'right'}}></img>
                </div>
            </button>
        </div>
    );
}