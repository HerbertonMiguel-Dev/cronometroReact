import React, { Component } from 'react'; // Importa React e o componente base "Component"
import './style.css'; // Importa o arquivo de estilos CSS

class App extends Component {
  constructor(props) {
    super(props); // Chama o construtor da classe pai (Component)
    
    // Define o estado inicial do componente
    this.state = { 
      numero: 0, // Inicializa o cronômetro com 0
      botao: 'VAI' // Define o texto do botão inicial como 'VAI'
    };
    
    this.timer = null; // Inicializa o timer como null (não iniciado)
    
    // Faz o bind dos métodos para o contexto do componente
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  // Método que inicia ou pausa o cronômetro
  vai() {
    let state = this.state; // Armazena o estado atual em uma variável

    if (this.timer !== null) { // Verifica se o cronômetro já está ativo
      clearInterval(this.timer); // Para o cronômetro
      this.timer = null; // Define o timer como null (parado)
      state.botao = 'VAI'; // Altera o texto do botão para 'VAI'
    } else { // Se o cronômetro não estiver ativo
      this.timer = setInterval(() => { // Inicia o cronômetro
        let state = this.state; // Atualiza o estado do cronômetro
        state.numero += 0.1; // Incrementa o número do cronômetro em 0.1
        this.setState(state); // Atualiza o estado do componente com o novo número
      }, 100); // Intervalo de 100 milissegundos (0.1 segundo)
      
      state.botao = 'PAUSAR'; // Altera o texto do botão para 'PAUSAR'
    }

    this.setState(state); // Atualiza o estado do componente
  }

  // Método que limpa o cronômetro e redefine o estado inicial
  limpar() {
    if (this.timer !== null) { // Verifica se o cronômetro está ativo
      clearInterval(this.timer); // Para o cronômetro
      this.timer = null; // Define o timer como null (parado)
    }

    let state = this.state; // Armazena o estado atual em uma variável
    state.numero = 0; // Reseta o número do cronômetro para 0
    state.botao = 'VAI'; // Redefine o texto do botão para 'VAI'
    this.setState(state); // Atualiza o estado do componente
  }

  // Método que renderiza o componente na tela
  render() {
    return (
      <div className="container"> {/* Div principal que contém todo o componente */}
        <img src={require('./assets/cronometro.png')} className="img" alt="Cronômetro" /> {/* Imagem do cronômetro */}
        <a className="timer">{this.state.numero.toFixed(1)}</a> {/* Mostra o valor do cronômetro formatado com uma casa decimal */}
        
        <div className="areaBtn"> {/* Div que contém os botões */}
          {/* Botão que inicia ou pausa o cronômetro */}
          <a className="botao" onClick={this.vai}>{this.state.botao}</a> 
          {/* Botão que limpa o cronômetro */}
          <a className="botao" onClick={this.limpar}>LIMPAR</a> 
        </div>
      </div>
    );
  }
}

export default App; // Exporta o componente App como padrão para uso em outros arquivos
