---
title: Setup e Inicialização do Foundry
sidebar_label: '2.3. Setup do Foundry'
sidebar_position: 4
---

# Instalação e Configuração do Foundry (Windows 11)

Este guia detalha o processo de instalação e configuração do Foundry, um conjunto de ferramentas de desenvolvimento para Ethereum, utilizando o Subsistema do Windows para Linux (WSL 2) com uma distribuição Ubuntu no Windows 11.

## Parte 1: Configuração Inicial do WSL e Ubuntu

Para começar a trabalhar com o Foundry, o ambiente Linux fornecido pelo WSL é o mais recomendado no Windows.

1.  **Abra o Prompt de Comando (CMD) como Administrador:**
    * Clique no botão Iniciar do Windows.
    * Digite `cmd`.
    * Clique com o botão direito em "Prompt de Comando" e selecione "Executar como administrador".

2.  **Instale o WSL:**
    * No CMD, digite o seguinte comando e pressione Enter:
        ```bash
        wsl --install
        ```
    * Este comando irá ativar as funcionalidades necessárias do Windows para o WSL e instalará o Ubuntu como sua distribuição Linux padrão.

3.  **Reinicie o PC:**
    * Após a conclusão da instalação do WSL, é **obrigatório reiniciar o seu computador** para que as alterações sejam aplicadas.

4.  **Abra o Ubuntu:**
    * Após o reinício, o Ubuntu continuará a instalação. Uma nova janela do terminal do Ubuntu deve aparecer automaticamente. Se não aparecer, procure por "Ubuntu" no menu Iniciar do Windows e abra-o.

5.  **Configure o Ubuntu:**
    * Na primeira vez que você abrir o Ubuntu, será solicitado que você crie um **nome de usuário** e uma **senha** para o seu ambiente Linux. Anote essa senha, pois ela será necessária para comandos com `sudo`.

6.  **Atualize o Ubuntu:**
    * É fundamental garantir que todos os pacotes do seu Ubuntu estejam atualizados. No terminal do Ubuntu, execute os seguintes comandos:
        ```bash
        sudo apt update
        sudo apt upgrade -y
        ```

## Parte 2: Instalação e Configuração do Foundry

Agora que seu ambiente Ubuntu está pronto, vamos instalar o Foundry.

1.  **Instale as Dependências Necessárias:**
    * O Foundry requer algumas ferramentas básicas de desenvolvimento. No terminal do Ubuntu, execute:
        ```bash
        sudo apt install -y build-essential libssl-dev pkg-config
        ```

2.  **Instale o `foundryup`:**
    * O `foundryup` é o instalador e gerenciador de versões do Foundry. Execute o comando abaixo no terminal do Ubuntu:
        ```bash
        curl -L [https://foundry.paradigm.xyz](https://foundry.paradigm.xyz) | bash
        ```

3.  **Adicione o Foundry ao seu PATH:**
    * Para que você possa executar os comandos `forge` e `cast` de qualquer diretório, você precisa adicionar o diretório de instalação do Foundry ao seu PATH.
    * Abra o arquivo de configuração do seu shell (`.bashrc` para Bash, que é o padrão no Ubuntu):
        ```bash
        nano ~/.bashrc
        ```

4.  **Adicione a Linha ao `.bashrc`:**
    * Role para o final do arquivo `~/.bashrc` usando as setas do teclado.
    * Adicione a seguinte linha no final do arquivo:
        ```bash
        export PATH="$HOME/.foundry/bin:$PATH"
        ```
    * Pressione `Ctrl + O` (para salvar), depois `Enter` (para confirmar o nome do arquivo), e então `Ctrl + X` (para sair do editor nano).

5.  **Recarregue o `bashrc`:**
    * Para que as alterações no PATH tenham efeito imediato, recarregue seu perfil do shell:
        ```bash
        source ~/.bashrc
        ```

6.  **Execute o `foundryup` (Instalação Final):**
    * Agora que o `foundryup` está no seu PATH, execute-o para baixar e instalar as últimas versões do `forge` e `cast`:
        ```bash
        foundryup
        ```

7.  **Verifique a Instalação do Foundry:**
    * Confirme se o `forge` e o `cast` foram instalados corretamente verificando suas versões:
        ```bash
        forge --version
        cast --version
        ```

## Parte 3: Inicialização de um Projeto no Foundry

Com o Foundry instalado, você pode criar seu primeiro projeto.

1.  **Crie uma Nova Pasta para seus Projetos:**
    * É uma boa prática ter uma pasta dedicada para todos os seus projetos Web3.
        ```bash
        mkdir meu-projetos-web3
        ```

2.  **Entre na Nova Pasta:**
    * Acesse a pasta que você acabou de criar:
        ```bash
        cd meu-projetos-web3
        ```

3.  **Inicialize um Novo Projeto Foundry:**
    * Dentro da pasta `meu-projetos-web3`, use o comando `forge init` para criar a estrutura básica de um novo projeto Foundry:
        ```bash
        forge init meu-primeiro-contrato
        ```
        * Substitua `meu-primeiro-contrato` pelo nome que desejar para o seu projeto.

Parabéns! Você configurou um projeto no Foundry e está pronto para começar sua jornada como desenvolvedor Web3. Agora você pode navegar para a pasta do seu projeto (`cd meu-primeiro-contrato`) e começar a escrever seus contratos inteligentes em Solidity.

---
