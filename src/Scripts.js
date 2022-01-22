import React, { Component } from "react";
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';


class Scripts extends React.Component {
  constructor(props) {
    super(props);  
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
  }}

  export default Scripts;