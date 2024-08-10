import { useState } from "react";
import image404 from "../../../assets/img/404.png";

interface ImageProps {
  src: string;
  className?: string;
}

export default function Image({ src, className }: ImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  const handleError = () => {
    setCurrentSrc(image404);
  };

  return (
    <img
      src={currentSrc}
      className={`w-full h-full object-cover ${className}`}
      onError={handleError}
      alt=""
    />
  );
}
