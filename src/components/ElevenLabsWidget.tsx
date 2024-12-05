import { useEffect, useRef } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

export const ElevenLabsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadScript = () => {
      if (!scriptRef.current) {
        const script = document.createElement('script');
        script.src = 'https://elevenlabs.io/convai-widget/index.js';
        script.async = true;
        script.type = 'text/javascript';
        
        script.onload = () => {
          console.log('ElevenLabs widget script loaded');
          if (widgetRef.current) {
            const widget = document.createElement('elevenlabs-convai');
            widget.setAttribute('agent-id', 'lwiJrJFJXhXCJTiYfQxV');
            widget.className = 'elevenlabs-widget';
            widgetRef.current.appendChild(widget);
          }
        };
        
        script.onerror = (error) => {
          console.error('Error loading ElevenLabs widget script:', error);
        };
        
        document.body.appendChild(script);
        scriptRef.current = script;
      }
    };

    loadScript();

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-black rounded-lg p-2">
          <div ref={widgetRef} className="min-w-[300px] min-h-[200px]" />
        </div>
      </div>
    </div>
  );
};