import { Commit } from "./Commit";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";
import { T_Commit } from "./types";

type Props = {
  commits: T_Commit[];
  removeAccessToken: () => void;
  onRefresh: () => void;
};

export function CommitsList({
  commits,
  removeAccessToken,
  onRefresh: refresh,
}: Props) {
  return (
    <div>
      <button onClick={refresh}>refresh</button>
      {commits.map((commit) => (
        <Commit key={commit.sha} commit={commit} />
      ))}

      <ButtonWithKeyIcon onClick={removeAccessToken} />
    </div>
  );
}
