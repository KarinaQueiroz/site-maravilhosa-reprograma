import React from 'react'
import './Materias.css'
import Card from '../Card/Card'
import gatinho from './gatinho.jpg'
 

let cards = [
    {
        id: 'card1',
        imagemCaminho: gatinho,
        imagemDescricao: '',
        texto: 'Lorem Ipsum'
    },
    {
        id: 'card2',
        imagemCaminho: gatinho,
        imagemDescricao: '',
        texto: 'Lorem Ipsum'
    },
    {
        id: 'card3',
        imagemCaminho: gatinho,
        imagemDescricao: '',
        texto: 'Lorem Ipsum'
    },
    {
        id: 'card4',
        imagemCaminho: gatinho,
        imagemDescricao: '',
        texto: 'Lorem Ipsum'
    }
]

function Materias(props) {
    return(
        <section className="materias">
            <h2 className="materias-titulo">Matérias</h2>

            <div className="materias-cards">
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        imagemCaminho={card.imagemCaminho}
                        imagemDescricao={card.imagemDescricao}
                        texto={card.texto}
                    />
                ))}
            </div>           
        </section>
    )
}


export default Materias