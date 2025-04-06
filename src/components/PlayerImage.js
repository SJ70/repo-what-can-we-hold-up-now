import { useEffect, useRef } from 'react';

const PlayerImage = ({ player, width = 200, height = 200 }) => {
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = player.alive 
      ? "/img/player/player-alive.png"
      : "/img/player/player-dead.png";


    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        data[i]     = player.color.r; // R
        data[i + 1] = player.color.g; // G
        data[i + 2] = player.color.b; // B
      }

      ctx.putImageData(imageData, 0, 0);
    };
  }, [player.alive, player.color, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export default PlayerImage;
