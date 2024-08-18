import { useEffect } from "react";
import { useApodStore } from "../../store/apods.store";
import Button from "../Button";
import { getRandomApod } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";
import { SelectorProps } from "../../interface/selectors";
import { useTranslation } from "react-i18next";
import { TKeys } from "../../interface/translate";

export default function ExploreSelector({ setLoading }: SelectorProps) {
  const { t } = useTranslation();
  const { total, addApod, reset } = useApodStore();

  const onExploreApods = async () => {
    setLoading(true);
    const explore: Apod[] = await getRandomApod();
    setLoading(false);
    if (explore.length === 0) {
      toast.error(t(TKeys.InfoNoResultsFound));
      return;
    }
    addApod(explore);
  };

  useEffect(() => reset(), []);

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-2">
        <p className="">{t(TKeys.Count)}</p>
        <Button text={total.toString()} />
      </div>
      <Button action={onExploreApods} text={t(TKeys.Explore)} />
    </div>
  );
}
