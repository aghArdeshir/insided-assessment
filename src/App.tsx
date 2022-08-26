import React from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { CommitsList } from "./CommitsList";
import { ERRORS } from "./constants/errors";
import { useAccessToken } from "./hooks/useAccessToken";
import { useCommits } from "./hooks/useCommits";
import { InvalidTokenError } from "./InvalidTokenError";
import { UnknownError } from "./UnknownError";

function App() {
  const { accessToken, setAccessToken, removeAccessToken } = useAccessToken();
  const { commits, error, refresh, loading } = useCommits(accessToken);

  const noAccessToken = !accessToken;
  const invalidTokenError = error === ERRORS.INVALID_TOKEN;
  const unknownError = !invalidTokenError && !!error;

  if (noAccessToken) {
    return <AccessTokenInputModal onSubmit={setAccessToken} />;
  } else if (invalidTokenError) {
    return <InvalidTokenError removeAccessToken={removeAccessToken} />;
  } else if (unknownError) {
    return <UnknownError />;
  } else if (loading) {
    return <h1>LOADING</h1>;
  } else {
    // this code branch means everything is fine, we just show commits
    return (
      <CommitsList
        commits={commits}
        removeAccessToken={removeAccessToken}
        onRefresh={refresh}
      />
    );
  }
}

export default App;

