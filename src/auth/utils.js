function jwtDecode(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const isValidToken = (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);

  if (!decoded.exp) {
    return true;
  }

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const setSession = (token) => {};
