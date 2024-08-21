import { useTranslation } from "react-i18next";
import { TKeys } from "../../../interface/translate";
import NavOption from "./NavOption";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex justify-around mt-6">
      <NavOption route="/" value={t(TKeys.Explore)} />
      <NavOption route="/range" value={t(TKeys.Range)} />
      <NavOption route="/date" value={t(TKeys.Date)} />
      <NavOption route="/bookmarks" value={t(TKeys.Bookmarks)} />
    </nav>
  );
}
