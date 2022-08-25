import React, { useCallback, useEffect, useState } from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";
import { accessTokenService } from "./services/accessTokenService";

function App() {
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

  if (!accessToken) {
    return <AccessTokenInputModal onSubmit={setAccessToken} />;
  }

  return (
    <div>
      <ButtonWithKeyIcon onClick={removeAccessToken} />
    </div>
  );
}

export default App;

