import { useNavigate } from "react-router-dom";
import { Apod } from "../../../models/apod.model";
import moment from "moment";
import Image from "../../Image";

interface CardProps {
  apod: Apod;
}

export default function Card({ apod }: CardProps) {
  const navigate = useNavigate();
  const dateFormat = moment(apod.date, "YYYY-MM-DD").format("MMMM Do YYYY");

  return (
    <div
      onClick={() => navigate(`/apod/${apod.date}`)}
      className="w-full relative h-[15rem] rounded-2xl"
    >
      <div className="z-10 absolute bottom-2 left-2">
        <p className="font-medium">{dateFormat}</p>
        <p className="font-medium">{apod.title}</p>
      </div>
      <div className="gradient-overlay"></div>
      <Image src={apod.url} className="rounded-2xl" />
    </div>
  );
}
