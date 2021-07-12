import React from 'react'

function RenderizadoElementos(props) {
    const nums = props.numeros
    return (
        <div>
            <h2>Renderizado de Elementos</h2>
            <ul> { nums.map((num, i) => <li key={i}> Nmero {num} </li>) }</ul>
        </div>
    )
}

export default RenderizadoElementos
