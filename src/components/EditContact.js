import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom'
import {useParams} from 'react-router'


export default function EditContact() {
    const [message, setMessage] = useState(null);
    const [contact, setContact] = useState({
       id:'',
        name: '',
        phoneNumber: ''
    });

    //Findout out to get url params and queries using react router
    //So that you can get the contact id dynimicall

    //That way you can do edit/?id=2
    //or edit/2


    // Enable input(s) according to the *name* input
    const onInputChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value})
    }

    // const etc = {
    //     pasta: z,
    //     sapatos: 4
    // }
    // etc.sapatos = azul 
    useEffect(()=> {
        //Use Effect is a speciall Hook. It gets called as soon as the app is loaded
        //So its the perfect place to call whatever we need as soon as the app is rendered
        getContact()
        //The [] is the second parameter of useEffect.  Its an array that holds values we want to watch for
        //Basically we are saying whener a certain value changes, fun the function in useState
        //If a black array is pasted, useEffect will run only one when the app is started
    }, [])


    const getContact = (props) =>{
        
        Axios.get(`https://jsonplaceholder.typicode.com/users/1`)
        .then(res=>{
            
            console.log(res.data);
            setMessage("Contacto carregado!")
            setContact({
                //The setState is used to define the conten of an object
                //res.data is the sourse of the data from the server
                //Now get the data and place it inside the form
                name: res.data.name,
                phoneNumber: res.data.phone,
                id: res.data.id
            })
        }).catch(err=>{
            setMessage("Erro no carregamento do contacto")
        })

        
    }

    const updateContact = () =>{
        //find a valid url to test Put
        Axios.put(`https://jsonplaceholder.typicode.com/users/`, {}).then(res=>{
            setMessage("Contacto Actualizado com sucesso!")
            
            
        }).catch(err=>{
            setMessage("Houve erro")
            console.log(err)
        })
    }

    return (

       <Router>
            <div> 
                <h2>Editagem de Contacto</h2>  

                <div>
                    <label>Id</label>
                </div>
                <input name="id" value={contact.id} onChange={onInputChange} type="text"></input>

                <div>
                    <label>Nome</label>
                </div>
                    <input name="name" value={contact.name} onChange={onInputChange} type="text"></input>
                <div>
                    <label>Número</label>
                </div>
                    <input name="phoneNumber" value={contact.phoneNumber} onChange={onInputChange} type="text"></input>
                <div>
                    <button onClick={updateContact}>Editar</button>
                </div>

                

            </div>
        </Router> 
        
    )
}

