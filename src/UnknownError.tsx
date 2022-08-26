type Props = {
  removeAccessToken: () => void;
};

export function UnknownError({ removeAccessToken }: Props) {
  return (
    <>
      <h1>
        Unknown error occurred! Click&nbsp;
        <button
          style={{ fontSize: "inherit" }}
          onClick={() => window.location.reload()}
        >
          Here
        </button>
        &nbsp;to reload the page
      </h1>
      <h1>
        You can try removeing your access token as well&nbsp;
        <button style={{ fontSize: "inherit" }} onClick={removeAccessToken}>
          Remove Access Token
        </button>
      </h1>
    </>
  );
}
