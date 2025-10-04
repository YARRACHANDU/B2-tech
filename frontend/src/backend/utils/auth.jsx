import { jwtDecode } from "jwt-decode"; // ✅


export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    // check expiry
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } catch {
    return false;
  }
};

export const getUserEmail = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.email;
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
export const getToken = () => localStorage.getItem("token");