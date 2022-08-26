import { Commit } from "./Commit";
import { ButtonWithKeyIcon } from "./RemoveMyAccessKeyButton";
import { T_Commit } from "./types";

type Props = {
  commits: T_Commit[];
  removeAccessToken: () => void;
};

export function Commits({ commits, removeAccessToken }: Props) {
  return (
    <div>
      {commits.map((commit) => (
        <Commit key={commit.sha} commit={commit} />
      ))}

      <ButtonWithKeyIcon onClick={removeAccessToken} />
    </div>
  );
}
