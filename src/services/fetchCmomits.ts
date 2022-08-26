import { Octokit } from "octokit";
import { ERRORS } from "../constants/errors";
import { accessTokenService } from "./accessTokenService";

export async function fetchCommits() {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: accessTokenService.getAccessToken(),
  });

  try {
    return (
      await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: "aghArdeshir",
        repo: "insided-assessment",
      })
    ).data.map((commit) => {
      return {
        ...commit,
        commit: {
          ...commit.commit,
          author: {
            ...commit.commit.author,
            date: new Date(commit.commit.author?.date || ""),
          },
        },
      };
    });
  } catch (e: any) {
    if (e.status === 401) {
      throw ERRORS.INVALID_TOKEN;
    } else {
      throw e;
    }
  }
}
