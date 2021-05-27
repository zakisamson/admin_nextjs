import { Table } from 'react-bootstrap'
import ProductDetails from '../molecules/ProductDetails'
import DeleteButton from '../atoms/DeleteButton'
import { useEffect, useState } from 'react'
import { fetch_data } from '../variables/api'

export default function List(){
    const [data, setData] = useState();
    const [name, setName] = useState('');
    
    let json = {
        "action": "list",
        "table": "tx_hdr_product",
      }
      
    useEffect(() => {
    fetch_data("POST", "http://localhost/samson/list", json).then(function (result) {
        setData(result.data);
        });
    }, [])

    useEffect(() => {
    let user = localStorage.getItem("userdata");
    user = JSON.parse(user)
    setName(user[0].user_name)
    }, [])

    return(
        <div>
            <div className="product-header" style={{textAlign:'left', paddingTop:'50px'}}>
                <p style={{color:'#9D9D9D', fontWeight:'700', fontSize:'18px'}}>Hello {name},</p>
                <h3 style={{fontWeight:'700', fontSize:'36px'}}>This is Your Products</h3>
            </div>
            <div className="add-btn" style={{flex:'1'}}>
                <button style={{backgroundColor:'#0086CF', border:'0.5px solid #0086CF', borderRadius:'5px', padding:'10px', color:'white', float:'right', marginBlock:'20px'}}>
                    <a href="/Add_product" style={{textDecoration:'none', color:'white'}}>Add New Product</a>
                </button>
            </div>
            <div className="list-table" style={{marginBlock:'10px'}}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th style={{textAlign:'center'}}>Price</th>
                            <th style={{textAlign:'center'}}>Stock</th>
                            <th style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data ? data.map((value) =>{
                        return( <>
                            <tr>
                                <td><ProductDetails nama={value.name_hdr_product}/></td>
                                <td style={{textAlign:'center'}}>${value.price_hdr_product}.00</td>
                                <td style={{textAlign:'center'}}>{value.qty_hdr_product}</td>
                                <td>
                                    <div style={{justifyContent:'center', display:'flex'}}>
                                        <DeleteButton />
                                    </div>
                                </td>
                            </tr>
                        </>)
                    }):""}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}