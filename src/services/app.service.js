import { toast } from "react-toastify";
import {
  API_FAILURE_ERROR,
  ERROR_STATUS,
  NO_DATA,
  SESSION_EXPIRED_LOG_OUT
} from "../constants";

export const AppService = {
  /**
   * Set http options
   * Default: GET, application/json
   * @default method GET
   * @default headers { 'Content-Type': 'application/json' }
   * @default credentials 'include' required to accept and send cookies
   */
  options: () => {
    return {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    };
  },

  /**
   * Make a fetch API call
   * @param {string} url fully qualified url
   * @param {object} requestOptions options object from options()
   */
  makeRequest: async (url, requestOptions) => {
    const response = await fetch(url, requestOptions);

    if (!response.ok && response.statusText === "Unauthorized") {
      toast.error(SESSION_EXPIRED_LOG_OUT);
      window.location.href = "/login";
    } else if (!response.ok) {
      toast.error(API_FAILURE_ERROR + response.statusText);
      return NO_DATA;
    } else {
      let resp = await response.json();
      if (resp && resp.status && ERROR_STATUS.includes(resp.status)) {
        // sometimes failed API will still be 200 OK but error in body
        toast.error(API_FAILURE_ERROR + resp.message);
        return NO_DATA;
      }
      return resp;
    }
  }
};
