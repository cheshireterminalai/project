import { useState } from 'react';
import { Image } from 'lucide-react';
import { generateImage } from '../utils/replicateApi';
import { MemePrompt } from './MemePrompt';
import { MemeDisplay } from './MemeDisplay';

export function MemeGenerator() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateImage(prompt);
      if (result.status === 'succeeded' && result.output) {
        setImageUrl(result.output);
      } else {
        setError(result.error || 'Failed to generate image');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-purple-400">
        <Image className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Meme Generation</h2>
      </div>

      <MemePrompt onSubmit={handleGenerateImage} isLoading={isLoading} />

      {error && (
        <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">
          {error}
        </div>
      )}

      {imageUrl && <MemeDisplay url={imageUrl} />}
    </div>
  );
}
