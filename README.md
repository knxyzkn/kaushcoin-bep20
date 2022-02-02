# KaushCoin, a BEP-20 Token

## Introduction
Token Name: **KaushCoin**

Token Symbol: **KSH**

Token Standard: **BEP-20** (similar to ERC-20)

Blockchain: **Binance Smart Chain TestNet**

## KaushCoin Faucet

You can do the following in the faucet dapp.
1. Mint 10 KSH at a time to your Binance Smart Chain address.
2. Check the current balance of KSH in your Binance Smart Chain address.
3. Check the current total supply of all KSH in existence on the Binance TestNet.

Note: Effort has been made to communicate the above through the Dapp UI with descriptive text where appropriate.

## KaushCoin Links

Faucet: https://kaushcoin-bep20.vercel.app/

Smart Contract Address: `0xd67BaA74ee923970adD1D63F76dAa1f1C70A4114`

BscScan: https://testnet.bscscan.com/address/0xd67BaA74ee923970adD1D63F76dAa1f1C70A4114

## User Journey

1. Visit the faucet using the link above.
2. Connect a valid Binance Smart Chain address using a Web3 wallet, such as MetaMask.
3. Click 'Mint 10 KSH' and approve the transaction in your wallet.
4. Your address will receive 10 KSH.

## Dapp Architecture

- Blockchain: **Binance Smart Chain TestNet**
- Smart Contracts: **Solidity**
- Development Framework: **Truffle**
- Dapp Framework: **React Box in Truffle**
- Web3 JavaScript API: **Web3.js**
- Frontend: **React**
- UI Components: **Material-UI**
- Libraries: **OpenZeppelin ERC-20 Contract** (similar to BEP-20)


## Directory Structure

- `client`: React frontend.
- `contracts`: Smart contracts deployed on the Rinkeby Test Network.
- `migrations`: Migration files for deploying smart contracts.
- `test`: Tests for smart contracts.
