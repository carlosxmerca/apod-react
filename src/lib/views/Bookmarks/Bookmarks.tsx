import Header from "../../components/Header";
import Cards from "../../components/Cards";
import { useBookmarksStore } from "../../store/bookmarks.store";
import { useEffect, useState } from "react";
import { useApodStore } from "../../store/apods.store";
import { getApodByDate } from "../../services/apod.services";
import { Apod } from "../../models/apod.model";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

export default function Bookmarks() {
  const { bookmarks, resetBookmarks } = useBookmarksStore();
  const { setApods, reset } = useApodStore();
  const [loading, setLoading] = useState<boolean>(false);

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
      <Loading loading={loading} />
      <main className="flex flex-col items-center px-6">
        <Header />
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
      </main>
    </>
  );
}
