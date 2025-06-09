import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface AnimatedCardProps {
  children: React.ReactNode;
  initialBgColor: string;
  hoverBgColor: string;
  textColor: string; // For initial state
  hoverTextColor?: string; // For hover state, defaults to white
  clickedTextColor?: string; // Text color when card is clicked (bg white)
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  initialBgColor,
  hoverBgColor,
  textColor,
  hoverTextColor = '#ffffff', // Default hover text to white
  clickedTextColor = '#1e293b', // Default clicked text to dark slate gray
  className = ""
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const cardVariants = {
    initial: { backgroundColor: initialBgColor, color: textColor },
    hover: { backgroundColor: hoverBgColor, color: hoverTextColor, scale: 1.02 }, // Added scale for hover
    clicked: { backgroundColor: "#ffffff", color: clickedTextColor, scale: 1.1 }, // Increased scale
  };

  const cardTransition = {
    type: "spring",
    stiffness: 400,
    damping: 10
  };

  return (
    <motion.div
      className={`text-center p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer rounded-xl ${className}`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      animate={isClicked ? "clicked" : "initial"}
      onClick={handleClick}
      transition={cardTransition}
    >
      <CardContent className="p-4">
        {children}
      </CardContent>
    </motion.div>
  );
};