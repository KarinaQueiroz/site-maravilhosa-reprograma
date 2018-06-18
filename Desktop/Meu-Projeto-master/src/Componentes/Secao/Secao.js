import React from 'react'
import './Secao.css'


function Secao(props) {
    return(
        <section className="secao">
            {props.texto}
            <img className="secao-imagem" src={props.imagem} alt=""/>
        </section>
    )
}

export default Secao