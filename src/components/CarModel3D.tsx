
import React, { useRef, useEffect } from 'react';

interface CarModel3DProps {
  color?: string;
  className?: string;
}

export const CarModel3D: React.FC<CarModel3DProps> = ({ 
  color = "#2563eb", 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 200;

    let rotation = 0;

    const drawCar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rotation);
      
      // Car body shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(-65, 35, 130, 8);
      
      // Car body
      ctx.fillStyle = color;
      ctx.fillRect(-60, -20, 120, 25);
      
      // Car roof
      ctx.fillStyle = color;
      ctx.fillRect(-40, -35, 80, 15);
      
      // Windows
      ctx.fillStyle = 'rgba(200, 230, 255, 0.8)';
      ctx.fillRect(-35, -30, 25, 10);
      ctx.fillRect(10, -30, 25, 10);
      
      // Wheels
      ctx.fillStyle = '#1f2937';
      ctx.beginPath();
      ctx.arc(-35, 10, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(35, 10, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Wheel rims
      ctx.fillStyle = '#6b7280';
      ctx.beginPath();
      ctx.arc(-35, 10, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(35, 10, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Headlights
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(58, -10, 8, 6);
      ctx.fillRect(58, 4, 8, 6);
      
      // Grille
      ctx.fillStyle = '#374151';
      ctx.fillRect(50, -8, 10, 16);
      
      ctx.restore();
      
      rotation += 0.01;
      animationRef.current = requestAnimationFrame(drawCar);
    };

    drawCar();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [color]);

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <canvas 
        ref={canvasRef}
        className="max-w-full max-h-full rounded-lg"
        style={{ 
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
        }}
      />
    </div>
  );
};
