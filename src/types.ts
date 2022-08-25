export type T_Commit = {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: {
    url: string;
    message: string;
    author: {
      name?: string | undefined;
      email?: string | undefined;
      date?: string | undefined;
    } | null;
    verification?: {} | undefined;
  };
  files?: {}[] | undefined;
};
