import { useEffect, useState } from "react";
import Button from "../Button";
import DateInput from "../DateInput";
import { useApodStore } from "../../store/apods.store";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";
import { isValidDate } from "../../validators/date.validator";
import { SelectorProps } from "../../interface/selectors";
import { useTranslation } from "react-i18next";
import { TKeys } from "../../interface/translate";

export default function DateSelector({ setLoading }: SelectorProps) {
  const { t } = useTranslation();
  const { setApods, reset } = useApodStore();
  const [date, setDate] = useState<string>("");

  const onSearchDateApod = async () => {
    if (!isValidDate(date)) {
      toast.info(t(TKeys.InfoSelectDate));
      return;
    }

    setLoading(true);
    const explore: Apod[] = await getApodByDate(date);
    setLoading(false);

    if (explore.length === 0) {
      toast.error(t(TKeys.InfoNoResultsFound));
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
      <Button action={onSearchDateApod} text={t(TKeys.Explore)} />
    </div>
  );
}
