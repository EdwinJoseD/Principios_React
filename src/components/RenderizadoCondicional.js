import React, { Component } from 'react'


function Login(){
return (
    <div>
        <h2>Log In</h2>
    </div>
)
}

function Logout(){
return (
    <div>
    <h2>Log Out</h2>       
    </div>
)
}


export class RenderizadoCondicional extends Component {
    constructor(props){
        super(props)
        this.state = {
            session: true
        }
    }
    render() {
        return (
            <div>
                <h2> Renderizado Condicional</h2>            
                {this.state.session ? <Login />: <Logout />}
            </div>
        )
    }
}

export default RenderizadoCondicional
