import { Commit } from "./Commit";
import { T_Commit } from "../types/types";

type Props = {
  commits: T_Commit[];
};

export function CommitsList({ commits }: Props) {
  return (
    <>
      {commits.map((commit) => (
        <Commit key={commit.sha} commit={commit} />
      ))}
    </>
  );
}
