import React from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
import { Commit } from "./Commit";
import { ERRORS } from "./constants/errors";
import { useAccessToken } from "./hooks/useAccessToken";
import { useCommits } from "./hooks/useCommits";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";

function App() {
  const { accessToken, setAccessToken, removeAccessToken } = useAccessToken();
  const { commits, error } = useCommits(accessToken);

  if (!accessToken) {
    return <AccessTokenInputModal onSubmit={setAccessToken} />;
  } else if (error === ERRORS.INVALID_TOKEN) {
    return (
      <h1>
        Invalid GitHub Access Token key. Click&nbsp;
        <button style={{ fontSize: "inherit" }} onClick={removeAccessToken}>
          Here
        </button>
        &nbsp;to remove your access token and refresh
      </h1>
    );
  } else if (error) {
    return (
      <h1>
        Unknown error occurred! Click&nbsp;
        <button
          style={{ fontSize: "inherit" }}
          onClick={window.location.reload}
        >
          Here
        </button>
        &nbsp;to reload the page
      </h1>
    );
  } else {
    return (
      <div>
        {commits.map((commit) => (
          <Commit key={commit.sha} commit={commit} />
        ))}

        <ButtonWithKeyIcon onClick={removeAccessToken} />
      </div>
    );
  }
}

export default App;

