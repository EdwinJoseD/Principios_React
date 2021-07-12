import React, { Component } from 'react'


//COMPONENTE BASADO EN CLASE 
/*
class MyComponent extends Component {
    

    render() {
        return (<h2>{this.props.msg}</h2>)
    }
}
*/

//COMPONENTE BASADO EN FUNCIONES EXPLICITA
/*
function MyComponent(props) {
    return <h2>{props.msg}</h2>;
}
*/


//COMPONENTE BASADO EN FUNCIONES IMPLICITAS
const MyComponent = props => {
    return (<h2>{props.msg}</h2>)
}

export default MyComponent;