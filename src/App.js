import React from 'react';
import {Buscador} from './componentes/Buscador';
import {Resultado} from './componentes/Resultado';
//import './App.css';

class App extends React.Component{

   state = {
     term: '',
     img: []
   }

  queryApi = () => {
    const term = this.state.term;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${term}`;
    fetch(url)
    .then(answer => answer.json())
    .then(answer => this.setState({img: answer.hits}))

  }

  dateSearch = (term) => {
    this.setState({term}, () => {this.queryApi()})
  }

render() {
  return (
    
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de imagenes</p>
        <Buscador
        dateSearch={this.dateSearch}/>
      </div>
      <Resultado 
      img={this.state.img}
      />
    </div>
      
    
  );

}

}

export default App;
