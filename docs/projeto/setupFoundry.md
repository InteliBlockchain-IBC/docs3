---
title: Setup e Inicialização do Foundry
sidebar_label: '2.3. Setup do Foundry'
sidebar_position: 4
---

# Instalação e Configuração do Foundry

## Windows 11

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
        forge init meu_primeiro_projeto_com blockchain
        ```
        * Substitua `meu_primeiro_projeto_com blockchain` pelo nome que desejar para o seu projeto.

Parabéns! Você configurou um projeto no Foundry e está pronto para começar sua jornada como desenvolvedor Web3. Agora você pode navegar para a pasta do seu projeto (`cd meu-primeiro-contrato`) e começar a escrever seus contratos inteligentes em Solidity.

---

# Linux


## Instalação e Configuração do Foundry no Linux (Ubuntu/Debian)

Este guia prático vai te ajudar a instalar e configurar o **Foundry** no seu sistema operacional Linux, focando em distribuições como Ubuntu e Debian. O processo é bem direto e similar à instalação no WSL que já cobrimos.

---

## Preparando o Ambiente

1.  ### Abra o Terminal

    No seu sistema Linux, simplesmente abra o terminal. Você pode encontrá-lo no menu de aplicativos ou usar o atalho `Ctrl+Alt+T`.

2.  ### Atualize os Pacotes do Sistema

    É sempre uma boa prática garantir que seus pacotes estejam atualizados antes de instalar novas ferramentas.

    ```bash
    sudo apt update
    sudo apt upgrade -y
    ```
    * `sudo apt update` atualiza a lista de pacotes disponíveis.
    * `sudo apt upgrade -y` atualiza os pacotes já instalados para suas versões mais recentes. O `-y` aceita automaticamente todas as confirmações.

3.  ### Instale as Dependências

    O Foundry precisa de algumas ferramentas e bibliotecas específicas para funcionar corretamente.

    ```bash
    sudo apt install -y build-essential libssl-dev pkg-config curl
    ```
    * **`build-essential`**: Inclui compiladores e outras ferramentas essenciais para construir software.
    * **`libssl-dev`**: Biblioteca de desenvolvimento para OpenSSL, importante para operações criptográficas.
    * **`pkg-config`**: Ajuda na localização e configuração de bibliotecas.
    * **`curl`**: Ferramenta essencial para baixar arquivos da internet, usada aqui para obter o instalador do Foundry.

---

## Instalando o Foundry

1.  ### Instale o `foundryup`

    O `foundryup` é o gerenciador de instalações do Foundry, responsável por baixar e manter suas ferramentas (`forge`, `cast`, `anvil`).

    ```bash
    curl -L [https://foundry.paradigm.xyz](https://foundry.paradigm.xyz) | bash
    ```
    Este comando baixa um script que instala o `foundryup` no seu diretório `~/.foundry/bin/`.

2.  ### Adicione o Foundry ao seu PATH

    Para que você possa usar os comandos do Foundry de qualquer diretório no terminal, adicione o caminho dos executáveis à sua variável de ambiente `PATH`.

    ```bash
    nano ~/.bashrc
    ```
    Vá até o final do arquivo e adicione a seguinte linha:

    ```bash
    export PATH="$HOME/.foundry/bin:$PATH"
    ```
    * **Para salvar e sair do `nano`:** Pressione `Ctrl+O` (para gravar), `Enter` (para confirmar o nome do arquivo) e `Ctrl+X` (para sair).

3.  ### Aplique as Alterações no Terminal

    Para que as modificações no `PATH` entrem em vigor na sua sessão atual do terminal, você precisa recarregar o arquivo `.bashrc`.

    ```bash
    source ~/.bashrc
    ```
    Se preferir, você pode simplesmente fechar o terminal e abri-lo novamente.

4.  ### Execute o `foundryup`

    Agora que o `foundryup` está no seu `PATH`, execute-o para que ele baixe e instale as ferramentas principais do Foundry (`forge`, `cast`, `anvil`).

    ```bash
    foundryup
    ```
    Este processo pode levar alguns instantes, dependendo da sua conexão com a internet.

---

## Verificação e Início do Projeto

1.  ### Verifique a Instalação do Foundry

    Confirme se as ferramentas do Foundry foram instaladas corretamente e estão acessíveis.

    ```bash
    forge --version
    cast --version
    ```
    Você deverá ver as versões de `forge` e `cast` impressas no terminal, confirmando uma instalação bem-sucedida.

2.  ### Crie uma Nova Pasta para Seus Projetos

    Organize seus projetos Solidity criando uma pasta dedicada para eles.

    ```bash
    mkdir meus_projetos_solidity
    ```

3.  ### Troque para Essa Pasta

    ```bash
    cd meus_projetos_solidity
    ```

4.  ### Inicialize um Projeto no Foundry

    Dentro da sua nova pasta, crie um projeto Foundry. Ele configurará uma estrutura básica com diretórios para seus contratos, testes e scripts.

    ```bash
    forge init meu_primeiro_projeto_com blockchain
    ```
    Sinta-se à vontade para substituir `meu_primeiro_projeto_com blockchain` por um nome de sua escolha.

---

# MacOS


## Instalação e Configuração do Foundry no macOS

Este guia detalha o processo de instalação e configuração do **Foundry** no seu sistema macOS. É um processo direto, aproveitando o gerenciador de pacotes Homebrew, amplamente usado no ecossistema da Apple.

---

## Preparando o Ambiente

1.  ### Abra o Terminal

    No macOS, você pode encontrar o Terminal em `Aplicativos > Utilitários > Terminal`, ou pesquisar por "Terminal" no Spotlight (`Cmd + Espaço`).

2.  ### Instale ou Atualize o Homebrew

    O Homebrew é um gerenciador de pacotes essencial para o macOS, facilitando a instalação de ferramentas como o Foundry.

    * **Se você já tem o Homebrew instalado**, atualize-o para garantir que tudo esteja em dia:
        ```bash
        brew update
        ```
    * **Se você não tem o Homebrew**, instale-o com o seguinte comando. Ele pode pedir sua senha de administrador e algumas confirmações.
        ```bash
        /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
        ```
        Após a instalação, siga quaisquer instruções adicionais que o terminal possa fornecer para adicionar o Homebrew ao seu `PATH`. Isso geralmente envolve rodar alguns comandos `echo` e `eval`.

3.  ### Instale as Dependências

    O Foundry precisa de algumas bibliotecas e ferramentas específicas para funcionar.

    ```bash
    brew install openssl pkg-config
    ```
    * **`openssl`**: Uma biblioteca criptográfica fundamental.
    * **`pkg-config`**: Ajuda na localização e configuração de bibliotecas durante o processo de compilação.

---

## Instalando o Foundry

1.  ### Instale o `foundryup`

    O `foundryup` é a ferramenta oficial para instalar e gerenciar as versões do Foundry (`forge`, `cast`, `anvil`).

    ```bash
    curl -L [https://foundry.paradigm.xyz](https://foundry.paradigm.xyz) | bash
    ```
    Este comando baixa e executa o script de instalação, que irá colocar o `foundryup` no diretório `~/.foundry/bin/`.

2.  ### Adicione o Foundry ao seu PATH

    Para que você possa usar os comandos do Foundry de qualquer lugar no seu Terminal, adicione o diretório onde os executáveis estão localizados à sua variável de ambiente `PATH`.

    * **Se você usa Zsh** (shell padrão em macOS modernos):
        ```bash
        nano ~/.zshrc
        ```
    * **Se você usa Bash** (shell mais antigo ou configurado manualmente):
        ```bash
        nano ~/.bash_profile
        ```
    Vá até o final do arquivo e adicione a seguinte linha:

    ```bash
    export PATH="$HOME/.foundry/bin:$PATH"
    ```
    * **Para salvar e sair do `nano`**: Pressione `Ctrl+O` (para gravar), `Enter` (para confirmar o nome do arquivo) e `Ctrl+X` (para sair).

3.  ### Aplique as Alterações no Shell

    Para que as modificações no `PATH` tenham efeito imediato na sua sessão atual do Terminal, você precisa recarregar o arquivo de configuração do seu shell.

    * **Se estiver usando Zsh**:
        ```bash
        source ~/.zshrc
        ```
    * **Se estiver usando Bash**:
        ```bash
        source ~/.bash_profile
        ```
    Como alternativa, você pode simplesmente fechar e reabrir o Terminal.

4.  ### Execute o `foundryup`

    Agora que o `foundryup` está no seu `PATH`, execute-o para que ele baixe e instale as ferramentas principais do Foundry (`forge`, `cast`, `anvil`).

    ```bash
    foundryup
    ```
    Este comando pode levar um momento, pois ele baixará os binários necessários.

---

## Verificação e Início do Projeto

1.  ### Verifique a Instalação do Foundry

    Confirme se as ferramentas `forge` e `cast` foram instaladas corretamente e estão acessíveis.

    ```bash
    forge --version
    cast --version
    ```
    Você deverá ver as informações de versão para cada ferramenta, indicando uma instalação bem-sucedida.

2.  ### Crie uma Nova Pasta para Seus Projetos

    Crie um diretório para organizar seus projetos Solidity.

    ```bash
    mkdir meus_projetos_solidity
    ```

3.  ### Troque para Essa Pasta

    ```bash
    cd meus_projetos_solidity
    ```

4.  ### Inicialize um Projeto no Foundry

    Dentro da sua nova pasta, inicie um novo projeto Foundry. Ele configurará uma estrutura básica com pastas para seus contratos, testes e scripts.

    ```bash
    forge init meu_primeiro_projeto_com blockchain
    ```
    Sinta-se à vontade para substituir `meu_primeiro_projeto_com blockchaino` pelo nome que você quiser dar ao seu projeto.

---

