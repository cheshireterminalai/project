import { WalletContextProvider } from './components/WalletProvider';
import { MemeGenerator } from './components/MemeGenerator';
import { MatrixBackground } from './components/MatrixBackground';
import { CheshireLogo } from './components/CheshireLogo';
import { BottomLogo } from './components/BottomLogo';
import { ElevenLabsWidget } from './components/ElevenLabsWidget';
import { CheshireChat } from './components/CheshireChat';
import { SolanaLogo } from './components/SolanaLogo';
import { WalletButton } from './components/WalletButton';

function App() {
  return (
    <WalletContextProvider>
      <MatrixBackground />
      <WalletButton />
      <SolanaLogo />
      <div className="min-h-screen bg-transparent text-white p-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <CheshireLogo />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-green-400 to-purple-600 text-transparent bg-clip-text mb-4">
              Cheshire Terminal Meme Generator
            </h1>
            <p className="text-purple-400">Powered by GRIN on Solana</p>
          </div>
          
          <MemeGenerator />
          
          <BottomLogo />
        </div>
      </div>
      <CheshireChat />
      <ElevenLabsWidget />
    </WalletContextProvider>
  );
}

export default App;
