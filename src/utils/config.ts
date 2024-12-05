export const config = {
  replicate: {
    apiToken: import.meta.env.VITE_REPLICATE_API_TOKEN,
    modelVersion: '140176772be3b423d14fdaf5403e6d4e38b85646ccad0c3fd2ed07c211f0cad1',
  },
  elevenLabs: {
    apiKey: import.meta.env.VITE_ELEVEN_LABS_API_KEY,
    agentId: 'lwiJrJFJXhXCJTiYfQxV',
  },
  helius: {
    rpcUrl: import.meta.env.VITE_HELIUS_RPC_URL,
  },
  openRouter: {
    apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
    model: import.meta.env.VITE_OPEN_ROUTER_MODEL,
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  grin: {
    tokenAddress: import.meta.env.VITE_GRIN_TOKEN_ADDRESS,
    requiredAmount: 1, // Amount of GRIN required per generation
    receiverAddress: import.meta.env.VITE_GRIN_RECEIVER_ADDRESS || "YOUR_RECEIVER_WALLET_ADDRESS" // Replace with your wallet address
  },
  images: {
    cheshireLogo: 'https://guzlanuvzfgcekmupcrx.supabase.co/storage/v1/object/public/Art/dope.png',
    bottomLogo: 'https://guzlanuvzfgcekmupcrx.supabase.co/storage/v1/object/public/Art/https___replicate.delivery_xezq_xWuO38pdsHL0BJVadHgoTZLY3kR6WjrKQ27ftncQEcxfLgwTA_out-0.png',
    solanaLogo: 'https://guzlanuvzfgcekmupcrx.supabase.co/storage/v1/object/public/Art/oslana.png',
  },
};
