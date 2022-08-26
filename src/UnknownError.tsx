export function UnknownError() {
  return (
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
  );
}
