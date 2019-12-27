import { AppService } from ".";
import { BASE_API_URL, MEMBER, GET_ACTIVITY } from "../constants";

const options = AppService.options();

export const activityService = {
  get_activity: async () => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + GET_ACTIVITY,
      { ...options, method: "POST" }
    );

    return response;
  }
};
