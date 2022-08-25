import { useEffect, useState } from "react";
import { fetchCommits } from "../services/fetchCmomits";
import { T_Commit } from "../types";

export function useCommits(accessToken: string | null) {
  const [error, setError] = useState<any>();
  const [commits, setCommits] = useState<T_Commit[]>([]);

  useEffect(() => {
    setError(undefined);
    setCommits([]);
  }, [accessToken]);

  useEffect(() => {
    async function _fetchCommits() {
      try {
        setCommits(await fetchCommits());
      } catch (e) {
        setError(e);
      }
    }

    if (accessToken) {
      _fetchCommits();
    }
  }, [accessToken]);

  return { commits, error };
}
