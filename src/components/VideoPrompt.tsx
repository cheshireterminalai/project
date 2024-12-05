import { useState, FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

interface Props {
  onSubmit: (prompt: string) => Promise<void>;
  isLoading: boolean;
}

export function VideoPrompt({ onSubmit, isLoading }: Props) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await onSubmit(prompt.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your video prompt..."
        className="w-full h-32 p-4 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="w-full py-3 px-6 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-500/50 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <span>Generate Video</span>
        )}
      </button>
    </form>
  );
}
