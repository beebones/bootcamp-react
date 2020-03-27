import React, { Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: " ",
      cidade: " ",
      email: " ",
      cpf: " ",
      telefone: " ",
      checked: false
    };
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { nome, cidade, email, cpf, telefone, checked } = this.state;
    
    if(!nome || !cidade || !email || !cpf || !telefone || !checked) {
      alert("Preencha corretamente os campos")
    } else {
      alert("Seus dados foram aprovados")
    }
    console.log(this.state)
  }



  render() {
    return (
      <div className="App">
        <h3>Cadastro de Alunas</h3>
        <form onSubmit={this.handleSubmit}>
        {/* <form onSubmit={() => console.log(this.state)}> */}
          <div className="form-input-container">
            <label className="input">Nome Completo</label>
            <input type="text" value={this.state.nome} onChange={(e) => {
              console.log(e)
              this.setState({
                nome: e.target.value
              })
            }}/>

            <label className="input">Cidade</label>
            <input type="text" value={this.state.cidade} onChange={(e) => {
              console.log(e)
              this.setState({
                cidade: e.target.value
              })
            }}/>

            <label className="input">Email</label>
            <input type="text" value={this.state.email} onChange={(e) => {
              console.log(e)
              this.setState({
                email: e.target.value
              })
            }}/>

            <label className="input">CPF</label>
            <input type="text" value={this.state.cpf} onChange={(e) => {
              console.log(e)
              this.setState({
                cpf: e.target.value
              })
            }}/>

            <label className="input">Telefone</label>
            <input type="text" value={this.state.telefone} onChange={(e) => {
              console.log(e)
              this.setState({
                telefone: e.target.value
              })
            }}/>

            <label className="input">Não sou um robô</label>
            <input type='checkbox' value="my-checkbox" checked={this.state.checked} onChange={(e) => {
              this.setState({ checked: !this.state.checked })
            }} />
          </div> 
          <input type="submit" value="Inscrever" />    
        </form>
      </div>
    )
  }
  
}

export default App;
