import { useCallback, useEffect, useState } from "react";
import { accessTokenService } from "../services/accessTokenService";

export function useAccessToken() {
  const [accessToken, setAccessToken] = useState<string | null>(
    accessTokenService.getAccessToken()
  );

  const removeAccessToken = useCallback(() => {
    accessTokenService.removeAccessToken();
    setAccessToken(null);
  }, []);

  useEffect(() => {
    if (accessToken) {
      accessTokenService.setAccessToken(accessToken);
    }
  }, [accessToken]);

  return { accessToken, setAccessToken, removeAccessToken };
}
