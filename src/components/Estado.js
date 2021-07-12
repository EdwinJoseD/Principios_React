import React, { Component } from 'react'


function EstadoHijo(props) {
    return(
        <div>
            {props.contadorHijo}
        </div>
    )
}

class Estado extends Component {
    constructor(props) {
        super(props)
        this.state ={
            contador: 0
        }
        setInterval(() =>{
            this.setState({
                contador: this.state.contador+ 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <EstadoHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}



export default Estado;