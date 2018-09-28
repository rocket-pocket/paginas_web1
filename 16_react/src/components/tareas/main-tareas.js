import React, { Component } from 'react';
import { ListaTareas } from './lista-tareas';
import './tareas.css'

export class MainTareas extends Component {

    render () {
        return (
            <div>
                <h2>Tareas</h2>
                <ListaTareas></ListaTareas>
            </div>
        )
    }
}