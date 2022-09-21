import './App.css';
import {Component} from 'react';
import { Busca } from './Component/Busca';
import { Lista } from './Component/Lista';
import {Rodape} from './Component/Rodape';
import {Cabecalho} from './Component/Cabecalho'; 

class App extends Component{

    state = {
      busca: '',
      odas: []
    }

    componentDidMount(){
      this.carregaODAs();
    }

  carregaODAs(){
    const{busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca : evento.target.value});
    this.carregaODAs()
  }
  
  render(){
    const {odas} = this.state;
    return (
      <section className="container">
        
       

<Cabecalho
/>

        <div className= 'busca'>
      <Busca
        busca={this.state.busca}
        buscaODA={this.buscaODA}
        />
    </div>

    <div className = 'listas'>
      {odas.map(oda => ( 
      <div className='lista-in'>
        <Lista
        nome={oda.nome}
        usuario={oda.usuario}
        descricao={oda.descricao}
        data_inclusao={oda.data_inclusao}
        palavras_chave={oda.palavras_chave}
        />
      </div>
      ))}
      </div>

<div><Rodape/></div>
      </section>
    )
  }
}

export default App;
