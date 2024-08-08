import satelite from "../../../assets/img/satellite.webp";

interface MessageProps {
  message: string;
}

export default function Message({ message }: MessageProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 p-4 pt-20">
      <img className="h-[8rem] object-contain" src={satelite} />
      <p className="text-lg">{message}</p>
    </div>
  );
}
