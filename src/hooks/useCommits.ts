import { useCallback, useEffect, useState } from "react";
import { fetchCommits } from "../services/fetchCmomits";
import { T_Commit } from "../types";

const ONE_SECOND = 1000;

export function useCommits(accessToken: string | null) {
  const [error, setError] = useState<any>();
  const [commits, setCommits] = useState<T_Commit[]>([]);
  const [loading, setLoading] = useState(false);

  const _fetchCommits = useCallback(async () => {
    setLoading(true);

    setError(undefined);
    setCommits([]);

    try {
      setCommits(await fetchCommits());
    } catch (e) {
      setError(e);
    }

    setLoading(false);
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

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCommits((commits) =>
        commits.map((commit) => ({
          ...commit,
          commit: {
            ...commit.commit,
            author: {
              ...commit.commit.author,
              date: new Date(
                new Date(commit.commit.author?.date || "").getTime() -
                  ONE_SECOND
              ),
            },
          },
        }))
      );
    }, 1000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return { commits, error, refresh: _fetchCommits, loading };
}
