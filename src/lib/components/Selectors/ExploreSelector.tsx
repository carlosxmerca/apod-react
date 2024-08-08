import { useEffect } from "react";
import { useApodStore } from "../../store/apods.store";
import Button from "../Button";
import { getRandomApod } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";

export default function ExploreSelector() {
  const { total, addApod, reset } = useApodStore();

  const onExploreApods = async () => {
    const explore: Apod[] = await getRandomApod();
    if (explore.length === 0) {
      toast.error("No results were found");
      return;
    }
    addApod(explore);
  };

  useEffect(() => reset(), []);

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-2">
        <p className="">Count:</p>
        <Button text={total.toString()} />
      </div>
      <Button action={onExploreApods} text="Explore" />
    </div>
  );
}
