import { Commit } from "./Commit";
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
    <>
      {commits.map((commit) => (
        <Commit key={commit.sha} commit={commit} />
      ))}
    </>
  );
}
