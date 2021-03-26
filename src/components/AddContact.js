import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom'

export default function (){
    const [contact, setContact]=useState({
        name: '', 
        phoneNumber:''
    });
    const navigator = useHistory();

    const  onChange =(event)=>{
        setContact({...contact, [event.target.name]: event.target.value})
    }

    const createContact = () =>{
        console.log('request', ' ', contact)
        Axios.post(`https://jsonplaceholder.typicode.com/posts`,{contact}).then(res=>{

           navigator.push('/')
          
    
        }).catch(err=>{
            console.log(err);
            navigator.push('/')
            
        })
    }

    return (
            <Router>
                <div> 
                    <h2>Criar Contacto</h2>  

                    <div>
                        <label>Id</label>
                    </div>
                    <input name="id" value={contact.id} onChange={onChange} type="text"></input>
                <div>
                    <label>Nome</label>
                </div>
                    <input name="name" value={contact.name} onChange={onChange} type="text"></input>
                <div>
                    <label>Número</label>
                </div>
                    <input name="phoneNumber" value={contact.phoneNumber} onChange={onChange} type="text"></input>
                <div>
                    <button onClick={createContact}>Registar</button>
                </div>
            </div> 
        </Router>       
    )

}

