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


type ManualRouteTokenConfig = Parameters<typeof nttManualRoute>[0]["tokens"];

const tokenRoutesConfig: ManualRouteTokenConfig = {
  NTT: [
    {
      chain: "Sepolia",
      manager: '0x5C4e192Cd1a96090bbD03c1f79d27517e105cCfa',
      token: '0x2815E4b501f7f226721D8aEf0d547F727e603A8d',
      transceiver: [
        {
          address: '0x1301F38445499ae0628957036f880c6cB6f059c6',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: 'Solana',
      manager: 'NttxaXYZSkk3LWUYnLLCH8nVv9PzRj6XLNKM9LLE6Vh',
      token: '7H8USp4TfHeZqMxEPhiY18xWkXH9ZrnLXx8BbzBQFNvA',
      // quoter: "",
      transceiver: [
        {
          address: 'Di1JoiyrVihfLoykDQAWwYuCHXA1FihrUPa1LeFdu5L4',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: "ArbitrumSepolia",
      manager: '0x0A33852cA8bEFc904e136320966dC50B1137131F',
      token: '0xf5C51455e39233FBefC874235548Aea6a2281356',
      transceiver: [
        {
          address: '0xF3cf167779AB9E0f7881c6983B870f9b19e38722',
          type: 'wormhole',
        },
      ],
    },
    // {
    //   chain: "BaseSepolia",
    //   manager: '0x6bFfF85386a7A0964d7eCBA7F11095b1609b8e0a',
    //   token: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98',
    //   transceiver: [
    //     {
    //       address: '0xB674f2e5216F8Ff659d7b9451B45cfF1CFD20367',
    //       type: 'wormhole',
    //     },
    //   ],
    // },
  ],
}

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  chains: ["Sepolia", 'Solana', 'ArbitrumSepolia'],
  tokens: ['NTTsep', 'NTTsol', 'NTTarb'],
  ui: {
    title: 'Wormhole NTT UI',
    previewMode: false,
    defaultInputs: {
      fromChain: 'ArbitrumSepolia',
      toChain: 'Sepolia'
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
        ...tokenRoutesConfig,
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
        address: '0x2815E4b501f7f226721D8aEf0d547F727e603A8d'
      },
      coinGeckoId: "",
      // icon: 'https://devnet.irys.xyz/CnzqYHms2c7rTN5Z1mX49yBz3Yd8naHgpibzZkzzwMvZ',
      icon: '/image1.png',
      decimals: 9
    },
    NTTarb: {
      key: 'NTTarb',
      symbol: 'NTT',
      nativeChain: 'ArbitrumSepolia',
      displayName: 'NTT Arbitrum',
      tokenId: {
        chain: 'ArbitrumSepolia',
        address: '0xf5C51455e39233FBefC874235548Aea6a2281356'
      },
      coinGeckoId: '',
      // coinGeckoId: 'wormhole',
      icon: 'https://wormhole.com/token.png',
      decimals: 9
    },
    // NTTbase: {
    //   key: 'NTTbase',
    //   symbol: 'NTT',
    //   nativeChain: 'BaseSepolia',
    //   displayName: 'NTT Base',
    //   tokenId: {
    //     chain: 'BaseSepolia',
    //     address: '0x6015f77A4F6B51D2590BC195832bA529c1FabC98'
    //   },
    //   coinGeckoId: '',
    //   // coinGeckoId: 'wormhole',
    //   icon: 'https://wormhole.com/token.png',
    //   decimals: 18
    // },
    NTTsol: {
      key: 'NTTsol',
      symbol: 'NTT',
      nativeChain: 'Solana',
      displayName: 'NTT Solana',
      tokenId: {
        chain: 'Solana',
        address: '7H8USp4TfHeZqMxEPhiY18xWkXH9ZrnLXx8BbzBQFNvA'
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
