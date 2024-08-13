import Cards from "../../components/Cards";
import { useBookmarksStore } from "../../store/bookmarks.store";
import { useEffect } from "react";
import { useApodStore } from "../../store/apods.store";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import Button from "../../components/Button";
import { SelectorProps } from "../../interface/selectors";

export default function Bookmarks({ setLoading }: SelectorProps) {
  const { bookmarks, resetBookmarks } = useBookmarksStore();
  const { setApods, reset } = useApodStore();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const bookmarksArray: string[] = Array.from(bookmarks);
      const reqs: Promise<Apod[]>[] = bookmarksArray.map((item: string) =>
        getApodByDate(item)
      );

      const data: Apod[] = (await Promise.all(reqs)).flatMap(
        (apod: Apod[]) => apod
      );

      setApods(data);
      setLoading(false);
    };

    if (bookmarks.size > 0) getData();
  }, [bookmarks]);

  useEffect(() => reset(), []);

  return (
    <>
      <Cards />
      {bookmarks.size > 0 && (
        <Button
          action={() => {
            resetBookmarks();
            reset();
          }}
          text="Remove Bookmarks"
          w="w-full mb-4"
        />
      )}
    </>
  );
}
