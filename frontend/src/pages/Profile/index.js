import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'

export default function Profile(){
    const ongName = localStorage.getItem('ongName')
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const [incidents, setIncidents] = useState([])
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, 
    [ongId])

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    async function handleDeleteIncident(id){
        try{
            api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        }catch(err){
            console.log('Erro')
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, { ongName }</span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
               {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>
                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-br', { 
                                                        style: 'currency',
                                                        currency: 'BRL'}).format(incident.value)}</p>
                    <button onClick={() => handleDeleteIncident(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8e3" />
                    </button>
                </li>
               ))}
            </ul>
        </div>
    )
}
    