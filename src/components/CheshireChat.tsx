import { useState, useEffect } from 'react';
import { MessageSquare, Send, Lock } from 'lucide-react';
import { useGrinGate } from '../hooks/useGrinGate';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const CheshireChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { hasGrin, isChecking } = useGrinGate();

  const sendMessage = async () => {
    if (!input.trim() || !hasGrin) return;

    setIsLoading(true);
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Cheshire Terminal Chat'
        },
        body: JSON.stringify({
          model: import.meta.env.VITE_OPEN_ROUTER_MODEL,
          messages: [
            {
              role: 'system',
              content: "You are the Cheshire Terminal, a mystical and enigmatic AI that speaks in riddles and with a mischievous tone, similar to the Cheshire Cat from Alice in Wonderland. Always maintain this playful yet cryptic personality."
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      if (data.choices?.[0]?.message?.content) {
        const assistantMessage = {
          role: 'assistant' as const,
          content: data.choices[0].message.content
        };
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error in chat:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMinimized(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (isChecking) {
    return null;
  }

  if (!hasGrin) {
    return (
      <div className="fixed left-4 top-1/2 -translate-y-1/2 w-80 bg-black/90 rounded-lg border border-purple-500/30 shadow-xl z-50 animate-fade-in p-6 text-center">
        <Lock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-purple-400 mb-2">Chat Locked</h3>
        <p className="text-gray-400">
          Hold GRIN tokens to chat with the Cheshire Terminal
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`fixed left-4 transition-all duration-300 ease-in-out z-50 ${
        isMinimized 
          ? 'bottom-4 w-12 h-12' 
          : 'top-1/2 -translate-y-1/2 w-80'
      }`}
    >
      <div className={`bg-black/90 rounded-lg border border-purple-500/30 shadow-xl h-full ${
        !isMinimized && 'animate-fade-in'
      }`}>
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full h-full flex items-center justify-center hover:bg-purple-500/20 rounded-lg transition-colors"
          >
            <MessageSquare className="text-purple-400" />
          </button>
        ) : (
          <>
            <div className="p-4 border-b border-purple-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="text-purple-400" />
                <h3 className="text-purple-400 font-bold">Cheshire Chat</h3>
              </div>
              <button
                onClick={() => setIsMinimized(true)}
                className="text-purple-400 hover:text-purple-300"
              >
                −
              </button>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${
                    msg.role === 'user' ? 'ml-auto bg-purple-500/20' : 'bg-green-500/20'
                  } p-3 rounded-lg max-w-[80%] animate-fade-in`}
                >
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-400"></div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-purple-500/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 bg-black/50 text-white p-2 rounded-lg border border-purple-500/50"
                  placeholder="Ask the Cheshire..."
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/30 transition-colors disabled:opacity-50"
                >
                  <Send className={`text-purple-400 ${isLoading ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};