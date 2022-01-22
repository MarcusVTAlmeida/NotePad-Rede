import React, { Component } from "react";
import './App.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink  } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import ReactDOM from 'react-dom';
import Clipboard from 'react-clipboard.js';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class App extends React.Component {
  constructor(props) {
    super(props);    
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.getText = this.getText.bind(this);
    this.state = {
      telefone: '',
      CPFCNPJ: '',
      nomeC: '',
      nomeT: '',
      cidade: '',
      notesDesconexao: "",
      noteDesconexao: [],
      notesDesbloqueio: "",
      noteDesbloqueio: [],
      notesLentidao: "",
      noteLentidao: [],
      notesQuedas: "",
      noteQuedas: [],
      notesProblemasite: "",
      noteProblemasite: [],
      notesAlterarvencimento: "",
      noteAlterarvencimento: [],
      notesNegociaçaodivida: "",
      noteNegociaçaodivida: [],  
      lossModem:'',
      reboot:'',
      cabo:'',
      fonte:'',
      roteador:'',
      instabilidade:'',
      testes:'',
      distancia:'',
      log:'',
      wifi:'',
      site:'',
      aparelho:'',
      vencimento: '',
      copySuccess: '',
      value: '',
      copied: false,  
      showing: true,   
      textAreaNego: ''
    };
  }
  onSuccess() {
    console.info('successfully copied');
  }
 
  getText() {
    return  `      
    Nome do atendido: ${this.state.nomeC}
    Nome do Titular: ${this.state.nomeT}
    CPF/CNPJ: ${this.state.CPFCNPJ}
    Telefone: ${this.state.telefone}
    Cidade: ${this.state.cidade}
    ............
    DESCONEXÃO
    Descreva detalhadamente  a reclamação/solicitação do cliente.
    R: ${this.state.lossModem}

    Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
    R: 

    Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
    R: 

    Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
    R: 

    O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
    R: 

    Qual melhor horário ou período para receber o retorno do time de Suporte?
    MANHA [  ]		TARDE[  ] 

    Contato Principal: 
    Contato 2: 
    Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ]  

    Alertou o cliente, que é necessário atender o retorno do time de Suporte?
    R:
 `;
  }
  copyToClipboardDesc = (e) => {
    this.textdesconexao.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  desconexao = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      textdesconexao: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      DESCONEXÃO
      Descreva detalhadamente  a reclamação/solicitação do cliente.
      R: ${this.state.lossModem}

      Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
      R: 

      Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
      R: 

      Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
      R: 

      O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
      R: 

      Qual melhor horário ou período para receber o retorno do time de Suporte?
			MANHA [  ]		TARDE[  ] 

      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ]  

      Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      R:
   `,
      noteDesconexao: this.state.noteDesconexao.concat(obj)
    });
  };
  copyToClipboardDesb = (e) => {
    this.textdesbloqueio.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  desbloqueio = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
        textdesbloqueio: `      
        Nome do atendido: ${this.state.nomeC}
        Nome do Titular: ${this.state.nomeT}
        CPF/CNPJ: ${this.state.CPFCNPJ}
        Telefone: ${this.state.telefone}
        Cidade: ${this.state.cidade}
        ............
        DESBLOQUEIO
        Cliente solicitou Desbloqueio em confiança. 

        Enviou o comprovante de pagamento?
        R: 

        Ciente do tempo provisório (72 horas)?
        R: 

        Ciente dos canais de pagamento? (App, Totem, Portal)
        R: 

        Contato Principal: 
        Contato 2: 
     `,
      noteDesbloqueio: this.state.noteDesbloqueio.concat(obj)
    });
  };
  copyToClipboardLent = (e) => {
    this.textlentidao.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  lentidao = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      textlentidao: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      LENTIDÃO
      Descreva detalhadamente  a reclamação/solicitação do cliente.
      R: 

      Existe alguma instabilidade ou incidente ocorrendo?
      R: 

      Conferiu a Fonte e Cabo de Energia, evitando mal contato ou desligamento?
      R: 

      Questionou sobre a Distância que utiliza?
      R: 

      Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
      R: ${this.state.reboot}

      Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
      R: 

      Cliente utiliza quantos dispositivos no local? (celular, tv, tablet, notebook, videogame)
      R: 

      Qual melhor horário ou período para receber o retorno do time de Suporte?
					MANHA [  ]		TARDE[  ] 

      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ] 

      Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      R:
   `,
      noteLentidao: this.state.noteLentidao.concat(obj)
    });
  };
  copyToClipboardQued = (e) => {
    this.textquedas.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  quedas = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      textquedas: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      QUEDAS
      Descreva detalhadamente  a reclamação/solicitação do cliente.
      R: 

      No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
      R: 

      Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)?
      R: 

      Checou a posição do Cabo de Rede que vai para o roteador, se está bem encaixado e na porta WAN?
      R: 

      Conferiu fonte de energia/tomada da ONU e Roteador, evitando mal contato ou desligamento?
      R: 

      O nome do WiFi chega a “desaparecer” quando sente a Queda?
      R: 

      Qual melhor horário ou período para receber o retorno do time de Suporte?
					MANHA [  ]		TARDE[  ]

      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ] 

      Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      R:
   `,
      noteQuedas: this.state.noteQuedas.concat(obj)
    });
  };
  copyToClipboardProb = (e) => {
    this.textproblemasite.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  problemasite = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      textproblemasite: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      PROBLEMAS PARA ACESSAR SITE
      Descreva detalhadamente  a reclamação/solicitação do cliente.
      R: 

      Existe alguma instabilidade no fornecimento ocorrendo?
      R: 

      Qual site exato não consegue acessar?
      R: 

      Testou em outro aparelho ou Rede 3G/Dados móveis?
      R: 

      Qual melhor horário ou período para receber o retorno do time de Suporte?
				MANHA [  ]		TARDE[  ] 

      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ] 

      Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      R:
   `,
      noteProblemasite: this.state.noteProblemasite.concat(obj)
    });
  };
  copyToClipboardAlte = (e) => {
    this.textAreaAlte.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };
  alterarvencimento = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
    
      noteAlterarvencimento: this.state.noteAlterarvencimento.concat(obj)
    });
  };
  copyToClipboardNego = (e) => {
    this.textAreaNego.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
    this.setState({
      textAreaNego: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      NEGOCIAÇÃO DE DÍVIDA
      Negociação de contas em atraso.
      
      Qual o melhor período para contato do time financeiro?
      R: ${this.state.lossModem}
      
      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ] 
   `,
   
      
    });
  };
  negociaçaodivida = () => {
    const notes = document.getElementById("notes-value").value;
    const obj = { notes };
    this.setState({
      textAreaNego: `      
      Nome do atendido: ${this.state.nomeC}
      Nome do Titular: ${this.state.nomeT}
      CPF/CNPJ: ${this.state.CPFCNPJ}
      Telefone: ${this.state.telefone}
      Cidade: ${this.state.cidade}
      ............
      NEGOCIAÇÃO DE DÍVIDA
      Negociação de contas em atraso.
      
      Qual o melhor período para contato do time financeiro?
      R: ${this.state.lossModem}
      
      Contato Principal: 
      Contato 2: 
      Meio de contato: WHATSAPP [  ]		LIGAÇÃO [  ] 
   `,
      noteNegociaçaodivida: this.state.noteNegociaçaodivida.concat(obj)
      
    });
  };
  onDeleteDesconexao = index => {
    const deleteDesconexao = this.state.noteDesconexao.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteDesconexao: deleteDesconexao
    });
  };
  onDeleteDesbloqueio = index => {
    const deleteDesbloqueio = this.state.noteDesbloqueio.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteDesbloqueio: deleteDesbloqueio
    });
  };
  onDeleteLentidao = index => {
    const deleteLentidao = this.state.noteLentidao.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteLentidao: deleteLentidao
    });
  };
  onDeleteQuedas = index => {
    const deleteQuedas = this.state.noteQuedas.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteQuedas: deleteQuedas
    });
  };
  onDeleteProblemasite = index => {
    const deleteProblemasite = this.state.noteProblemasite.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteProblemasite: deleteProblemasite
    });
  };
  onDeleteAlterarvencimento = index => {
    const deleteAlterarvencimento = this.state.noteAlterarvencimento.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteAlterarvencimento: deleteAlterarvencimento
    });
  };
  onDeleteNegociaçaodivida = index => {
    const deleteNegociaçaodivida = this.state.noteNegociaçaodivida.filter((element, i) => i !== parseInt(index))
    this.setState({
      noteNegociaçaodivida: deleteNegociaçaodivida
    });
  };

  handleChange2(e) {    
    this.setState({ telefone: e.target.value });    
  };
  handleChange1(e) {    
    this.setState({ nomeC: e.target.value });    
  };
  handleChange3(e) {    
    this.setState({ nomeT: e.target.value });    
  };
  handleChange4(e) {    
    this.setState({ CPFCNPJ: e.target.value });    
  };
  handleChange5(e) {    
    this.setState({ cidade: e.target.value });   
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
 
  render() {
     const telefone = this.state.telefone;
     const nomeC = this.state.nomeC;
     const nomeT = this.state.nomeT;
     const CPFCNPJ = this.state.CPFCNPJ;
     const cidade = this.state.cidade; 
     const lossModem = this.state.lossModem;
     const reboot = this.state.reboot;
     const cabo = this.state.cabo;
     const fonte = this.state.fonte;
     const roteador = this.state.roteador;
     const instabilidade = this.state.instabilidade;
     const testes = this.state.testes;
     const distancia = this.state.distancia
     const log = this.state.log;
     const wifi = this.state.wifi;
     const site = this.state.site;
     const aparelho = this.state.aparelho;
     const vencimento = this.state.vencimento
     const { showing } = this.state;
    return (
      <div className="App">
     <header className="App-header">   
     <div>
      <label>
       Nome Completo:
       
       <input type="text" name="nomeC" value={nomeC} onChange={this.handleChange1} />
      </label>
      <br/>
      <label>
       Nome do titular:
       
       <input type="text" name="nomeT" value={nomeT} onChange={this.handleChange3} id="notes-value"/>
      </label>
      <br/>
      <label>
       CPF/CNPJ:
       
       <input type="text" name="CPFCNPJ" value={CPFCNPJ} onChange={this.handleChange4}/>
      </label>
      <br/>
      <label>
       Telefone:
       
       <input type="tel" name="telefone" value={telefone} onChange={this.handleChange2} />
      </label>
      <br/>
      <label >
       Cidade:       
       <input type="text" name="cidade" value={cidade} onChange={this.handleChange5}/>
      </label>     
      <br/> 
      </div>         

<MDBDropdown>
      <MDBDropdownToggle caret color="info">
        Scripts Comercial
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>                
      </MDBDropdownMenu>
    </MDBDropdown> 
   
    <MDBDropdown>
        <MDBDropdownToggle caret color="info">Scripts Suporte Técnico</MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.setState({ showing: !showing })}>
            <MDBDropdownLink tag='button' type='button'>
            DESCONEXÃO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={this.lentidao}>
            <MDBDropdownLink tag='button' type='button'>
            LENTIDÃO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={this.quedas}>
            <MDBDropdownLink tag='button' type='button'>
            QUEDAS
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={this.problemasite}>
            <MDBDropdownLink tag='button' type='button'>
            PROBLEMAS PARA ACESSAR SITES
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

    <MDBDropdown>
        <MDBDropdownToggle caret color="info">Scripts Financeiro</MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={this.desbloqueio}>
            <MDBDropdownLink tag='button' type='button'>
            DESBLOQUEIO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={this.alterarvencimento}>
            <MDBDropdownLink tag='button' type='button'>
            ALTERAR VENCIMENTO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={this.negociaçaodivida}>
            <MDBDropdownLink tag='button' type='button'>
            NEGOCIAÇÃO DE DÍVIDA
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>    
      <div>
                  
                { showing 
                    ? <div>
                      <button onClick={() => this.setState({ showing: !showing })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
      Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='lossModem' name='lossModem' value='Sim'
          checked={lossModem === 'Sim'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='lossModemN' name='lossModem' value='Não' 
          checked={lossModem === 'Não'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
                  
   
  </div>                   
  <Clipboard option-text={this.getText} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 
     
      {this.state.noteDesconexao.length > 0
        ? this.state.noteDesconexao.map((item, index) => (
        <div key={index} className={`notes-item ${index}`}>    
        <div>
      <label>
      Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='lossModem' name='lossModem' value='Sim'
          checked={lossModem === 'Sim'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='lossModemN' name='lossModem' value='Não' 
          checked={lossModem === 'Não'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
    </div>

<div className="some-container">
     
       <div>
          <label>
          Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN? 
          </label>
          <br/>
          <label>Sim</label>
            <input type='radio' id='cabo' name='cabo' value='Sim'
              checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} />
              <label>Nao</label>
            <input type='radio' id='caboN' name='caboN' value='Não' 
              checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} />
        </div>
      
    <div>
    <label>
    Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador? 
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='fonte' name='fonte' value='Sim'
        checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='fonteN' name='fonteN' value='Não' 
        checked={this.state.fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} />
  </div>
  
  <div>
    <label>
    O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras)?
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='roteador' name='roteador' value='Sim'
        checked={this.state.roteador === 'Sim'} onChange={(e) => this.setState({ roteador: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='roteadorN' name='roteadorN' value='Não' 
        checked={this.state.roteador === 'Não'} onChange={(e) => this.setState({ roteador: e.target.value })} />
  </div>
     
  <div>
    <label>
    Rebootou/Reiniciou através do Botão Power ou direto da Fonte de Energia?
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='reboot' name='reboot' value='Sim'
        checked={this.state.reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='rebootN' name='rebootN' value='Não' 
        checked={this.state.reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} />
  </div>
</div> 
        <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: "left", border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
     

  </div> 
  <button
    className="delete-note"
    onClick={() => this.onDeleteDesconexao(index)}>
    X
    </button>           
   
    <CopyToClipboard text={this.state.textdesconexao}
          onCopy={() => this.setState({copied: true})}>
          <button>COPIAR with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
    </div>
    ))
   : ""}
              
      {this.state.noteLentidao.length > 0
        ? this.state.noteLentidao.map((item, index) => (
        <div key={index} className={`notes-item ${index}`}>    
        <div>
      <label>
      Existe alguma instabilidade ou incidente ocorrendo?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='instabilidade' name='instabilidade' value='Sim'
          checked={instabilidade === 'Sim'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='instabilidadeN' name='instabilidadeN' value='Não' 
          checked={instabilidade === 'Não'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
    </div>
    <div>
          <label>
          Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN? 
          </label>
          <br/>
          <label>Sim</label>
            <input type='radio' id='cabo' name='cabo' value='Sim'
              checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} />
              <label>Nao</label>
            <input type='radio' id='caboN' name='caboN' value='Não' 
              checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} />
        </div>
        <div>
    <label>
    Questionou sobre a Distância que utiliza?
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='distancia' name='distancia' value='Sim'
        checked={this.state.distancia === 'Sim'} onChange={(e) => this.setState({ distancia: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='distanciaN' name='distanciaN' value='Não' 
        checked={this.state.distancia === 'Não'} onChange={(e) => this.setState({ distancia: e.target.value })} />
  </div>
        <div>
    <label>
    Rebootou/Reiniciou através do Botão Power ou direto da Fonte de Energia?
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='reboot' name='reboot' value='Sim'
        checked={this.state.reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='rebootN' name='rebootN' value='Não' 
        checked={this.state.reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} />
  </div>
  <div>
    <label>
    Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='testes' name='testes' value='Sim'
        checked={this.state.testes === 'Sim'} onChange={(e) => this.setState({ testes: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='testesN' name='testesN' value='Não' 
        checked={this.state.testes === 'Não'} onChange={(e) => this.setState({ testes: e.target.value })} />
  </div>
        <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: "left", border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
       
  </div> 
  <button
    className="delete-note"
    onClick={() => this.onDeleteLentidao(index)}>
    X
    </button>           
    <CopyToClipboard text={this.state.textlentidao}
          onCopy={() => this.setState({copied: true})}>
          <button>COPIAR with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
    </div>
    ))
   : ""}
            
      {this.state.noteQuedas.length > 0
        ? this.state.noteQuedas.map((item, index) => (
        <div key={index} className={`notes-item ${index}`}>    
          <div>
      <label>
      No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='log' name='log' value='Sim'
          checked={this.state.log === 'Sim'} onChange={(e) => this.setState({ log: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='logN' name='log' value='Não' 
          checked={this.state.log === 'Não'} onChange={(e) => this.setState({ log: e.target.value })} />
    </div>
    <div>
      <label>
      Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='lossModem' name='lossModem' value='Sim'
          checked={lossModem === 'Sim'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='lossModemN' name='lossModem' value='Não' 
          checked={lossModem === 'Não'} onChange={(e) => this.setState({ lossModem: e.target.value })} />
    </div>
    <div>
          <label>
          Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN? 
          </label>
          <br/>
          <label>Sim</label>
            <input type='radio' id='cabo' name='cabo' value='Sim'
              checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} />
              <label>Nao</label>
            <input type='radio' id='caboN' name='caboN' value='Não' 
              checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} />
        </div>
        <div>
    <label>
    Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador? 
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='fonte' name='fonte' value='Sim'
        checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='fonteN' name='fonteN' value='Não' 
        checked={this.state.fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} />
  </div>
  <div>
    <label>
    O nome do WiFi chega a “desaparecer” quando sente a Queda? 
    </label>
    <br/>
    <label>Sim</label>
      <input type='radio' id='wifi' name='wifi' value='Sim'
        checked={this.state.wifi === 'Sim'} onChange={(e) => this.setState({ wifi: e.target.value })} />
        <label>Nao</label>
      <input type='radio' id='wifiN' name='wifiN' value='Não' 
        checked={this.state.wifi === 'Não'} onChange={(e) => this.setState({ wifi: e.target.value })} />
  </div>
        <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: "left", border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
       
  </div> 
  <button
    className="delete-note"
    onClick={() => this.onDeleteQuedas(index)}>
    X
    </button>           
    <CopyToClipboard text={this.state.textquedas}
          onCopy={() => this.setState({copied: true})}>
          <button>COPIAR with button</button>
        </CopyToClipboard>
        {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
    </div>
    ))
   : ""}
       
      {this.state.noteProblemasite.length > 0
        ? this.state.noteProblemasite.map((item, index) => (
        <div key={index} className={`notes-item ${index}`}>    
         <div>
      <label>
      Existe alguma instabilidade ou incidente ocorrendo?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='instabilidade' name='instabilidade' value='Sim'
          checked={instabilidade === 'Sim'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='instabilidadeN' name='instabilidadeN' value='Não' 
          checked={instabilidade === 'Não'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
    </div>
    <div>
      <label>
      Qual site exato não consegue acessar? 
      </label>
      <br/>
    </div>
    <div>
      <label>
      Testou em outro aparelho ou Rede 3G/Dados móveis? 
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='aparelho' name='aparelho' value='Sim'
          checked={this.state.aparelho === 'Sim'} onChange={(e) => this.setState({ aparelho: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='aparelhoN' name='aparelhoN' value='Não' 
          checked={this.state.aparelho === 'Não'} onChange={(e) => this.setState({ aparelho: e.target.value })} />
    </div>
        <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: "left", border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
        
  </div> 
  <button
    className="delete-note"
    onClick={() => this.onDeleteProblemasite(index)}>
    X
    </button>           
    <CopyToClipboard text={this.state.textproblemasite}
          onCopy={() => this.setState({copied: true})}>
          <button>COPIAR with button</button>
        </CopyToClipboard>
    </div>
    ))
   : ""}
        
      {this.state.noteDesbloqueio.length > 0
            ? this.state.noteDesbloqueio.map((item, index) => (
                <div key={index} className={`notes-item ${index}`}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <textarea
        style={{ height: 600, width: 600}}
           ref={(textAreaDesb) => this.textAreaDesb = textAreaDesb}
           value={`    
           Nome do atendido: ${nomeC}
           Nome do Titular: ${nomeT}
           CPF/CNPJ: ${CPFCNPJ}
           Telefone: ${telefone}
           Cidade: ${cidade}
           ............    
           DESBLOQUEIO 
           Cliente solicitou o Desbloqueio em confiança

           Enviou comprovante?
           R: 

           Ciente do tempo provisório (72h)? 
           R: 

           Ciente dos canais de pagamento? (App, Totem, Portal)
           R:

           Contato: ${telefone}
   `}/>
   
  </div> 
  

  <button
                      className="delete-note"
                      onClick={() => this.onDeleteDesbloqueio(index)}>
                      X
                    </button>                  
                    <div>
        {        
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyToClipboardDesb}>Copy</button> 
            {this.state.copySuccess}
          </div>
        }
       
      </div>
                </div>
              ))
            : ""}
     
        {this.state.noteAlterarvencimento.length > 0
            ? this.state.noteAlterarvencimento.map((item, index) => (
                <div key={index} className={`notes-item ${index}`}>    
                 <div>
      <label>
      Qual novo vencimento? 
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='vencimento' name='vencimento' value='Sim'
          checked={this.state.vencimento === 'Sim'} onChange={(e) => this.setState({ vencimento: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='vencimentoN' name='vencimento' value='Não' 
          checked={this.state.vencimento === 'Não'} onChange={(e) => this.setState({ vencimento: e.target.value })} />
    </div>
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <textarea
        style={{ height: 600, width: 600}}
           ref={(textAreaAlte) => this.textAreaAlte = textAreaAlte}
           value={`    
           Nome do atendido: ${nomeC}
           Nome do Titular: ${nomeT}
           CPF/CNPJ: ${CPFCNPJ}
           Telefone: ${telefone}
           Cidade: ${cidade}
           ............    
           ALTERAR VENCIMENTO
           Alteração de Vencimento da Mensalidade

           Qual novo vencimento? 
           R: ${vencimento}
  
           Contato: ${telefone}
__
  :warning: Não pode conter nenhuma fatura/boleto em aberto, para realizar a alteração.
__
   `}/>
   
  </div>  

  <button
className="delete-note"
     onClick={() => this.onDeleteAlterarvencimento(index)}>
      X
   </button>                  
   <div>
        {        
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyToClipboardAlte}>Copy</button> 
            {this.state.copySuccess}
          </div>
        }
       
      </div>           
  </div>
    ))
  : ""}

            {this.state.noteNegociaçaodivida.length > 0
            ? this.state.noteNegociaçaodivida.map((item, index) => (
                <div key={index} className={`notes-item ${index}`}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <textarea
        style={{ height: 600, width: 600}}
           ref={(textAreaNego) => this.textAreaNego = textAreaNego}
           value={`    
           Nome do atendido: ${nomeC}
           Nome do Titular: ${nomeT}
           CPF/CNPJ: ${CPFCNPJ}
           Telefone: ${telefone}
           Cidade: ${cidade}
           ............    
           NEGOCIAÇÃO DE DÍVIDA
           Deseja negociar as contas em atraso.

           Qual melhor período para contato do time Financeiro?
           R:
           Possui mais algum telefone ou e-mail para contato?
           R:
   `}/>
   
  </div>  

  <button
    className="delete-note"
     onClick={() => this.onDeleteNegociaçaodivida(index)}>
      X
    </button>                  
  
     </div>
     ))
  : ""}
        

        </header>
      </div>
    );
  }
}
export default App;
