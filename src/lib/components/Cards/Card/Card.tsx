import { useNavigate } from "react-router-dom";
import { Apod } from "../../../models/apod.model";

interface CardProps {
  apod: Apod;
}

export default function Card({ apod }: CardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apod/${apod.date}`)}
      className="w-full relative h-[15rem] rounded-2xl"
    >
      <div className="z-10 absolute bottom-2 left-2">
        <p className="font-medium">{new Date(apod.date).toDateString()}</p>
        <p className="font-medium">{apod.title}</p>
      </div>
      <div className="gradient-overlay"></div>
      <img className="h-full w-full object-cover rounded-2xl" src={apod.url} />
    </div>
  );
}
