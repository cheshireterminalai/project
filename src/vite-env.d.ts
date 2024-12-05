/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REPLICATE_API_TOKEN: string
  readonly VITE_ELEVEN_LABS_API_KEY: string
  readonly VITE_HELIUS_RPC_URL: string
  readonly VITE_OPENROUTER_API_KEY: string
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_GRIN_TOKEN_ADDRESS: string
  readonly VITE_OPEN_ROUTER_MODEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'replicate';

declare global {
  interface Window {
    global: Window;
    elevenlabs?: any;
  }
}