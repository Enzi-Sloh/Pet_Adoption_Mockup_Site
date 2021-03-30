
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = (props) => {
    const [pet, setPet] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setPet(res.data));
    }, [])

    return (
        <div>
            <table>
                <tr class="grayhead">
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {props.pet.map((pet, idx)=>{
                    return <tr key={idx}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td><Link  to ={"/pet/" + pet._id}>details</Link>|<Link to={"/pet/" + pet._id + "/edit"}>edit</Link></td>
                    </tr>
                })}
            </table>
        </div>
    )
}
export default PetList;



/*









const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

<hr/>
            <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}  >
                    <Link  to ={"/product/" + product._id}>{product.title}</Link>
                    <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
                |
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                </p>
            })} 
        </div>
*/