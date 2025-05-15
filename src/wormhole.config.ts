/* eslint-disable @typescript-eslint/no-explicit-any */
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
      manager: '0x7717b51C81c86FD7696F345F57DffC3cf92700b9',
      token: '0x16B7237967bBd5DeC11bD6DcBc4475ee266b6Aa4',
      transceiver: [
        {
          address: '0x1C292E9B097b1dbf76Af5043cD350C137d0996E9',
          type: 'wormhole',
        },
      ],
    },
    {
      chain: 'Solana',
      manager: 'nttXMAn5ZY9XsmVr8sMBZBHbstaVDMaF1jHp1LV4W4k',
      token: '3ocp3jy5s4in9LBmBtyhhRidP8QFao51XcCRqqVfjrDL',
      // quoter: "",
      transceiver: [
        {
          address: 'CgGtZC7A1tvRCx6kfvr3ZP71VJmPRMB4eitaSYY4gPMM',
          type: 'wormhole',
        },
      ],
    },
  ],
}

const manualRoute = nttManualRoute({
  tokens: {
    ...tokenRoutesConfig
  },
});
const automaticRoute = nttAutomaticRoute({
  tokens: {
    ...tokenRoutesConfig,
  },
});

const wormholeConfig: WormholeConnectConfig = {
  network: 'Testnet',
  rpcs: {
    Sepolia: 'https://ethereum-sepolia-rpc.publicnode.com',
  },
  chains: ["Sepolia", 'Solana'],
  tokens: [['Sepolia', '0x16B7237967bBd5DeC11bD6DcBc4475ee266b6Aa4'], ['Solana', '3ocp3jy5s4in9LBmBtyhhRidP8QFao51XcCRqqVfjrDL']],
  ui: {
    title: 'Wormhole Native Token Transfer',
    previewMode: false,
    defaultInputs: {
      fromChain: 'Solana',
      toChain: 'Sepolia'
    },
  },
  routes: [manualRoute as any, automaticRoute as any],
  tokensConfig: {
    VNXsep: {
      symbol: 'VNX',
      name: 'VNX Sepolia',
      tokenId: {
        chain: 'Sepolia',
        address: '0x16B7237967bBd5DeC11bD6DcBc4475ee266b6Aa4'
      },
      // icon: 'https://devnet.irys.xyz/CnzqYHms2c7rTN5Z1mX49yBz3Yd8naHgpibzZkzzwMvZ',
      icon: '/image3.png',
      decimals: 9
    },
    VNXsol: {
      symbol: 'VNX',
      name: 'VNX Solana',
      tokenId: {
        chain: 'Solana',
        address: '3ocp3jy5s4in9LBmBtyhhRidP8QFao51XcCRqqVfjrDL'
      },
      icon: '/image3.png',
      decimals: 9
    }
  }
}

export default wormholeConfig;
