import { useCallback, useEffect, useState } from "react";
import { fetchCommits } from "../services/fetchCmomits";
import { T_Commit } from "../types";

export function useCommits(accessToken: string | null) {
  const [error, setError] = useState<any>();
  const [commits, setCommits] = useState<T_Commit[]>([]);

  const _fetchCommits = useCallback(async () => {
    setError(undefined);
    setCommits([]);

    try {
      setCommits(await fetchCommits());
    } catch (e) {
      setError(e);
    }
  }, []);

  useEffect(() => {
    setError(undefined);
    setCommits([]);
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      _fetchCommits();
    }
  }, [_fetchCommits, accessToken]);

  return { commits, error, refresh: _fetchCommits };
}
