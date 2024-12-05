import Replicate from 'replicate';

interface ReplicateResponse {
  status: 'starting' | 'processing' | 'succeeded' | 'failed';
  output: string | null;
  error?: string;
}

const replicate = new Replicate({
  auth: "r8_AqmMkNzyqbVJf5fGMCFhYnKckurssUf0SwUzU"
});

const MODEL = "black-forest-labs/flux-dev-lora";

export async function generateImage(prompt: string): Promise<ReplicateResponse> {
  try {
    const input = {
      prompt: `${prompt} in a psychedelic cypherpunk cyberpunk style 8 bit pixelated cheshire cat from alice in wondereland with green candles as a background and the text $grin as an overlay with gold tokens flying from the sky`,
      go_fast: true,
      guidance: 3,
      lora_scale: 1,
      megapixels: "1",
      num_outputs: 1,
      aspect_ratio: "1:1",
      lora_weights: "fofr/flux-80s-cyberpunk",
      output_format: "png",
      output_quality: 80,
      prompt_strength: 0.8,
      num_inference_steps: 28
    };

    const output = await replicate.run(MODEL, { input });

    if (Array.isArray(output) && output.length > 0) {
      return {
        status: 'succeeded',
        output: output[0] as string
      };
    }

    return {
      status: 'failed',
      output: null,
      error: 'Invalid output format received'
    };
  } catch (error) {
    return {
      status: 'failed',
      output: null,
      error: error instanceof Error ? error.message : 'Failed to generate image'
    };
  }
}

// Keep video generation for compatibility
export async function generateVideo(prompt: string): Promise<ReplicateResponse> {
  return generateImage(prompt); // For now, just redirect to image generation
}
