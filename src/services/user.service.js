import { toast } from 'react-toastify';
import { AppService } from '.';
import {
  BASE_API_URL,
  MEMBER,
  COMMAN_API,
  GET_ALL_FIELDS,
  GET_PROFILE,
  UPDATE_PROFILE,
  GET_USER_SUBSCRIPTION,
  LOGIN,
  LOGOUT_SUCCESSFUL,
  AUTH_TOKEN_NAME
} from '../constants';

const options = AppService.options();

export const userService = {
  get_all_fields: async () => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + GET_ALL_FIELDS,
      { ...options, method: 'POST' }
    );

    return response;
  },

  get_profile: async () => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + GET_PROFILE,
      { ...options, method: 'POST' }
    );

    return response;
  },

  update_profile: async data => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + UPDATE_PROFILE,
      {
        ...options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
    );

    return response;
  },

  get_user_subscription: async () => {
    const response = await AppService.makeRequest(
      BASE_API_URL + MEMBER + GET_USER_SUBSCRIPTION,
      { ...options, method: 'POST' }
    );

    return response;
  },

  login: async data => {
    const response = await AppService.makeRequest(
      BASE_API_URL + COMMAN_API + LOGIN,
      { ...options, method: 'POST', body: JSON.stringify(data) }
    );

    return response;
  },

  logout: () => {
    document.cookie =
      AUTH_TOKEN_NAME + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    toast.success(LOGOUT_SUCCESSFUL);
    window.location.href = '/';
  }
};
