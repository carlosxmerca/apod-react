import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Message from "../../components/Message";
import { useTranslation } from "react-i18next";
import { TKeys } from "../../interface/translate";

export default function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[60rem]">
      <Message message={t(TKeys.InfoLost)} />
      <Button action={() => navigate("/")} text={t(TKeys.Home)} w="w-full" />
    </div>
  );
}
