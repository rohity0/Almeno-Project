import { jwtDecode } from "jwt-decode";

export const helperFunction = (token) => {
  const { id } = token && jwtDecode(token);
  return id;
};
