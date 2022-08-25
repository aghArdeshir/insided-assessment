import React, { useEffect, useState } from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { accessTokenService } from "./services/accessTokenService";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    accessTokenService.getAccessToken()
  );

  useEffect(() => {
    if (accessToken) {
      accessTokenService.setAccessToken(accessToken);
    }
  }, [accessToken]);

  if (!accessToken) {
    return <AccessTokenInputModal onSubmit={setAccessToken} />;
  }

  return <div />;
}

export default App;

