import Card from "../../components/Cards/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isValidDate } from "../../validators/date.validator";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";
import Button from "../../components/Button";
import { useBookmarksStore } from "../../store/bookmarks.store";
import { SelectorProps } from "../../interface/selectors";
import { useTranslation } from "react-i18next";
import { TKeys } from "../../interface/translate";

export default function ApodDetails({ setLoading }: SelectorProps) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookmarks, setBookmark } = useBookmarksStore();
  const [apod, setApod] = useState<Apod | undefined>(undefined);

  useEffect(() => {
    const getData = async (date: string) => {
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
      setApod(explore?.[0]);
    };

    if (id) getData(id);
  }, [id]);

  return (
    <div className="max-w-[60rem] pt-4 pb-8">
      {apod && (
        <>
          <Card apod={apod} />
          <Button
            action={() => setBookmark(apod.date)}
            text={bookmarks.has(apod.date) ? t(TKeys.Saved) : t(TKeys.Save)}
            theme={bookmarks.has(apod.date) ? "secondary" : "primary"}
            w="w-full mt-4"
          />
          <p className="text-base py-4">{apod.explanation}</p>
        </>
      )}
      <Button action={() => navigate("/")} text={t(TKeys.Home)} w="w-full" />
    </div>
  );
}
