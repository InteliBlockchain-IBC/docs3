---
title: Recebimento de Tokens via Faucet
sidebar_label: '2.4. Faucet (Tokens de Teste)'
sidebar_position: 5
---

Antes de interagir com a blockchain (enviar transações, implantar contratos, etc.), sua wallet precisa ter saldo — mesmo em redes de teste. Para isso, usamos um **faucet**, que envia tokens fictícios (como ETH de Sepolia) gratuitamente.

## O que é um Faucet?

Um *faucet* é um serviço que envia pequenas quantidades de tokens de teste para endereços de carteira, permitindo que desenvolvedores simulem transações sem usar cripto real.

---

## Passo 1: Obtenha o endereço da sua wallet

1. Abra sua wallet MetaMask  
2. No topo da interface, copie seu endereço (começa com `0x...`)  
   Exemplo: `0x12ab...34cd`

---

## Passo 2: Acesse um Faucet confiável

Escolha um faucet de acordo com a rede que usaremos para testes (por exemplo, Sepolia):

- [Faucet oficial da Sepolia (Alchemy)](https://sepoliafaucet.com/)
- Alternativas:  
  - [https://faucet.quicknode.com](https://faucet.quicknode.com)  
  - [https://chainlinkfaucet.com](https://chainlinkfaucet.com) *(também oferece LINK tokens)*

---

## Passo 3: Cole seu endereço e solicite tokens

1. Cole o endereço da sua wallet no campo indicado  
2. Clique em **"Request ETH"** ou **"Send me test ETH"**  
3. Aguarde a transação ser processada — isso pode levar alguns minutos

> ⚠️ **Dica:** alguns faucets exigem login com GitHub para evitar abusos. Faça login se necessário.

---

## Passo 4: Verifique o saldo na MetaMask

1. Volte à sua MetaMask  
2. Troque para a **rede Sepolia** (ou a que estiver usando)  
3. Você deverá ver os tokens de teste no saldo

---

## Pronto!

Agora sua carteira tem tokens suficientes para começar a testar contratos, enviar transações e interagir com a DApp.

---

> 💡 Se quiser testar outras redes (como Goerli ou Polygon Mumbai), o processo é o mesmo — só muda o faucet.
