---
title: Instalação do Foundry
sidebar_label: '2.3. Instalação do Foundry'
sidebar_position: 4
---

O **Foundry** é uma poderosa ferramenta de desenvolvimento para smart contracts em Solidity. Com ela, você consegue compilar, testar e implantar contratos com alta performance e flexibilidade.

Vamos instalar o Foundry em seu ambiente local:

## Requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Git](https://git-scm.com/downloads)  
- [cURL](https://curl.se/download.html)  
- [Node.js](https://nodejs.org/) *(opcional, mas útil)*  
- Terminal Linux/macOS ou Git Bash no Windows

---

## Passo 1: Clonar o Foundryup

Abra seu terminal e execute o seguinte comando para instalar o instalador do Foundry:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

## Passo 2: Reinicie o Terminal
Feche e reabra o terminal, ou rode:

```bash
source ~/.bashrc
```
ou, se estiver usando zsh:
```bash
source ~/.zshrc
```
Isso garante que os comandos do Foundry estejam disponíveis globalmente.

## Passo 3: Instalar o Foundry
Agora, execute o comando abaixo para instalar os binários principais do Foundry (forge, cast, anvil):
```bash
foundryup
```
Esse comando vai baixar e compilar as ferramentas do Foundry para seu sistema.

##  Passo 4: Verificar a Instalação
Para garantir que tudo foi instalado corretamente, verifique as versões:
``bash
forge --version
cast --version
anvil --version
```
Se esses comandos retornarem as versões, o Foundry está pronto para uso!
```

## O que foi instalado?
forge: ferramenta principal para compilar, testar e implantar smart contracts

cast: utilitário para interações diretas com a blockchain

anvil: blockchain local para testes (semelhante ao Hardhat Network)

