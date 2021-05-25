import { Table } from 'react-bootstrap'
import ProductDetails from '../molecules/ProductDetails'
import DeleteButton from '../atoms/DeleteButton'

export default function List(){
    return(
        <div>
            <div className="product-header" style={{textAlign:'left', paddingTop:'50px'}}>
                <p style={{color:'#9D9D9D', fontWeight:'700', fontSize:'18px'}}>Hello zakisamson,</p>
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
                        <th>Product Name</th>
                        <th style={{textAlign:'center'}}>Price</th>
                        <th style={{textAlign:'center'}}>Stock</th>
                        <th style={{textAlign:'center'}}>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><ProductDetails gambar="/profile.png" nama="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment Material PU Leather ORIGINAL"/> </td>
                            <td style={{textAlign:'center'}}>price</td>
                            <td style={{textAlign:'center'}}>stock</td>
                            <td>
                                <div style={{justifyContent:'center', display:'flex'}}>
                                    <DeleteButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}