export const checkAuth = () => {
    const loggedIn = document.cookie.split(';').some((cookie) => cookie.trim().startsWith('loggedIn='));
    return loggedIn;
  };