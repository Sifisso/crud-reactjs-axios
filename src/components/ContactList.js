import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';

export default function ContactList () {
    const [contacts, setContacts]=useState([])
    const [message, setMessage]=useState(null)
    const navigator = useHistory();
    useEffect(()=>{
        getContacts()
    },[])

    const deleteContact = (id) => {
        Axios.delete(`api.site.com/${id}`).then(res=>{

        }).catch(err=>{
            console.log(err);
        }) 
    }

 
    const getContacts = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/users/`).then(res=>{
            setContacts(res.data)
            setMessage("Contactos carregados com sucesso!")
            console.log(res);

        }).catch(err=>{
            setMessage("Houve erro",(err))
            console.log(err);
        })
    }

    const createContact = () =>{

        navigator.push('/Add')
         
    }

    return(
        <div>
            <div>
                <h1>{message}</h1>
                <ul>
                {
                    contacts.map((contact)=>(
                        <li key={contact.id}>{contact.name} | {contact.phone}</li>
                    ))
                }
            </ul>
            <br></br>
            <br></br>
            </div>



                <div>
                    <button onClick={createContact}>Registar Contacto</button>
                </div>
            </div>
        
    )
}
