import React from 'react'
import './Card.css'


function Card (props){
    return (
        <div className="card">
            <img className="card-imagem" src={props.imagemCaminho} alt={props.imagemDescricao} />
            <p className="card-texto">{props.texto}</p>
            <a className="card-botao" href="#">Ler mais</a>
        </div>
    )
}

export default Card





