import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AdoptButton = (props) => {
    const { petId, successCallback } = props;
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
    }, [])
    const AdoptPet = () => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button id="adopt" onClick={AdoptPet}>
            Adopt {loaded && pet.name}
        </button>
    )
}
export default AdoptButton;


