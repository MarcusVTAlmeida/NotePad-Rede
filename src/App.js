import React, { Component } from "react";
import './App.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink  } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import Clipboard from 'react-clipboard.js';
import Scripts from "./Scripts";
   
class App extends React.Component {
  constructor(props) {
    super(props);  
    this.handleChange = this.handleChange.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
    this.handleChange12 = this.handleChange12.bind(this);
    this.handleChange13 = this.handleChange13.bind(this);
    this.handleChange14 = this.handleChange14.bind(this);
    this.handleChange15 = this.handleChange15.bind(this);
    this.handleChange16 = this.handleChange16.bind(this);
    this.handleChange17 = this.handleChange17.bind(this);
    this.handleChange18 = this.handleChange18.bind(this);
    this.handleChange19 = this.handleChange19.bind(this);
    this.handleChange20 = this.handleChange20.bind(this);
    this.handleChange21 = this.handleChange21.bind(this);
    this.handleChange22 = this.handleChange22.bind(this);
    this.handleChange23 = this.handleChange23.bind(this);
    this.handleChange24 = this.handleChange24.bind(this);
    this.handleChange25 = this.handleChange25.bind(this);
    this.handleChange26 = this.handleChange26.bind(this);
    this.handleChange27 = this.handleChange27.bind(this);
    this.handleChange28 = this.handleChange28.bind(this);
    this.handleChange29 = this.handleChange29.bind(this);
    this.handleChange30 = this.handleChange30.bind(this);
    this.handleChange31 = this.handleChange31.bind(this);
    this.handleChange32 = this.handleChange32.bind(this);
    this.handleChange33 = this.handleChange33.bind(this);
    this.handleChange34 = this.handleChange34.bind(this);
    this.handleChange35 = this.handleChange35.bind(this);
    this.handleChange37 = this.handleChange37.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getTextDesc = this.getTextDesc.bind(this);
    this.getTextLent = this.getTextLent.bind(this);
    this.getTextQued = this.getTextQued.bind(this);
    this.getTextProb = this.getTextProb.bind(this);
    this.getTextRote = this.getTextRote.bind(this);
    this.getTextSenh = this.getTextSenh.bind(this);
    this.getTextRedi = this.getTextRedi.bind(this);
    this.getTextLoss = this.getTextLoss.bind(this);
    this.getTextAten = this.getTextAten.bind(this);
    this.getTextDesb = this.getTextDesb.bind(this);
    this.getTextAlte = this.getTextAlte.bind(this);
    this.getTextNego = this.getTextNego.bind(this);
    this.getTextFina = this.getTextFina.bind(this);
    this.getTextCanc = this.getTextCanc.bind(this);
    this.getTextTran = this.getTextTran.bind(this);
    this.getTextEnde = this.getTextEnde.bind(this);
    this.state = {
      modelo:'',
      nwifi:'',
      swifi:'',
      cidade: '',
      horario:'',
      contato1:'',
      contato2:'',
      descricao: '',
      mcontato:'',
      lossModem:'',
      reboot:'',
      rcliente:'',
      cabo:'',
      fonte:'',
      enderecoi:'',
      enderecof:'',
      instabilidade:'',
      testes:'',
      obs:'',
      lendereco:'',
      distancia:'',
      titularidadeE:'',
      portas:'',
      titularidadeV:'',
      lan:'',
      cep:'',
      dispositivos:'',
      log:'',
      tnwifi:'',
      tswifi:'',
      equipamento:'',
      rua:'',
      canais:'',
      provisorio:'',
      solicitacao:'',
      idhuggy:'',
      ipmac:'',
      wifi:'',
      site:'',
      upppoe:'',
      scancelamento:'',
      recliente:'',
      estado:'',
      vsinal:'',
      bairro:'',
      comprovante:'',
      sinal:'',
      spppoe:'',
      endereco:'',
      value:'',
      aparelho:'',
      idhuggy:'',
      enderecoC:'',
      numero:'',
      vencimento: '',
      alertou: '',
      copySuccess: '',
      copied: false,  
      showing: true, 
    };
  }
 
  getTextDesc() {
    return  `      
    DESCONEXÃO

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
R: ${this.state.reboot}

- Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
R: ${this.state.cabo}

- Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
R: ${this.state.fonte}

- O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
R: ${this.state.wifi}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
		${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}  

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextLent() {
    return  `      
    LENTIDÃO

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Existe alguma instabilidade ou incidente ocorrendo?
R: ${this.state.instabilidade}

- Conferiu a Fonte e Cabo de Energia, evitando mal contato ou desligamento?
R: ${this.state.fonte}

- Questionou sobre a Distância que utiliza?
R: ${this.state.distancia}

- Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
R: ${this.state.reboot}

- Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
R: ${this.state.testes}

- Cliente utiliza quantos dispositivos no local? (celular, tv, tablet, notebook, videogame)
R: ${this.state.dispositivos}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextQued() {
    return  `      
    QUEDAS

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
R: ${this.state.log}

- Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)?
R: ${this.state.lossModem}

- Checou a posição do Cabo de Rede que vai para o roteador, se está bem encaixado e na porta WAN?
R: ${this.state.cabo}

- Conferiu fonte de energia/tomada da ONU e Roteador, evitando mal contato ou desligamento?
R: ${this.state.fonte}

- O nome do WiFi chega a “desaparecer” quando sente a Queda?
R: ${this.state.wifi}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextProb() {
    return  `      
    PROBLEMAS PARA ACESSAR SITE

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Existe alguma instabilidade no fornecimento ocorrendo?
R: ${this.state.instabilidade}

- Qual site exato não consegue acessar?
R: ${this.state.site}

- Testou em outro aparelho ou Rede 3G/Dados móveis?
R: ${this.state.aparelho}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextRote() {
    return  `      
    ROTEADOR DESCONFIGURADO

- Qual o modelo/marca do roteador?
R: ${this.state.modelo}

- Qual o nome do WI-FI?
R: ${this.state.nwifi}

- Qual a senha do WI-FI?
R: ${this.state.swifi}

- O cabo já está na LAN?
R: ${this.state.lan}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextSenh() {
    return  `      
    ALTERAÇÃO DE SSID/SENHA

- Qual o modelo/marca do roteador?
R: ${this.state.modelo}

- Deseja trocar o nome do wi-fi (SSID)? (Não pode conter caracteres especiais)
Se sim, qual: ${this.state.tnwifi}

- Deseja trocar a senha do wi-fi? (Deve conter no mínimo 8 caracteres e não pode conter caracteres especiais)
Se sim, qual: ${this.state.tswifi}

Contato: ${this.state.contato1}

- Checklist de confirmação de titularidade:
[ ${this.state.titularidadeV} ] Data de vencimento	[ ${this.state.titularidadeE} ] Endereço 
 `;
  }
  getTextRedi() {
    return  `      
    REDIRECIONAMENTO DE PORTAS

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Qual o equipamento?
R: ${this.state.equipamento}

- Qual é/são a(s) porta(s)?
R: ${this.state.portas}

- Qual o(s) IP/MAC do(s) equipamento(s)?
R:${this.state.ipmac}

- Qual melhor horário ou período para receber o retorno do time de Suporte?
${this.state.horario} 

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
R: ${this.state.alertou}
 `;
  }
  getTextLoss() {
    return  `      
    LINK LOSS

- Existe o indicador de LOS no Modem de Fibra ? (Luz Piscando em Vermelho)?
R: ${this.state.lossModem}

- Rebootou/Reiniciou o roteador e o modem de fibra? (Botão Power, desliga e  liga)
R: ${this.state.reboot}

- Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
R: ${this.state.fonte}

- Usuário PPPoE: ${this.state.upppoe}
- Senha PPPoE: ${this.state.spppoe}
- Endereço: ${this.state.endereco}

Qual melhor horário ou período para receber os Técnicos?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Obs: ${this.state.obs}
 `;
  }
  getTextAten() {
    return  `      
    SINAL ATENUADO

- Validou o sinal da caixa?
R: ${this.state.vsinal}

- Rebootou/Reiniciou o roteador e o modem de fibra? (Botão Power, desliga e  liga)
R: ${this.state.reboot}

- Sinal: ${this.state.sinal}
- Usuário PPPoE: ${this.state.upppoe}
- Senha PPPoE: ${this.state.spppoe}
- Endereço: ${this.state.endereco}

Qual melhor horário ou período para receber os Técnicos?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Obs:  ${this.state.obs}
 `;
  }
  getTextDesb() {
    return  `      
    DESBLOQUEIO

Cliente solicitou Desbloqueio em confiança. 

- Enviou o comprovante de pagamento?
R: ${this.state.comprovante}

- Ciente do tempo provisório (72 horas)?
R: ${this.state.provisorio}

- Ciente dos canais de pagamento? (App, Totem, Portal)
R: ${this.state.canais}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
 `;
  }
  getTextAlte() {
    return  `      
    ALTERAR VENCIMENTO

Alteração de Vencimento de Mensalidade.

Qual o novo vencimento?
R: ${this.state.vencimento}

- Qual melhor horário ou período para receber o retorno do time do Financeiro?
${this.state.horario}
 
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Informe qual o tipo de comprovante de solicitação:
[  ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.solicitacao} ] ID Huggy: ${this.state.idhuggy}
 `;
  }
  getTextNego() {
    return  `      
    NEGOCIAÇÃO DE DÍVIDA

Negociação de contas em atraso.

- Qual melhor horário ou período para receber o retorno do time do Financeiro?
${this.state.horario}
 
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato} 

Informe qual o tipo de comprovante de solicitação:
[  ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.solicitacao} ] ID Huggy: ${this.state.idhuggy}
 `;
  }
  getTextFina() {
    return  `      
    CONTESTAÇÃO FINANCEIRA

Descreva detalhadamente  a reclamação/solicitação do cliente.
R: ${this.state.descricao}

- Qual melhor horário ou período para receber o retorno do time do Financeiro?
${this.state.horario}
 
Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

Informe qual o tipo de comprovante de solicitação:
[  ] Gravação de ligação (segue anexado no protocolo);
[ ${this.state.solicitacao} ] ID Huggy: ${this.state.idhuggy}
 `;
  }
  getTextCanc() {
    return  `      
CANCELAMENTO

1. SOLICITAÇÃO DE CANCELAMENTO:  (Qual o motivo do cancelamento?)
R: ${this.state.scancelamento}

2. QUAL É A RECLAMAÇÃO DO CLIENTE? (Relatar detalhadamente o que levou a solicitação do cancelamento)
R: ${this.state.rcliente}

3. RETENÇÃO DE CANCELAMENTO: (O que você fez, ou o que disse ao cliente para tentar reverter a situação, tentou delegar para  um setor especializado “suporte” ou “operações”?)
R: ${this.state.recliente}

- Qual melhor horário ou período para receber o retorno do time do Financeiro?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}

- Checklist de confirmação de titularidade:
[ ${this.state.titularidadeV} ] Data de vencimento	[ ${this.state.titularidadeE} ] Endereço
 `;
  }
  getTextTran() {
    return  `      
    TRANSFERÊNCIA DE ENDEREÇO

    - Novo endereço
      CEP: ${this.state.cep}
      LOGRADOURO/RUA: ${this.state.rua}
      NÚMERO: ${this.state.numero} 
      BAIRRO: ${this.state.bairro}
      CIDADE: ${this.state.cidade}
      ESTADO: ${this.state.estado}
    
    - Deseja altera o endereço de faturamento/cobrança?
    R: ${this.state.enderecoC}
    
    - Possui comprovante ou localização de endereço:
    R: ${this.state.lendereco}
    
    Contato Principal: ${this.state.contato1}
    Contato 2: ${this.state.contato2}
    Meio de contato: ${this.state.mcontato}
    
    - Checklist de confirmação de titularidade:
    [ ${this.state.titularidadeV} ] Data de vencimento	[ ${this.state.titularidadeE} ] Endereço
 `;
  }
  getTextEnde() {
    return  `      
    ALTERAÇÃO DE ENDEREÇO

- Endereço correto
	CEP: ${this.state.cep}
	LOGRADOURO/RUA: ${this.state.rua}
	NÚMERO: ${this.state.numero}
	BAIRRO: ${this.state.bairro}
	CIDADE: ${this.state.cidade}
	ESTADO: ${this.state.estado}

- Deseja alterar o endereço de instalação?
R: ${this.state.enderecoi}

- Deseja alterar o endereço de faturamento/cobrança?
R: ${this.state.enderecof}

- Possui comprovante ou localização de endereço:
R:${this.state.lendereco}

- Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}
 `;
  }
  
  handleChange6(e) {    
    this.setState({ descricao: e.target.value });   
  };
  handleChange7(e) {    
    this.setState({ contato1: e.target.value });   
  };
  handleChange8(e) {    
    this.setState({ contato2: e.target.value });   
  };
  handleChange10(e) {    
    this.setState({ dispositivos: e.target.value });   
  };
  handleChange11(e) {    
    this.setState({ site: e.target.value });   
  };
  handleChange12(e) {    
    this.setState({ modelo: e.target.value });   
  };
  handleChange13(e) {    
    this.setState({ nwifi: e.target.value });   
  };
  handleChange14(e) {    
    this.setState({ swifi: e.target.value });   
  };
  handleChange15(e) {    
    this.setState({ tnwifi: e.target.value });   
  };
  handleChange16(e) {    
    this.setState({ tswifi: e.target.value });   
  };
  handleChange17(e) {    
    this.setState({ equipamento: e.target.value });   
  };
  handleChange18(e) {    
    this.setState({ portas: e.target.value });   
  };
  handleChange19(e) {    
    this.setState({ ipmac: e.target.value });   
  };
  handleChange20(e) {    
    this.setState({ upppoe: e.target.value });   
  };
  handleChange21(e) {    
    this.setState({ spppoe: e.target.value });   
  };
  handleChange22(e) {    
    this.setState({ endereco: e.target.value });   
  };
  handleChange23(e) {    
    this.setState({ obs: e.target.value });   
  };
  handleChange24(e) {    
    this.setState({ sinal: e.target.value });   
  };
  handleChange25(e) {    
    this.setState({ vencimento: e.target.value });   
  };
  handleChange26(e) {    
    this.setState({ idhuggy: e.target.value });   
  };
  handleChange27(e) {    
    this.setState({ scancelamento: e.target.value });   
  };
  handleChange28(e) {    
    this.setState({ rcliente: e.target.value });   
  };
  handleChange29(e) {    
    this.setState({ recliente: e.target.value });   
  };
  handleChange30(e) {    
    this.setState({ estado: e.target.value });   
  };
  handleChange31(e) {    
    this.setState({ cep: e.target.value });   
  };
  handleChange32(e) {    
    this.setState({ rua: e.target.value });   
  };
  handleChange33(e) {    
    this.setState({ numero: e.target.value });   
  };
  handleChange34(e) {    
    this.setState({ bairro: e.target.value });   
  };
  handleChange35(e) {    
    this.setState({ cidade: e.target.value });   
  };
  handleChange37(e) {    
    this.setState({ lendereco: e.target.value });   
  };
  handleChange38(e) {    
    this.setState({ enderecoi: e.target.value });   
  };
  handleChange39(e) {    
    this.setState({ enderecof: e.target.value });   
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleChange9() {
    this.setState({lossModem: ''});
    this.setState({reboot: ''});
    this.setState({fonte: ''}); 
    this.setState({contato1: ''});  
    this.setState({contato2: ''});  
    this.setState({reboot: ''});  
    this.setState({cabo: ''});   
    this.setState({instabilidade: ''});  
    this.setState({log: ''});  
    this.setState({obs: ''});  
    this.setState({wifi: ''});  
    this.setState({site: ''});  
    this.setState({titularidadeV: ''});  
    this.setState({titularidadeE: ''});  
    this.setState({enderecoi: ''});  
    this.setState({enderecof: ''});  
    this.setState({vencimento: ''});  
    this.setState({modelo: ''});  
    this.setState({nwifi: ''});  
    this.setState({recliente: ''});  
    this.setState({vsinal: ''});  
    this.setState({swifi: ''});  
    this.setState({equipamento: ''});  
    this.setState({canais: ''});  
    this.setState({cep: ''});  
    this.setState({estado: ''});  
    this.setState({provisorio: ''});  
    this.setState({numero: ''});  
    this.setState({rua: ''});  
    this.setState({rcliente: ''});  
    this.setState({bairro: ''});  
    this.setState({lan: ''});  
    this.setState({comprovante: ''});  
    this.setState({ipmac: ''});  
    this.setState({sinal: ''});  
    this.setState({portas: ''});  
    this.setState({upppoe: ''});
    this.setState({spppoe: ''});
    this.setState({endereco: ''});
    this.setState({dispositivos: ''});
    this.setState({horario: ''});
    this.setState({mcontato: ''});
    this.setState({alertou: ''});
    this.setState({instabilidade: ''});
    this.setState({lossModem: ''});
    this.setState({idhuggy: ''});
    this.setState({scancelamento: ''});
    this.setState({cidade: ''});
    this.setState({enderecoC: ''});
    this.setState({lendereco: ''});
    this.setState({descricao: ''});
    this.setState({aparelho: ''});
    this.setState({tnwifi: ''});
    this.setState({tswifi: ''});
  }
  
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

 
  render() {
     const cidade = this.state.cidade; 
     const lossModem = this.state.lossModem;
     const descricao = this.state.descricao;
     const contato1 = this.state.contato1;
     const contato2 = this.state.contato2;
     const reboot = this.state.reboot;
     const cabo = this.state.cabo;
     const fonte = this.state.fonte;
     const instabilidade = this.state.instabilidade;
     const testes = this.state.testes;
     const distancia = this.state.distancia
     const log = this.state.log;
     const obs = this.state.obs;
     const wifi = this.state.wifi;
     const site = this.state.site;
     const titularidadeV = this.state.titularidadeV;
     const titularidadeE = this.state.titularidadeE;
     const aparelho = this.state.aparelho;
     const enderecoi = this.state.enderecoi;
     const enderecof = this.state.enderecof;
     const vencimento = this.state.vencimento
     const modelo = this.state.modelo
     const lendereco = this.state.lendereco
     const nwifi = this.state.nwifi
     const recliente = this.state.recliente
     const vsinal = this.state.vsinal
     const swifi = this.state.swifi
     const equipamento = this.state.equipamento
     const enderecoC = this.state.enderecoC
     const tnwifi = this.state.tnwifi
     const scancelamento = this.state.scancelamento
     const idhuggy = this.state.idhuggy
     const canais = this.state.canais
     const cep = this.state.cep
     const estado = this.state.estado
     const provisorio = this.state.provisorio
     const numero = this.state.numero
     const rua = this.state.rua
     const rcliente = this.state.rcliente
     const tswifi = this.state.tswifi
     const bairro = this.state.bairro
     const lan = this.state.lan
     const comprovante = this.state.comprovante
     const ipmac = this.state.ipmac
     const sinal = this.state.sinal
     const portas = this.state.portas
     const upppoe = this.state.upppoe
     const spppoe = this.state.spppoe
     const endereco = this.state.endereco
     const dispositivos = this.state.dispositivos
     const horario = this.state.horario
     const mcontato = this.state.mcontato
     const alertou = this.state.alertou
     const { showingDesc } = this.state;
     const { showingLent } = this.state;
     const { showingQued } = this.state;
     const { showingDesb } = this.state;
     const { showingProb } = this.state;
     const { showingRote } = this.state;
     const { showingSenh } = this.state;
     const { showingRedi } = this.state;
     const { showingLoss } = this.state;
     const { showingAten } = this.state;
     const { showingAlte } = this.state;
     const { showingNego } = this.state;
     const { showingFina } = this.state;
     const { showingCanc } = this.state;
     const { showingTran } = this.state;
     const { showingEnde } = this.state;
    return (
      <div className="App">
     <header className="App-header">   
           

<MDBDropdown>
      <MDBDropdownToggle caret color="info">
        Scripts Comercial
      </MDBDropdownToggle>
      <MDBDropdownMenu basic> 
      <MDBDropdownItem onClick={() => this.setState({ showingCanc: !showingCanc })}>
            <MDBDropdownLink tag='button' type='button'>
            CANCELAMENTO
            </MDBDropdownLink>
          </MDBDropdownItem> 
          <MDBDropdownItem onClick={() => this.setState({ showingTran: !showingTran })}>
            <MDBDropdownLink tag='button' type='button'>
            TRANSFERÊNCIA DE ENDEREÇO
            </MDBDropdownLink>
          </MDBDropdownItem>  
          <MDBDropdownItem onClick={() => this.setState({ showingEnde: !showingEnde })}>
            <MDBDropdownLink tag='button' type='button'>
            ALTERAÇÃO DE ENDEREÇO
            </MDBDropdownLink>
          </MDBDropdownItem>            
      </MDBDropdownMenu>
    </MDBDropdown> 
   
    <MDBDropdown>
        <MDBDropdownToggle caret color="info">Scripts Suporte Técnico</MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.setState({ showingDesc: !showingDesc })}>
            <MDBDropdownLink tag='button' type='button'>
            DESCONEXÃO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingLent: !showingLent })}>
            <MDBDropdownLink tag='button' type='button'>
            LENTIDÃO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingQued: !showingQued })}>
            <MDBDropdownLink tag='button' type='button'>
            QUEDAS
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingProb: !showingProb })}>
            <MDBDropdownLink tag='button' type='button'>
            PROBLEMAS PARA ACESSAR SITES
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingRote: !showingRote })}>
            <MDBDropdownLink tag='button' type='button'>
            ROTEADOR DESCONFIGURADO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingSenh: !showingSenh })}>
            <MDBDropdownLink tag='button' type='button'>
            ALTERAÇÃO DE SSID/SENHA
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingRedi: !showingRedi })}>
            <MDBDropdownLink tag='button' type='button'>
            REDIRECIONAMENTO DE PORTAS
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingLoss: !showingLoss })}>
            <MDBDropdownLink tag='button' type='button'>
            LINK LOSS
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingAten: !showingAten })}>
            <MDBDropdownLink tag='button' type='button'>
            SINAL ATENUADO
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>

    <MDBDropdown>
        <MDBDropdownToggle caret color="info">Scripts Financeiro</MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.setState({ showingDesb: !showingDesb })}>
            <MDBDropdownLink tag='button' type='button'>
            DESBLOQUEIO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingAlte: !showingAlte })}>
            <MDBDropdownLink tag='button' type='button'>
            ALTERAR VENCIMENTO
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingNego: !showingNego })}>
            <MDBDropdownLink tag='button' type='button'>
            NEGOCIAÇÃO DE DÍVIDA
            </MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.setState({ showingFina: !showingFina })}>
            <MDBDropdownLink tag='button' type='button'>
            CONTESTAÇÃO FINANCEIRA
            </MDBDropdownLink>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>    
      <div>                  
                { showingDesc 
                    ? <div>
                      <button onClick={() => this.setState({ showingDesc: !showingDesc }) }>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
                     
      <label>
      Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='reboot' name='reboot' value='Sim'
          checked={this.state.reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='reboot' name='reboot' value='Não' 
          checked={this.state.reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} />
   <br/>
<label>
     Checou o Cabo de Rede que vai para o roteador, está bem encaixado e na porta WAN?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='cabo' name='cabo' value='Sim'
          checked={this.state.cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='cabo' name='cabo' value='Não' 
          checked={this.state.cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} />
   <br/>
<label>
  Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='fonte' name='fonte' value='Sim'
          checked={this.state.fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='fonte' name='fonte' value='Não' 
          checked={this.state.fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} />
   <br/>
<label>
    O nome do WiFi mudou para o “nome do Roteador” (TP LINK, Intelbras,...)?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='wifi' name='wifi' value='Sim'
          checked={this.state.wifi === 'Sim'} onChange={(e) => this.setState({ wifi: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='wifi' name='wifi' value='Não' 
          checked={this.state.wifi === 'Não'} onChange={(e) => this.setState({ wifi: e.target.value })} />
   <br/>
<label>
    Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
   <br/>
       <label>
     Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextDesc} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>       
     </div>
                      </div>
                    : null
                    
                }
            </div> 


            <div>                  
                { showingLent
                    ? <div>
                      <button onClick={() => this.setState({ showingLent: !showingLent })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
      <label>
      Existe alguma instabilidade ou incidente ocorrendo?
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='instabilidade' name='instabilidade' value='Sim'
          checked={instabilidade === 'Sim'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='instabilidade' name='instabilidade' value='Nao' 
          checked={instabilidade === 'Nao'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
      </label>
      <br/>
      <label>
      Conferiu a Fonte e Cabo de Energia, evitando mal contato ou desligamento?
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='fonte' name='fonte' value='Sim'
          checked={fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='fonte' name='fonte' value='Nao' 
          checked={fonte === 'Nao'} onChange={(e) => this.setState({ fonte: e.target.value })} />
      </label>
      <br/>
      <label>
      Questionou sobre a Distância que utiliza?
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='distancia' name='distancia' value='Sim'
          checked={distancia === 'Sim'} onChange={(e) => this.setState({ distancia: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='distancia' name='distancia' value='Nao' 
          checked={distancia === 'Nao'} onChange={(e) => this.setState({ distancia: e.target.value })} />
      </label>
      <br/>
      <label>
      Rebootou/Reiniciou o roteador? (Botão Power, desliga e  liga)
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='reboot' name='reboot' value='Sim'
          checked={reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='reboot' name='reboot' value='Nao' 
          checked={reboot === 'Nao'} onChange={(e) => this.setState({ reboot: e.target.value })} />
      </label>
      <br/>
      <label>
      Realizou novos teste com o cliente? (navegação ou velocidade no site fast.com)
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='testes' name='testes' value='Sim'
          checked={testes === 'Sim'} onChange={(e) => this.setState({ testes: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='testes' name='testes' value='Nao' 
          checked={testes === 'Nao'} onChange={(e) => this.setState({ testes: e.target.value })} />
      </label>
      <br/>
      <label>
      Cliente utiliza quantos dispositivos no local? (celular, tv, tablet, notebook, videogame)
      <br/>
       <input type="text" name="dispositivos" value={dispositivos} onChange={this.handleChange10}/>
      </label>
      <br/>
      <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
   <br/>
<label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextLent} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingQued
                    ? <div>
                      <button onClick={() => this.setState({ showingQued: !showingQued })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
                 <label>
                   No Log de Sessões, consta interrupções (várias quedas no PPPoE)?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='log' name='log' value='Sim'
          checked={log === 'Sim'} onChange={(e) => this.setState({ log: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='logN' name='log' value='Não' 
          checked={log === 'Não'} onChange={(e) => this.setState({ log: e.target.value })} />
        
          <br/>
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
           <br/>
            <label>
            Checou a posição do Cabo de Rede que vai para o roteador, se está bem encaixado e na porta WAN?
      </label>
            <br/>
      <label>Sim</label>
        <input type='radio' id='cabo' name='cabo' value='Sim'
          checked={cabo === 'Sim'} onChange={(e) => this.setState({ cabo: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='caboN' name='cabo' value='Não' 
          checked={cabo === 'Não'} onChange={(e) => this.setState({ cabo: e.target.value })} />
            <br/>
            <label>
            Conferiu fonte de energia/tomada da ONU e Roteador, evitando mal contato ou desligamento?
      </label>
            <br/>
      <label>Sim</label>
        <input type='radio' id='fonte' name='fonte' value='Sim'
          checked={fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='fonteN' name='fonte' value='Não' 
          checked={fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} />
           <br/>
            <label>
            O nome do WiFi chega a “desaparecer” quando sente a Queda?
      </label>
            <br/>
      <label>Sim</label>
        <input type='radio' id='wifi' name='wifi' value='Sim'
          checked={wifi === 'Sim'} onChange={(e) => this.setState({ wifi: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='wifiN' name='wifi' value='Não' 
          checked={wifi === 'Não'} onChange={(e) => this.setState({ wifi: e.target.value })} />
            <br/>
            <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
   <br/>
<label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextQued} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingProb
                    ? <div>
                      <button onClick={() => this.setState({ showingProb: !showingProb })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
      <label>
      Existe alguma instabilidade ou incidente ocorrendo?
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='instabilidade' name='instabilidade' value='Sim'
          checked={instabilidade === 'Sim'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='instabilidadeN' name='instabilidade' value='Nao' 
          checked={instabilidade === 'Nao'} onChange={(e) => this.setState({ instabilidade: e.target.value })} />
      </label>
      <br/>
      <label>
      Qual site exato não consegue acessar?
                  <br/>
       <input type="text" name="site" value={site} onChange={this.handleChange11}/>
      </label>       
      <br/>
      <label>
      Testou em outro aparelho ou Rede 3G/Dados móveis?
                  <br/>
                  <label>Sim</label>
        <input type='radio' id='aparelho' name='aparelho' value='Sim'
          checked={aparelho === 'Sim'} onChange={(e) => this.setState({ aparelho: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='aparelho' name='aparelho' value='Nao' 
          checked={aparelho === 'Nao'} onChange={(e) => this.setState({ aparelho: e.target.value })} />
      </label>
      <br/>
            <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
   <br/>
<label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextProb} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingRote
                    ? <div>
                      <button onClick={() => this.setState({ showingRote: !showingRote })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Qual o modelo/marca do roteador?
                  <br/>
       <input type="text" name="modelo" value={modelo} onChange={this.handleChange12}/>
      </label>
      <br/>
      <label>
      Qual o nome do WI-FI?
                  <br/>
       <input type="text" name="nwifi" value={nwifi} onChange={this.handleChange13}/>
      </label>
      <br/>
      <label>
      Qual a senha do WI-FI?
                  <br/>
       <input type="text" name="swifi" value={swifi} onChange={this.handleChange14}/>
      </label>
          <br/>
          <label>
          O cabo já está na LAN?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='lan' name='lan' value='Sim'
          checked={lan === 'Sim'} onChange={(e) => this.setState({ lan: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='lanN' name='lan' value='Nao' 
          checked={lan === 'Nao'} onChange={(e) => this.setState({ lan: e.target.value })} />
        <br/>
            <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
   <br/>
<label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextRote} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingSenh
                    ? <div>
                      <button onClick={() => this.setState({ showingSenh: !showingSenh })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  - Qual o modelo/marca do roteador?
                  <br/>
       <input type="text" name="modelo" value={modelo} onChange={this.handleChange12}/>
      </label>
      <br/>
      <label>
      - Deseja trocar o nome do wi-fi (SSID)? (Não pode conter caracteres especiais)
                  <br/>
       <input type="text" name="tnwifi" value={tnwifi} onChange={this.handleChange15}/>
      </label>
      <br/>
      <label>
      - Deseja trocar a senha do wi-fi? (Deve conter no mínimo 8 caracteres e não pode conter caracteres especiais)
                  <br/>
       <input type="text" name="tswifi" value={tswifi} onChange={this.handleChange16}/>
      </label>
      <br/>
            <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
      - Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      -  Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      -  Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
           <label>
           - Checklist de confirmação de titularidade:
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='titularidadeV' name='titularidadeV' value='Sim'
          checked={titularidadeV === 'Sim'} onChange={(e) => this.setState({ titularidadeV: e.target.value })} />
        <label>Sim</label>
        <input type='radio' id='titularidadeE' name='titularidadeE' value='Sim' 
          checked={titularidadeE === 'Sim'} onChange={(e) => this.setState({ titularidadeE: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextSenh} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingRedi
                    ? <div>
                      <button onClick={() => this.setState({ showingRedi: !showingRedi })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
      <label>
      Qual o equipamento?
                  <br/>
       <input type="text" name="equipamento" value={equipamento} onChange={this.handleChange17}/>
      </label>
      <br/>  
      <label>
      Qual é/são a(s) porta(s)?
                  <br/>
       <input type="text" name="portas" value={portas} onChange={this.handleChange18}/>
      </label>
      <br/> 
      <label>
      Qual o(s) IP/MAC do(s) equipamento(s)?
                  <br/>
       <input type="text" name="ipmac" value={ipmac} onChange={this.handleChange19}/>
      </label>
      <br/>
            <label>
- Qual melhor horário ou período para receber o retorno do time de Suporte?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>          
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
<label>
- Alertou o cliente, que é necessário atender o retorno do time de Suporte?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='alertou' name='alertou' value='Sim'
          checked={alertou === 'Sim'} onChange={(e) => this.setState({ alertou: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='alertou' name='alertou' value='Nao' 
          checked={alertou === 'Nao'} onChange={(e) => this.setState({ alertou: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextRedi} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingLoss
                    ? <div>
                      <button onClick={() => this.setState({ showingLoss: !showingLoss })}>X</button>
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
              <br/>    
              <label>
              Rebootou/Reiniciou o roteador e o modem de fibra? (Botão Power, desliga e  liga)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='reboot' name='reboot' value='Sim'
          checked={reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='rebootN' name='reboot' value='Não' 
          checked={reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} />
              <br/>   
              <label>
              Validou a Fonte ou Cabo de Energia, do modem de fibra / roteador?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='fonte' name='fonte' value='Sim'
          checked={fonte === 'Sim'} onChange={(e) => this.setState({ fonte: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='fonteN' name='fonte' value='Não' 
          checked={fonte === 'Não'} onChange={(e) => this.setState({ fonte: e.target.value })} />
              <br/>     
              <label>
              Usuário PPPoE: <input type="text" name="upppoe" value={upppoe} onChange={this.handleChange20}/>
      </label>
      <br/>
      <label>
      Senha PPPoE: <input type="text" name="spppoe" value={spppoe} onChange={this.handleChange21}/>
      </label>
      <br/>
      <label>
      Endereço: <input type="text" name="endereco" value={endereco} onChange={this.handleChange22}/>
      </label>
      <br/>
            <label>
            Qual melhor horário ou período para receber os Técnicos?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
      <label>
      Obs:
                  <br/>
       <input type="text" name="obs" value={obs} onChange={this.handleChange23}/>
      </label>
  </div>                   
  <Clipboard option-text={this.getTextLoss} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingAten
                    ? <div>
                      <button onClick={() => this.setState({ showingAten: !showingAten })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Validou o sinal da caixa?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='vsinal' name='vsinal' value='Sim'
          checked={vsinal === 'Sim'} onChange={(e) => this.setState({ vsinal: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='vsinalN' name='vsinal' value='Não' 
          checked={vsinal === 'Não'} onChange={(e) => this.setState({ vsinal: e.target.value })} />
                    <br/>
                   <label>
                   Rebootou/Reiniciou o roteador e o modem de fibra? (Botão Power, desliga e  liga)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='reboot' name='reboot' value='Sim'
          checked={reboot === 'Sim'} onChange={(e) => this.setState({ reboot: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='rebootN' name='reboot' value='Não' 
          checked={reboot === 'Não'} onChange={(e) => this.setState({ reboot: e.target.value })} />
         <br/>
         <label>
      Sinal: <input type="text" name="sinal" value={sinal} onChange={this.handleChange24}/>
      </label>
      <br/>      
              <label>
              Usuário PPPoE: <input type="text" name="upppoe" value={upppoe} onChange={this.handleChange20}/>
      </label>
      <br/>
      <label>
      Senha PPPoE: <input type="text" name="spppoe" value={spppoe} onChange={this.handleChange21}/>
      </label>
      <br/>
      <label>
      Endereço: <input type="text" name="endereco" value={endereco} onChange={this.handleChange22}/>
      </label>
      <br/>        
      <label>
            Qual melhor horário ou período para receber os Técnicos?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
      <label>
      Obs:
                  <br/>
       <input type="text" name="obs" value={obs} onChange={this.handleChange23}/>
      </label>
  </div>                   
  <Clipboard option-text={this.getTextAten} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 

            <div>                  
                { showingDesb
                    ? <div>
                      <button onClick={() => this.setState({ showingDesb: !showingDesb })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Enviou o comprovante de pagamento?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='comprovante' name='comprovante' value='Sim'
          checked={comprovante === 'Sim'} onChange={(e) => this.setState({ comprovante: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='comprovanteN' name='comprovante' value='Não' 
          checked={comprovante === 'Não'} onChange={(e) => this.setState({ comprovante: e.target.value })} />
                 <br/>  
                 <label>
                 Ciente do tempo provisório (72 horas)?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='provisorio' name='provisorio' value='Sim'
          checked={provisorio === 'Sim'} onChange={(e) => this.setState({ provisorio: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='provisorioN' name='provisorio' value='Não' 
          checked={provisorio === 'Não'} onChange={(e) => this.setState({ provisorio: e.target.value })} />
                 <br/>  
                 <label>
                 Ciente dos canais de pagamento? (App, Totem, Portal)
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='canais' name='canais' value='Sim'
          checked={canais === 'Sim'} onChange={(e) => this.setState({ canais: e.target.value })} />
        <label>Nao</label>
        <input type='radio' id='canaisN' name='canais' value='Não' 
          checked={canais === 'Não'} onChange={(e) => this.setState({ canais: e.target.value })} />
                 <br/>  
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
  </div>                   
  <Clipboard option-text={this.getTextDesb} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div> 
            <div>                  
                { showingAlte
                    ? <div>
                      <button onClick={() => this.setState({ showingAlte: !showingAlte })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  ALTERAR VENCIMENTO

Alteração de Vencimento de Mensalidade.
      </label>
      <br/>
      <label>
      Qual o novo vencimento?
                  <br/>
       <input type="text" name="vencimento" value={vencimento} onChange={this.handleChange25}/>
      </label>
      <br/>
            <label>
            Qual melhor horário ou período para receber os Técnicos?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
   <label>
   Informe qual o tipo de comprovante de solicitação:
                  <br/>
                  ID Huggy:    
       <input type="text" name="idhuggy" value={idhuggy} onChange={this.handleChange26}/>
      </label>
      <br/>
  </div>                   
  <Clipboard option-text={this.getTextAlte} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

     </div>
                      </div>
                    : null
                    
                }
            </div>

            <div>                  
                { showingNego
                    ? <div>
                      <button onClick={() => this.setState({ showingNego: !showingNego })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Qual melhor horário ou período para receber o retorno do time do Financeiro
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
   <label>
   Informe qual o tipo de comprovante de solicitação:
                  <br/>
                  ID Huggy:    
       <input type="text" name="idhuggy" value={idhuggy} onChange={this.handleChange26}/>
      </label>
      <br/>  
   
  </div>                   
  <Clipboard option-text={this.getTextNego} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div>

            <div>                  
                { showingFina
                    ? <div>
                      <button onClick={() => this.setState({ showingFina: !showingFina })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  Descreva detalhadamente  a reclamação/solicitação do cliente.
                  <br/>
       <input type="text" name="descricao" value={descricao} onChange={this.handleChange6}/>
      </label>
      <br/>
      <label>
                  Qual melhor horário ou período para receber o retorno do time do Financeiro
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
   <br/>
   <label>
   Informe qual o tipo de comprovante de solicitação:
                  <br/>
                  ID Huggy:    
       <input type="text" name="idhuggy" value={idhuggy} onChange={this.handleChange26}/>
      </label>
      <br/>        
   
  </div>                   
  <Clipboard option-text={this.getTextFina} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
        </div>
        : null
          }
            </div>
            <div>                  
                { showingCanc
                    ? <div>
                      <button onClick={() => this.setState({ showingCanc: !showingCanc })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
                  1. SOLICITAÇÃO DE CANCELAMENTO:  (Qual o motivo do cancelamento?)
                  <br/>
  
       <input type="text" name="scancelamento" value={scancelamento} onChange={this.handleChange27}/>
      </label>
      <br/>  
      <label>
      2. QUAL É A RECLAMAÇÃO DO CLIENTE? (Relatar detalhadamente o que levou a solicitação do cancelamento)
                  <br/>   
       <input type="text" name="rcliente" value={rcliente} onChange={this.handleChange28}/>
      </label>
      <br/>  
      <label>
      3. RETENÇÃO DE CANCELAMENTO: (O que você fez, ou o que disse ao cliente para tentar reverter a situação, tentou delegar para  um setor especializado “suporte” ou “operações”?)
                  <br/>
       <input type="text" name="recliente" value={recliente} onChange={this.handleChange29}/>
      </label>
      <br/>  
      <label>
                  Qual melhor horário ou período para receber o retorno do time do Financeiro
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
      <br/>       
      <label>
 Checklist de confirmação de titularidade:
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='titularidadeV' name='titularidadeV' value='Sim'
          checked={titularidadeV === 'Sim'} onChange={(e) => this.setState({ titularidadeV: e.target.value })} />
        <label>Sim</label>
        <input type='radio' id='titularidadeE' name='titularidadeE' value='Sim' 
          checked={titularidadeE === 'Sim'} onChange={(e) => this.setState({ titularidadeE: e.target.value })} />
            <label>
                  ID Huggy:    
       <input type="text" name="idhuggy" value={idhuggy} onChange={this.handleChange26}/>
      </label>
      <br/>  
  </div>                   
  <Clipboard option-text={this.getTextCanc} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>
     
     </div>
        </div>
     : null
             }
            </div>
            <div>                  
                { showingTran
                    ? <div>
                      <button onClick={() => this.setState({ showingTran: !showingTran })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
       <label>
       - Endereço correto
       <br/>
       CEP:
       <input type="text" name="cep" value={cep} onChange={this.handleChange31}/>
       <br/>
       LOGRADOURO/RUA:
       <input type="text" name="rua" value={rua} onChange={this.handleChange32}/>
       <br/>
       NÚMERO:
       <input type="text" name="numero" value={numero} onChange={this.handleChange33}/>
       <br/>
       BAIRRO:
       <input type="text" name="bairro" value={bairro} onChange={this.handleChange34}/>
       <br/>
       CIDADE:
       <input type="text" name="cidade" value={cidade} onChange={this.handleChange35}/>
       <br/>
       ESTADO:
       <input type="text" name="estado" value={estado} onChange={this.handleChange30}/>
      </label>  
      <br/>
      <label>
      - Deseja altera o endereço de faturamento/cobrança?
      </label>
      <br/>
      <label>Sim</label>
        <input type='radio' id='enderecoC' name='enderecoC' value='Sim'
          checked={enderecoC === 'Sim'} onChange={(e) => this.setState({ enderecoC: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='enderecoC' name='enderecoC' value='Não' 
          checked={enderecoC === 'Não'} onChange={(e) => this.setState({ enderecoC: e.target.value })} />  
      <br/>
      <label>
      - Possui comprovante ou localização de endereço:
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='lendereco' name='lendereco' value='Sim'
          checked={lendereco === 'Sim'} onChange={(e) => this.setState({ lendereco: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='lendereco' name='lendereco' value='Não' 
          checked={lendereco === 'Não'} onChange={(e) => this.setState({ lendereco: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
      <br/>        
      <label>
 Checklist de confirmação de titularidade:
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='titularidadeV' name='titularidadeV' value='Sim'
          checked={titularidadeV === 'Sim'} onChange={(e) => this.setState({ titularidadeV: e.target.value })} />
        <label>Sim</label>
        <input type='radio' id='titularidadeE' name='titularidadeE' value='Sim' 
          checked={titularidadeE === 'Sim'} onChange={(e) => this.setState({ titularidadeE: e.target.value })} />
  </div>                   
  <Clipboard option-text={this.getTextTran} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div>

            <div>                  
                { showingEnde
                    ? <div>
                      <button onClick={() => this.setState({ showingEnde: !showingEnde })}>X</button>
                      <div  className={`notes-item `}>    
                  <div style={{ whiteSpace: 'pre-line', fontSize: 10, color: "white", textAlign: 'justify', border: "5px solid", borderColor: "#f00 #0f0 #00f #fc0"}}>
                  <label>
       - Endereço correto
       <br/>
       CEP:
       <input type="text" name="cep" value={cep} onChange={this.handleChange31}/>
       <br/>
       LOGRADOURO/RUA:
       <input type="text" name="rua" value={rua} onChange={this.handleChange32}/>
       <br/>
       NÚMERO:
       <input type="text" name="numero" value={numero} onChange={this.handleChange33}/>
       <br/>
       BAIRRO:
       <input type="text" name="bairro" value={bairro} onChange={this.handleChange34}/>
       <br/>
       CIDADE:
       <input type="text" name="cidade" value={cidade} onChange={this.handleChange35}/>
       <br/>
       ESTADO:
       <input type="text" name="estado" value={estado} onChange={this.handleChange30}/>
      </label>  
      <br/>        
      <label>
      - Deseja alterar o endereço de instalação?
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='enderecoi' name='enderecoi' value='Sim'
          checked={enderecoi === 'Sim'} onChange={(e) => this.setState({ enderecoi: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='enderecoi' name='enderecoi' value='Não' 
          checked={enderecoi === 'Não'} onChange={(e) => this.setState({ enderecoi: e.target.value })} />
           <br/>        
      <label>
      - Deseja alterar o endereço de faturamento/cobrança?
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='enderecof' name='enderecof' value='Sim'
          checked={enderecof === 'Sim'} onChange={(e) => this.setState({ enderecof: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='enderecof' name='enderecof' value='Não' 
          checked={enderecof === 'Não'} onChange={(e) => this.setState({ enderecof: e.target.value })} />
           <br/>        
      <label>
      - Possui comprovante ou localização de endereço:
      </label>
      <br/>       
      <label>Sim</label>
        <input type='radio' id='lendereco' name='lendereco' value='Sim'
          checked={lendereco === 'Sim'} onChange={(e) => this.setState({ lendereco: e.target.value })} />
        <label>Não</label>
        <input type='radio' id='lendereco' name='lendereco' value='Não' 
          checked={lendereco === 'Não'} onChange={(e) => this.setState({ lendereco: e.target.value })} />
           <br/>  
      <label>
                  Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
      </label>
      <br/>
      <label>Manha</label>
        <input type='radio' id='horario' name='horario' value='Manha'
          checked={horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} />
        <label>Tarde</label>
        <input type='radio' id='horario' name='horario' value='Tarde' 
          checked={horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} />
          <label>Ambos</label>
        <input type='radio' id='horario' name='horario' value='Ambos' 
          checked={horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} />
      <br/>
      <label>
Contato Principal: 
                  <br/>
       <input type="text" name="contato1" value={contato1} onChange={this.handleChange7}/>
      </label>
      <br/>
      <label>
      Contato 2: 
                  <br/>
       <input type="text" name="contato2" value={contato2} onChange={this.handleChange8}/>
      </label>
      <br/>
      <label>
      Meio de contato:
      </label>
      <br/>
      <label>WHATSAPP</label>
        <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
          checked={mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
        <label>LIGAÇÃO</label>
        <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO' 
          checked={mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
           <label>AMBOS</label>
        <input type='radio' id='mcontato' name='mcontato' value='AMBOS' 
          checked={mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} />
      <br/>       
  </div>                   
  <Clipboard option-text={this.getTextEnde} onSuccess={this.onSuccess} >
        COPIAR
      </Clipboard>

       
     </div>
                      </div>
                    : null
                    
                }
            </div>

            <button  onClick={this.handleChange9 }>LIMPAR</button>
      
        </header>
      </div>
    );
  }
}
export default App;