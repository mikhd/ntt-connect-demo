import {
  WormholeConnectConfig,
  WormholeConnectTheme,
  // nttRoutes,
  nttAutomaticRoute,
  nttManualRoute,
} from '@wormhole-foundation/wormhole-connect';

export const theme: WormholeConnectTheme = {
  mode: 'dark',
  // primary: '#78c4b6',
};


type TokenConfig = Parameters<typeof nttManualRoute>[0]["tokens"];

const tokenRoutesConfig: TokenConfig = {
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
    {
      chain: "ArbitrumSepolia",
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
      chain: "BaseSepolia",
      manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
      token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
      transceiver: [
        {
          address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
          type: 'wormhole',
        },
      ],
    },
  ],
}

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ["Sepolia", 'Solana', 'ArbitrumSepolia', 'BaseSepolia'],
  tokens: ['NTTsep', 'NTTsol', 'NTTarb', 'NTTbase'],
  ui: {
    title: 'Wormhole NTT UI',
    previewMode: false,
    defaultInputs: {
      fromChain: 'Sepolia',
      toChain: 'Solana'
    },
    showHamburgerMenu: false,
  },
  routes: [
    nttManualRoute({
      tokens: {
        ...tokenRoutesConfig
      },
    }),
    nttAutomaticRoute({
      tokens: {
        ...tokenRoutesConfig
      },
    }),
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
      coinGeckoId: "",
      // icon: 'https://devnet.irys.xyz/CnzqYHms2c7rTN5Z1mX49yBz3Yd8naHgpibzZkzzwMvZ',
      icon: '/image1.png',
      decimals: 18
    },
    NTTarb: {
      key: 'NTTarb',
      symbol: 'NTT',
      nativeChain: 'ArbitrumSepolia',
      displayName: 'NTT Arbitrum',
      tokenId: {
        chain: 'ArbitrumSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 18
    },
    NTTbase: {
      key: 'NTTbase',
      symbol: 'NTT',
      nativeChain: 'BaseSepolia',
      displayName: 'NTT Base',
      tokenId: {
        chain: 'BaseSepolia',
        address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
      },
      coinGeckoId: '',
      // coinGeckoId: 'wormhole',
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
      coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: '/image2.png',
      // icon: 'https://devnet.irys.xyz/dvUCHHu6NX1LjqQavEZubT1jodJxYgTQcPzePBTJnX2',
      decimals: 9
    }
  }
}

export default wormholeConfig;
