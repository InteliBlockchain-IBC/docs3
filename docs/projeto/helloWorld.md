---
title: Criando o Hello World em Solidity
sidebar_label: '2.5. Hello World (Solidity + Foundry)'
sidebar_position: 6
---

Vamos criar nosso primeiro contrato inteligente em Solidity usando o **Foundry**: um simples "Hello World", onde aprenderemos a estrutura básica de um smart contract, como declarar variáveis, funções e inicializações.

---

## Passo 1: Criar a pasta do projeto

Abra o terminal e execute os seguintes comandos:

```bash
mkdir hello-world
cd hello-world
```
## Passo 2: Passo 2: Inicializar o projeto com Foundry
Dentro da pasta, inicialize o projeto:

```bash
forge init
```
Isso criará a seguinte estrutura de pastas:
hello-world/ <br/>
├── .github/ <br/>
├── lib/ <br/>
├── script/<br/>
├── src/<br/>
├── test/<br/>
├── .gitignore<br/>
├── .gitmodules<br/>
├── foundry.toml<br/>
└── README.md<br/>

## Passo 3: Limpeza da estrutura
Para este projeto básico, podemos apagar as pastas que não serão usadas agora:

```bash
rm -rf script test
```
## Passo 4: Criar o contrato HelloWorld
1. Acesse a pasta src/

2. Dentro dela, renomeie o arquivo Counter.sol para HelloWorld.sol

3. Apague o conteúdo existente e escreva o seguinte:

```bash
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract HelloWorld {
    string public greeting;

    constructor() {
        greeting = "Hello, World!";
    }

    function setGreeting(string memory _newGreeting) public {
        greeting = _newGreeting;
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
```
## O que está acontecendo aqui?
| Linha                 | Descrição                                    |
| --------------------- | -------------------------------------------- |
| `SPDX-License`        | Declaração padrão de licença de código-fonte |
| `pragma`              | Define a versão do compilador Solidity       |
| `contract HelloWorld` | Início do contrato inteligente               |
| `greeting`            | Variável pública de texto                    |
| `constructor()`       | Função chamada na criação do contrato        |
| `setGreeting()`       | Permite atualizar o texto                    |
| `getGreeting()`       | Permite ler o texto atual                    |

## Passo 5: Compilar o contrato
No terminal, ainda dentro da pasta do projeto, rode:

```bash
forge build
Se tudo estiver certo, você verá algo como:
```

```bash
[⠊] Compiling...
[⠒] Compiling 1 files with Solc 0.8.29
[⠢] Solc 0.8.29 finished in 29.78ms
Compiler run successful!
```


## Pronto!
Você criou com sucesso seu primeiro contrato inteligente em Solidity usando Foundry!<br/>
Agora já pode explorar testes, deploy e interação com sua DApp nas próximas etapas.