import { useEffect, useState } from "react";
import Button from "../Button";
import DateInput from "../DateInput";
import { useApodStore } from "../../store/apods.store";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";
import { isValidDate } from "../../validators/date.validator";

export default function DateSelector() {
  const { setApods, reset } = useApodStore();
  const [date, setDate] = useState<string>("");

  const onSearchDateApod = async () => {
    if (!isValidDate(date)) {
      toast.info("Select a date to explore!");
      return;
    }
    console.log(date);
    const explore: Apod[] = await getApodByDate(date);
    if (explore.length === 0) {
      toast.error("No results were found");
      return;
    }
    setApods(explore);
  };

  useEffect(() => reset(), []);

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-2">
        <DateInput value={date} onChange={setDate} />
      </div>
      <Button action={onSearchDateApod} text="Explore" />
    </div>
  );
}
