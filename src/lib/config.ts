// Environment variables config manager

export const config = {
    solana: {
      rpcUrl: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.testnet.solana.com',
      network: process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'testnet',
    },
    app: {
      name: process.env.NEXT_PUBLIC_APP_NAME || 'DEXTRACT',
      url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    },
    fees: {
      tradingFeePercent: Number(process.env.NEXT_PUBLIC_TRADING_FEE_PERCENT || 0.3),
      lpFeePercent: Number(process.env.NEXT_PUBLIC_LP_FEE_PERCENT || 0.25),
      protocolFeePercent: Number(process.env.NEXT_PUBLIC_PROTOCOL_FEE_PERCENT || 0.05),
    },
    features: {
      enableYieldFarming: process.env.NEXT_PUBLIC_ENABLE_YIELD_FARMING === 'true',
      enableCrossChainDeposits: process.env.NEXT_PUBLIC_ENABLE_CROSS_CHAIN_DEPOSITS === 'true',
      enableLending: process.env.NEXT_PUBLIC_ENABLE_LENDING === 'true',
    },
  };