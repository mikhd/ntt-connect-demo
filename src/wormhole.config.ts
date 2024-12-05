import {
  WormholeConnectConfig,
  WormholeConnectTheme,
  // nttRoutes,
  // nttAutomaticRoute,
  nttManualRoute,
} from '@wormhole-foundation/wormhole-connect';

export const theme: WormholeConnectTheme = {
  mode: 'dark',
  // primary: '#78c4b6',
};

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ["Sepolia", 'Solana'],
  tokens: ['NTTsep', 'NTTsol'],
  ui: {
    title: 'Wormhole NTT UI',
    previewMode: true,
    defaultInputs: {
      fromChain: 'Sepolia',
      toChain: 'Solana'
    },
    showHamburgerMenu: false,
  },
  routes: [
    nttManualRoute({
      tokens: {
        NTT: [
          {
            chain: "Sepolia",
            manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
            token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
            transceiver: [
              {
                address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
                type: 'wormhole',
              },
            ],
          },
          {
            chain: 'Solana',
            manager: 'Ntt6LhAEwLNbhWBxwDoSNsEoyWmeTL7fsSkWT3zRQTp',
            token: 'AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY',
            transceiver: [
              {
                address: 'ENsmSVAyALFCUKV1eywqfYfQYKKREWrYQYVsmMjx15rP',
                type: 'wormhole',
              },
            ],
          },
        ],
      },
    })
  ],
  tokensConfig: {
    NTTsep: {
      key: 'NTTsep',
      symbol: 'NTT',
      nativeChain: 'Sepolia',
      displayName: 'NTT Sepolia',
      tokenId: {
        chain: 'Sepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },

    NTTsol: {
      key: 'NTTsol',
      symbol: 'NTT',
      nativeChain: 'Solana',
      displayName: 'NTT Solana',
      tokenId: {
        chain: 'Solana',
        address: 'AzzZc7W81GTHCzphCsD3w5xvGWWHEjCAzKwWE47cXATY'
      },
      coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 9
    }
  }
}

export default wormholeConfig;
