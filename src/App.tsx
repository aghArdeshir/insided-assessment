import React from "react";
import { AccessTokenInputModal } from "./Components/AccessTokenInputModal";
import { CommitsList } from "./Components/CommitsList";
import { ERRORS } from "./constants/errors";
import { Header } from "./Components/Header";
import { useAccessToken } from "./hooks/useAccessToken";
import { useCommits } from "./hooks/useCommits";
import { InvalidTokenError } from "./Components/InvalidTokenError";
import { Loading } from "./Components/Loading";
import { UnknownError } from "./Components/UnknownError";

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
    return <UnknownError removeAccessToken={removeAccessToken} />;
  } else if (loading) {
    return <Loading />;
  } else {
    // this code branch means everything is fine, we just show commits
    return (
      <>
        <Header onRefresh={refresh} removeAccessToken={removeAccessToken} />
        <CommitsList
          commits={commits}
          removeAccessToken={removeAccessToken}
          onRefresh={refresh}
        />
      </>
    );
  }
}

export default App;

