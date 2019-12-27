import { AppService } from ".";
import {
  BASE_API_URL,
  COMMAN_API,
  GET_ALL_SUBSCRIPTION_PLANS
} from "../constants";

const options = AppService.options();

export const get_all_subscription_plans = async () => {
  const response = await AppService.makeRequest(
    BASE_API_URL + COMMAN_API + GET_ALL_SUBSCRIPTION_PLANS,
    { ...options, method: "POST" }
  );

  return response;
};
