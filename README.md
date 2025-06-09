# Para que serve
&emsp;Esse projeto tem como objetivo o desenvolvimento de uma documentação única, completa e compartilhada sobre blockchain e Web3. Ao decorrer do tempo novas seções serão adicionadas com novos conteúdos.

&emsp;A ideia é que ela contemple desde a parte teórica até a parte técnica, sendo possível inserir diversos temas e assuntos sobre todos os modelos de blockchain. 

# Como contribuir?
&emsp;Para os membros do Inteli Blockchain é muito simples. Basta abrir uma Pull Request solicitando alterações ou adições no projeto.

&emsp;Quando terminar suas alterações abre uma Pull Request para a branch default `main` e solicite a revisão de um dos moderadores da organização ou contribuidores do projeto.

# Especificações técnicas
&emsp;O projeto foi desenvolvido utilizando a biblioteca [Docusaurus](https://docusaurus.io/). A Docusaurus nada mais é do que um framework para desenvolvimento de documentações. Ele nos permite que com alguns simples arquivos `.md` consigamos escrever documentações completas e user-friendly.

&emsp;O docusaurus gera uma build e faz deploy automatizado do projeto. Isso gera páginas mais leves com carregamento do lado do cliente. Se você for navegando pelas páginas vera um carregamento extremamente rápido e eficaz.

&emsp;Para começar, sugiro ler um pouco a documentação do docusaurus e depois começar vendo exemplos de outros contribuidores da página.

# Como testar local

#### 1. Clone o repositório
```
git clone https://github.com/InteliBlockchain-IBC/docs3.git
```
Ou
```
git clone git@github.com:InteliBlockchain-IBC/docs3.git
```

#### 2. Instalação de dependências
```
npm install
```

#### 3. Execução
```
npm run start
```

# Como realizar deploy

**Primeiro você precisa garantir que suas alterações já foram válidadas e adicionadas a branch main**

Após isso você deve fazer sync da `main` e executar o comando `npm run deploy`

O Docusaurus irá buildar a aplicação, comprimir e subir para a branch `gh-pages`. O pipeline fará o resto da operação deployando o projeto em produção.

# Documentar atualizações

Caso queira deixar um comentário ou post sobre sua atualização na documentação, fique a vontage para usar o blog. Você pode comentar um pouco sobre o que foi adicionado, se divulgar e ainda adicionar links para suas páginas.
