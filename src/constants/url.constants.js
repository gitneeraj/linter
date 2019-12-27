export const BASE_API_URL =
  window.location.hostname === 'localhost'
    ? `http://${window.location.hostname}:3000/`
    : `https://${window.location.hostname}/`;

const PATH = '?path=';
export const MEMBER = 'member';
export const COMMAN_API = 'api';
export const GET_ALL_TARGET_CATEGORIES = PATH + 'protection/';
export const GET_ACTIVITY = PATH + 'activity/';
export const GET_ALL_FIELDS = PATH + 'fields/';
export const GET_PROFILE = PATH + 'profile/';
export const UPDATE_PROFILE = PATH + 'update-data/';
export const GET_USER_SUBSCRIPTION = PATH + 'subscription/';
export const GET_ALL_SUBSCRIPTION_PLANS =
  PATH + 'auth/accounts/subscription-plans/';
export const LOGIN = PATH + 'auth/accounts/login/';
