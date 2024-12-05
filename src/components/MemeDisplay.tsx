interface Props {
  url: string;
}

export function MemeDisplay({ url }: Props) {
  return (
    <div className="rounded-lg overflow-hidden bg-purple-900/20 border border-purple-500/30">
      <img
        src={url}
        alt="Generated meme"
        className="w-full h-auto"
        style={{ maxHeight: '500px', objectFit: 'contain' }}
      />
      <div className="p-4 flex justify-between items-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          Open in new tab
        </a>
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = url;
            link.download = 'grin-meme.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          Download
        </button>
      </div>
    </div>
  );
}
