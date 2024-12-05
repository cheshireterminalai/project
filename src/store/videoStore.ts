import { create } from 'zustand';
import { generateVideo } from '../utils/replicateApi';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

interface VideoStore {
  videoUrl: string | null;
  status: Status;
  error: string | null;
  generateVideo: (prompt: string) => Promise<void>;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videoUrl: null,
  status: 'idle',
  error: null,

  generateVideo: async (prompt: string) => {
    set({ status: 'loading', error: null });
    try {
      const result = await generateVideo(prompt);
      if (result.status === 'succeeded' && result.output) {
        set({ 
          videoUrl: result.output, 
          status: 'succeeded',
          error: null
        });
      } else {
        set({ 
          error: result.error || 'Failed to generate video', 
          status: 'failed',
          videoUrl: null
        });
      }
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to generate video', 
        status: 'failed',
        videoUrl: null
      });
    }
  }
}));
