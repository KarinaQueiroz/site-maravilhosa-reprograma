import React from 'react'
import gatinho from './gatinho.jpg'
import './Busca.css'


class Busca extends React.Component {
    state = {
        zona: '',
        lista: [
            {
                id: 'zona1',
                foto: gatinho,
                zona: 'norte',
                local: 'Recicla Norte',
                endereco: 'Rua do Norte, 1',
                telefone: '(11) 11111-1111',
            },
            {
                id: 'zona2',
                foto: gatinho,
                zona: 'sul',
                local: 'Recicla Sul',
                endereco: 'Rua do Sul, 2',
                telefone: '(11) 22222-2222',
            },
            {
                id: 'zona3',
                foto: gatinho,
                zona: 'leste',
                local: 'Recicla Leste',
                endereco: 'Rua do Leste, 3',
                telefone: '(11) 33333-3333',
            },
            {
                id: 'zona4',
                foto: gatinho,
                zona: 'oeste',
                local: 'Recicla Oeste',
                endereco: 'Rua do Oeste, 4',
                telefone: '(11) 44444-4444',
            }
        ]
    }

    handleChange = evento => {
        this.setState({
            zona: evento.target.value
        })
    }

    render() {
        let lista = this.state.lista;

        if (this.state.zona) {
            lista = this.state.lista.filter(item => item.zona === this.state.zona)
        }

        return (
            <section className="busca">
                <h2 className="busca-titulo">Recicle</h2>

                <form className="busca-formulario">
                    <label htmlFor="zona">Buscar por: </label>
                    <select id="zona" value={this.state.zona} onChange={this.handleChange}>
                        <option value="">Todas</option>
                        <option value="norte">Zona norte</option>
                        <option value="sul">Zona sul</option>
                        <option value="leste">Zona leste</option>
                        <option value="oeste">Zona oeste</option>
                    </select>
                </form>

                <ul className="busca-lista">
                    {lista.map(item => (
                        <li className="busca-lista-item" key={item.id}>
                            <h4 className="busca-lista-item-titulo">{item.local}</h4>
                            <img className="busca-lista-item-imagem" src={item.foto} alt="Foto do local" />
                            <address>{item.endereco} / {item.telefone}</address>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Busca