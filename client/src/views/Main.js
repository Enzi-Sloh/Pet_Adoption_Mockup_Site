import React, { useEffect, useState } from 'react'
import PetList from '../components/PetList';
import axios from 'axios';
import { Link } from '@reach/router';
const Main = () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div class="main">
            <h1>Pet Shelter</h1>
            <span ><Link to ={"/pet/new"}>add a pet to the shelter</Link></span>
            <h3>These Pets are looking for a good home</h3>
            <div >
                { loaded &&<PetList pet={pet}></PetList> }
            </div>
        </div>
    )
}
export default Main;
