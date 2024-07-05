import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**AUTHGAURD FOR OUTER PAGES */
export const WithoutAuth = (props: any) => {
  const userDetails = useSelector((state: any) => state.user);
  console.log(userDetails, "userDetails");

  return userDetails?.walletAddress ? props.children : <Navigate to="/" />;
};
