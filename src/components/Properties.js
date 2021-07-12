import React from 'react'
import PropTypes  from 'prop-types'

function Properties(props) {
    return (
        <div>
            <h2>Properties ----- {props.name}</h2>
            <ul>
                <li>{props.msg}</li>
                <li>{props.algo}</li>
                <li>{props.numero}</li>
                <li>{!props.boleano ? 'Verdadero' : 'Entonces no'}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.elementoreact}</li>
                <li>{props.componentereact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            </ul>
        </div>
    )
}

//propiedades por defecto
Properties.defaultProps ={
    name:'Edwin'
}


//porpiedades con tipo de datos PROP TYPES
Properties.propTypes={
    msg: PropTypes.string
}

export default Properties
