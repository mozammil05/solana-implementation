import { APIURL, SITE_URL } from "../../../constants";
import { apiCallGet } from "../../apiServices/ApiServices";

/** Function to get affiliate
 * @params referral addres (wallet address)
 * @returns affiliate address
 */
export const getTransactionsDetails = async ({
  walletAddress,
  page,
  limit,
}: {
  walletAddress: string;
  page: number;
  limit: number;
}) => {
  try {
    const result: any = await apiCallGet(
      SITE_URL,
      APIURL.GET_TRANSACTION + "/" + walletAddress + "/" + (page + "/" + limit)
    );
    if (result) {
      return result;
    }
  } catch (error: any) {
    console.error("Error in getAffiliateAddress", error);
  }
};
