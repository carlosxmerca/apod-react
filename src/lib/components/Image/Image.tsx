import { useState } from "react";
import image404 from "../../../assets/img/404.png";

interface ImageProps {
  src: string;
  className?: string;
}

export default function Image({ src, className }: ImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleError = () => {
    setCurrentSrc(image404);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gray-800 animate-pulse ${className}`}
        ></div>
      )}
      <img
        src={currentSrc}
        className={`w-full h-full object-cover ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300 ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        alt=""
      />
    </div>
  );
}
