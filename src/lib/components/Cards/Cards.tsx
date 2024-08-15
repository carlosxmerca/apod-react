import Message from "../Message";
import { Apod } from "../../models/apod.model";
import Card from "./Card/Card";
import { useApodStore } from "../../store/apods.store";

export default function Cards() {
  const { apods } = useApodStore();

  return (
    <div className="w-full flex-col flex-1 pt-4 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apods.map((apod: Apod) => (
          <Card key={apod.date} apod={apod} />
        ))}
      </div>
      {apods.length === 0 && <Message message="Start exploring!" />}
    </div>
  );
}
