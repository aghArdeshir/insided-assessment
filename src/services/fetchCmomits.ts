import { Octokit } from "octokit";
import { accessTokenServiec } from "./accessTokenService";

export async function fetchCommits() {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: accessTokenServiec.getAccessToken(),
  });

  await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "aghArdeshir",
    repo: "insided-assessment",
  });
}
