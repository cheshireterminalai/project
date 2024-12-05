import { create } from 'zustand';
import { createClient } from '@supabase/supabase-js';
import { config } from '../utils/config';

const supabase = createClient(
  config.supabase.url,
  config.supabase.anonKey
);

interface MemeStore {
  generating: boolean;
  currentMeme: string | null;
  generateMeme: (prompt: string, walletAddress: string) => Promise<void>;
}

export const useMemeStore = create<MemeStore>((set) => ({
  generating: false,
  currentMeme: null,
  generateMeme: async (prompt: string, walletAddress: string) => {
    set({ generating: true });
    try {
      const mockMemeUrl = `https://source.unsplash.com/random/800x600/?meme,${encodeURIComponent(prompt)}`;
      
      const { error } = await supabase
        .from('generated_memes')
        .insert([
          {
            prompt,
            image_url: mockMemeUrl,
            creator_wallet: walletAddress,
            grin_amount: config.grin.requiredAmount,
            ai_service: 'openai'
          }
        ]);

      if (error) throw error;
      
      set({ currentMeme: mockMemeUrl });
    } catch (error) {
      console.error('Error generating meme:', error);
      alert('Failed to generate meme. Please try again.');
    } finally {
      set({ generating: false });
    }
  }
}));