import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**AUTHGAURD FOR INNER PAGES */
export const RequireAuth = (props: any) => {
  const isTCAccepted = useSelector((state: any) => state?.user?.isTCAccepted);
  console.log(isTCAccepted, "userDetails");
  return isTCAccepted ? props.children : null;
};
