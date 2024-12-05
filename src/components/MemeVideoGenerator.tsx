import { useState } from 'react';
import { Video } from 'lucide-react';
import { generateVideo } from '../utils/replicateApi';
import { VideoDisplay } from './VideoDisplay';
import { VideoPrompt } from './VideoPrompt';

export function MemeVideoGenerator() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateVideo = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateVideo(prompt);
      if (result.status === 'succeeded' && result.output) {
        setVideoUrl(result.output);
      } else {
        setError(result.error || 'Failed to generate video');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate video');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 text-purple-400">
        <Video className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Video Generation</h2>
      </div>

      <VideoPrompt onSubmit={handleGenerateVideo} isLoading={isLoading} />

      {error && (
        <div className="text-red-400 bg-red-900/20 p-4 rounded-lg">
          {error}
        </div>
      )}

      {videoUrl && <VideoDisplay url={videoUrl} />}
    </div>
  );
}
