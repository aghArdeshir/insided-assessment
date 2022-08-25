const lsKey = "access-token";

class AccessTokenService {
  setAccessToken(accessToken: string) {
    localStorage.setItem(lsKey, accessToken);
  }

  getAccessToken() {
    return localStorage.getItem(lsKey);
  }

  removeAccessToken() {
    localStorage.removeItem(lsKey);
  }
}

export const accessTokenService = new AccessTokenService();
