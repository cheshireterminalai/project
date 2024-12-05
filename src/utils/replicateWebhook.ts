import Replicate from 'replicate';

const replicate = new Replicate({
  auth: import.meta.env.VITE_REPLICATE_API_TOKEN,
});

export const createPredictionWithWebhook = async (prompt: string) => {
  try {
    const prediction = await replicate.predictions.create({
      version: "140176772be3b423d14fdaf5403e6d4e38b85646ccad0c3fd2ed07c211f0cad1",
      input: { prompt },
      webhook: `${window.location.origin}/api/replicate-webhook`,
      webhook_events_filter: ["completed"]
    });

    return prediction;
  } catch (error) {
    console.error('Error creating prediction:', error);
    throw error;
  }
};

export const getPredictionStatus = async (id: string) => {
  try {
    const prediction = await replicate.predictions.get(id);
    return prediction;
  } catch (error) {
    console.error('Error getting prediction status:', error);
    throw error;
  }
};