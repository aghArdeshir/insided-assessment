import React from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { useAccessToken } from "./hooks/useAccessToken";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";

function App() {
  const { accessToken, setAccessToken, removeAccessToken } = useAccessToken();

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

