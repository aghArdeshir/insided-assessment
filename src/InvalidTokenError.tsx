type Props = {
  removeAccessToken: () => void;
};

export function InvalidTokenError({ removeAccessToken }: Props) {
  return (
    <h1>
      Invalid GitHub Access Token key. Click&nbsp;
      <button style={{ fontSize: "inherit" }} onClick={removeAccessToken}>
        Here
      </button>
      &nbsp;to remove your access token and refresh
    </h1>
  );
}
