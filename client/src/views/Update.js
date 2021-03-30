import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
    }, [])
    const updatePet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            if(res.data.errors) {
                setErrors(res.data.errors);
            }
            else {
                navigate("/")
            }
            console.log(res)
            
        })
        .catch(err => console.log(err))
}
    
    return (
        <div class="main">
            <h1>Pet Shelter</h1>
            <span><Link to ={"/"}>back to home</Link></span>
            <h3>Edit {name}</h3>
            <div class="details">
        <form onSubmit={updatePet} >
            <div class="left">
            <p>
                <label>Pet Name: </label><br/>
                <input type="text" placeholder={name} onChange = {(e)=>setName(e.target.value)}/><br/>
                <span>{errors.name ? errors.name.message: "" }</span>
            </p>
            <p>
                <label>Pet Type:</label><br/>
                <input type="text" placeholder={type} onChange = {(e)=>setType(e.target.value)}/><br/>
                <span>{errors.type ? errors.type.message: "" }</span>
            </p>
            <p>
                <label>Pet Description:</label><br/>
                <input type="text" placeholder={description} onChange = {(e)=>setDescription(e.target.value)}/><br/>
                <span>{errors.description ? errors.description.message: "" }</span>
            </p>
            <button>Edit Pet</button>
            </div>
            <div class="right">
                <p>Skills (optional):</p>
                <p>
                    <label>Skill 1:</label><br/>
                    <input type="text" placeholder={skill1} onChange = {(e)=>setSkill1(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 2:</label><br/>
                    <input type="text" placeholder={skill2} onChange = {(e)=>setSkill2(e.target.value)}/>
                </p>
                <p>
                    <label>Skill 3:</label><br/>
                    <input type="text" placeholder={skill3} onChange = {(e)=>setSkill3(e.target.value)}/>
                </p>
            </div>
        </form>
            </div>
        </div>
    )
}
export default Update;
