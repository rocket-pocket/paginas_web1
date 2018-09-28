import React, { Component } from 'react';

export class AddTareas extends Component {

    render () {
        console.log('PROPS: ', this.props)
        return (
            <form action="">
                <input id="inTarea" type="text" placeholder="Nueva tarea"
                value={this.props.tarea} onChange={this.props.setNewTarea}/>
                <button id="btnAdd" type="button" onClick={this.props.addTarea}>Añadir</button>
            </form>
        )
    }
}