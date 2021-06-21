import { GET_USER, SET_USER } from "./user.types";

export const getUser = () => {
  console.log('akcija');
  return {
    type: GET_USER,
  };
};

export const setUser = (user) => {
  return {
  type: SET_USER,
  user: user,
}
};
