import React, { Component } from 'react';
import { FetchService } from "../../servicios/fetch-service.js";
import {  MENSAJES } from "../../config.js"
import { AddTareas } from './add-tarea';
import { Tarea } from './tarea'

export class ListaTareas extends Component {

    constructor() {
        super()
        this.state = {
            uRL : 'http://localhost:3000/tareas',
            aTareas : [],
            newTarea: {
                name: '',
                isComplete: false
            }
        }
        this.fetchService = new FetchService()
        this.getTareas()
        console.log(this)

        this.borrarTarea = this.borrarTarea.bind(this)
        this.checkTarea = this.checkTarea.bind(this)
        this.setNewTarea = this.setNewTarea.bind(this)
        this.addTarea = this.addTarea.bind(this)
        this.borrarSelect = this.borrarSelect.bind(this)
        
    }

    getTareas() {
        this.fetchService.send(this.state.uRL, {method: 'GET' })
            .then( data => {
                this.setState({aTareas: data})
                console.log("Ejecutando getTareas", this)
            },
            error => {console.dir(error)}
            )
    }

    checkTarea(oEv) {
        console.log('TODO check tarea')
        console.dir(oEv)
        // console.log(oEv.target.dataset.id)
        // console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.checked
        }
        let url = this.state.uRL + '/' + oEv.target.dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        // console.dir(headers)
        this.fetchService.send(url, {
                method: 'PATCH', 
                headers : headers,
                body: JSON.stringify(datos)
            }).then( 
                data => {
                    console.log(data)
                    this.getTareas()
                },
                error => console.log(error)
            )
    }

    borrarTarea(p) {
        let  id
        let isBtnUnic = false
        if (p.target) {
            isBtnUnic = true
            id = p.target.dataset.id
            if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        }
        else { 
            id =  p.id
        }
        console.log(id)
        let url = this.state.uRL + '/' + id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    if (isBtnUnic || p.isUltima) {
                        this.getTareas() 
                    }
                },
                error => console.log(error)
            )
    }

    setNewTarea(event) {
        this.setState({newTarea: {
            name: event.target.value,
            isComplete: false
        }})
    }

    addTarea() {
        if (!this.state.newTarea.name) {return}
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        this.fetchService.send(this.state.uRL, {
            method: 'POST', 
            headers : headers,
            body: JSON.stringify(this.state.newTarea)
        }).then(
            response => {
                // console.log(response)
                this.setState({newTarea: {
                    name: '',
                    isComplete: false
                }})
                this.getTareas()
            },
            error => console.log(error)
        )
    }

    borrarSelect() {
        
        let aSeleccionados = this.state.aTareas.filter(
            (item) => { return item.isComplete}
        )
        // Si no controlamos el disabled del boton
        // if(!aSeleccionados.length) {return}
        if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}

        aSeleccionados.forEach(
            (item, i, array) => {
                let isUltima = (i+1 === array.length) ? true : false
                this.borrarTarea( {id: item.id, isUltima: isUltima} )
            }
        ) 
    }

    render () {
        return (
            <div className="tareas">
                <AddTareas tarea={this.state.newTarea.name} setNewTarea={this.setNewTarea} addTarea={this.addTarea}></AddTareas>
                <ul className="tareas" id="lista">
                    {this.state.aTareas.map( 
                        (item, index) => {
                           return <Tarea key={index} item={item} 
                            borrarTarea={this.borrarTarea} checkTarea={this.checkTarea}></Tarea>
                        }
                    )}
                </ul>
                <button type="button" id="btn-borrar-select"
                onClick={this.borrarSelect}>Borrar completadas</button>
            </div>
        )
    }
}