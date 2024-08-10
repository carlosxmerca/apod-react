import Header from "../../components/Header";
import Card from "../../components/Cards/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { isValidDate } from "../../validators/date.validator";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import { toast } from "sonner";
import Button from "../../components/Button";
import { useBookmarksStore } from "../../store/bookmarks.store";

export default function ApodDetails() {
  const { id } = useParams();
  const { bookmarks, setBookmark } = useBookmarksStore();
  const navigate = useNavigate();
  const [apod, setApod] = useState<Apod | undefined>(undefined);

  useEffect(() => {
    const getData = async (date: string) => {
      if (!isValidDate(date)) {
        toast.info("Search date is not valid!");
        return;
      }
      const explore: Apod[] = await getApodByDate(date);
      if (explore.length === 0) {
        toast.error("No results were found");
        return;
      }
      setApod(explore?.[0]);
    };

    if (id) getData(id);
  }, [id]);

  return (
    <main className="flex flex-col items-center px-6">
      <Header showNav={false} />
      <div className="max-w-[60rem] pt-4 pb-8">
        {apod && (
          <>
            <Card apod={apod} />
            <Button
              action={() => setBookmark(apod.date)}
              text={bookmarks.has(apod.date) ? "Saved" : "Save"}
              theme={bookmarks.has(apod.date) ? "secondary" : "primary"}
              w="w-full mt-4"
            />
            <p className="text-base py-4">{apod.explanation}</p>
          </>
        )}
        <Button action={() => navigate("/")} text="Home" w="w-full" />
      </div>
    </main>
  );
}
