import React from 'react'
import lixo from './lixo.jpg'
import './Banner.css'


function Banner(props) {
    return (
        <img className="banner" src={lixo} alt="Banner" />
    )
}

export default Banner