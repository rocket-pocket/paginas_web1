import React, { Component } from 'react';

export class Tarea extends Component {

    constructor(...props) {
        super()
        //this.id = this.props.id
        //this.name =  this.props.name
        //this.isComplete =  this.props.isComplete
        console.dir(this)
   }

    render() {
        return (
            <li>
            <input type="checkbox" name="is-completa" id={"check-" + this.props.item.id}
                data-id={this.props.item.id} onChange={this.props.checkTarea}
                defaultChecked={this.props.item.isComplete}></input>
            <span className={['nombre-tarea ', this.props.item.isComplete ? 'hecho' : '' ].join(' ')}>
                {this.props.item.name}</span>
            <span id={'borrar-'+ this.props.item.id} data-id={this.props.item.id}
                className={['borrar-tarea', this.props.item.isComplete ? 'borrar-activo' : 'inactivo'].join(' ')}
                onClick={this.props.borrarTarea}>🗑️</span>
            </li>
        )
    }
}