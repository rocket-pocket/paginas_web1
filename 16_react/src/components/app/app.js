import React, { Component } from 'react';
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import './app.css';
import { MainTareas } from '../tareas/main-tareas';

class App extends Component {

  constructor () {
    super()
    this.title = 'Componentes'
    this.contentFooter = {
      autor: 'Alejandro Cerezo',
      empresa: 'CAS Training',
      lugar: 'Getafe - 2018'
  }
  }

  render() {
    return (
      <div className="App">
        <Header title={this.title}/>
        <main>
          <MainTareas />
        </main>
        <Footer {...this.contentFooter}/>
      </div>
    );
  }
}

export default App;
