import { useEffect, useState } from "react";
import { Apod } from "../../models/apod.model";
import { useApodStore } from "../../store/apods.store";
import Button from "../Button";
import DateInput from "../DateInput";
import { getApodsByRange } from "../../services/apod.services";
import { toast } from "sonner";
import {
  isValidDate,
  validateRangeSelection,
} from "../../validators/date.validator";
import { SelectorProps } from "../../interface/selectors";

export default function RangeSelector({ setLoading }: SelectorProps) {
  const { setApods, reset } = useApodStore();
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const onSearchByRange = async () => {
    if (!isValidDate(from) || !isValidDate(to)) {
      toast.info("Select a date range to explore!");
      return;
    }
    if (!validateRangeSelection(from, to)) {
      toast.info("Date interval should not be greater than 30 days");
      return;
    }

    setLoading(true);
    const explore: Apod[] = await getApodsByRange(from, to);
    setLoading(false);
    
    if (explore.length === 0) {
      toast.error("No results were found");
      return;
    }
    setApods(explore);
  };

  useEffect(() => reset(), []);

  return (
    <div className="w-full flex justify-between flex-wrap gap-2">
      <div className="w-full flex items-center justify-between gap-2">
        <DateInput value={from} onChange={setFrom} />
        <DateInput value={to} onChange={setTo} />
      </div>
      <div className="w-full">
        <Button action={onSearchByRange} text="Explore" w="w-full" />
      </div>
    </div>
  );
}
