import React from "react";
import { AccessTokenInputModal } from "./AccessTokenInputModal";
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
      <div>
        <h1>
          Invalid GitHub Access Token key. Click&nbsp;
          <button onClick={removeAccessToken}>Here</button>&nbsp;to remove your
          access token and refresh
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        {commits.map((commit) => {
          return <h1 key={commit.sha}>Commit: {commit.sha}</h1>;
        })}
        <ButtonWithKeyIcon onClick={removeAccessToken} />
      </div>
    );
  }
}

export default App;

