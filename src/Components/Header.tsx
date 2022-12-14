import styled from "styled-components";
import { AutoRefresh } from "./AutoRefresh";
import refreshIcon from "../icons/refresh.png";
import keyIcon from "../icons/key.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  position: sticky;
  top: 0;

  background-color: #20232a;
  color: white;
`;

type Props = {
  removeAccessToken: () => void;
  onRefresh: () => void;
};

export function Header({ onRefresh: refresh, removeAccessToken }: Props) {
  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={refresh} title="Refresh Now">
          <img src={refreshIcon} alt="Refresh" width={32} height={32} />
        </button>
        <AutoRefresh
          style={{ marginLeft: 20, fontSize: 20 }}
          onRefresh={refresh}
        />
      </div>
      <button
        onClick={removeAccessToken}
        title="Remove GitHub Access Token key"
      >
        <img width={32} height={32} src={keyIcon} alt="Key" />
      </button>
    </Wrapper>
  );
}
