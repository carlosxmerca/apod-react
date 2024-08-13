import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Message from "../../components/Message";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[60rem]">
      <Message message="Looks like you are lost!" />
      <Button action={() => navigate("/")} text="Home" w="w-full" />
    </div>
  );
}
