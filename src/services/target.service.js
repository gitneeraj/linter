import { AppService } from ".";
import { BASE_API_URL, MEMBER, GET_ALL_TARGET_CATEGORIES } from "../constants";

const options = AppService.options();

export const targetService = {
  get_all_target_categories: async () => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + GET_ALL_TARGET_CATEGORIES,
      { ...options, method: "POST" }
    );

    return response;
  }
};
