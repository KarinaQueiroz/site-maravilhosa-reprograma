import React from 'react'
import Card from '../Card/Card'
import gatinho from './gatinho.jpg'
import './Curiosidades.css'


function Curiosidades(props){
    return (
        <section className="curiosidades">
            <h1 className="curiosidades-titulo">Você Sabia?</h1>
            
            <div class="curiosidades-cards">
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="ggatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
                <Card texto="Lorem Ipsum" imagemCaminho={gatinho} imagemDescricao="gatinho"/>
            </div>
        </section>
    )
}

export default Curiosidades