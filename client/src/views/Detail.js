import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AdoptButton from '../components/AdoptButton'
const Detail = (props) => {
    const [pet, setPet] = useState({})
    const [likes, setLikes] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])
    const removeFromDom = petId => {
        setPet(pet => pet._id != petId)
        navigate("/", {replace: true})
                setTimeout(()=>{
                    window.location.reload(false);
                }, 500);
    }
    const likePet = _id => {

        axios.put("http://localhost:8000/api/like/" + props.id, {
            likes
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
            document.getElementById('Likebutton').setAttribute("disabled", "disabled");
    }
    return (
        <div class="main">
            <h1>Pet Shelter</h1>
            <span><Link to ={"/"}>back to home</Link></span>
            <h3>Details about: {pet.name}</h3>
            <AdoptButton petId={pet._id} successCallback={()=>removeFromDom(pet._id)}></AdoptButton>
            <div class="details2">
                <p>Pet type:  </p> <p class="mar">{pet.type}</p>
                <p>Description:  </p> <p class="mar">{pet.description}</p>
                <p>Skills: </p> <p class="mar">{pet.skill1} <br/> {pet.skill2} <br/> {pet.skill3}</p>
                <button class="lbu" onClick={ e => {likePet(pet._id)}} id="Likebutton">Like {pet.name}</button>
                <span id="likes">{pet.likes} like(s)</span>
            </div>
        </div>
    )
}
export default Detail;
