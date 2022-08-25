import React, { useEffect, useState } from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { accessTokenServiec } from "./services/accessTokenService";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    accessTokenServiec.getAccessToken()
  );

  useEffect(() => {
    if (accessToken) {
      accessTokenServiec.setAccessToken(accessToken);
    }
  }, [accessToken]);

  if (!accessToken) {
    return <AccessTokenInputModal onSubmit={setAccessToken} />;
  }

  return <div />;
}

export default App;

