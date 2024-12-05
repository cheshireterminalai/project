interface Props {
  url: string;
}

export function VideoDisplay({ url }: Props) {
  return (
    <div className="rounded-lg overflow-hidden bg-purple-900/20 border border-purple-500/30">
      <video
        src={url}
        controls
        autoPlay
        loop
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
