import { jwtDecode } from "jwt-decode";

export const getUserFromJwt = (token: string) => {
  const decoded: {
    id: string;
    name: string;
    email: string;
    role_name: string;
  } = jwtDecode(token);

  const user = {
    id: decoded.id,
    name: decoded.name,
    email: decoded.email,
    roleName: decoded.role_name,
  };

  return user;
};
