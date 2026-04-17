import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
function Logout() {
  const { isPending, logout } = useLogout();
  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? <HiArrowLeftOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
