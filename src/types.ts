import { Object } from "ts-toolbelt";

export type T_GitHub_Commit = {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: {
    url: string;
    message: string;
    author: {
      name?: string;
      email?: string;
      date?: string;
    } | null;
    verification?: {};
  };
  files?: {}[];
};

export type T_Commit = Object.Merge<
  T_GitHub_Commit,
  {
    commit: {
      author: {
        date?: Date;
      };
    };
  },
  "deep"
>;
